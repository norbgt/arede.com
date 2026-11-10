// arede.online · LOCAL: diz qual é a cidade de uma posição já arredondada (cerca de 1 km).
// É a reserva da localização automática: o site resolve a cidade no próprio aparelho, com a lista de municípios do Brasil,
// e só chama esta função quando a lista não resolve (fora do Brasil, por exemplo).
// Nada é guardado: nem a posição, nem o endereço de rede (dele fica só um código embaralhado, por um dia, para limitar abuso).
// A cidade vem de mapas abertos (Nominatim e, na falta dele, Photon), consultados pelo servidor: o serviço de mapas não vê quem perguntou.
// GET ?lat=-23.55&lon=-46.63
import { createClient } from "npm:@supabase/supabase-js@2";

const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const UA = "arede-local/1.0 (+https://arede.online/; contato@arede.online)";
const SITE = "https://arede.online";
const cab = (origem: string) => ({ "access-control-allow-origin": origem === SITE ? origem : SITE, "access-control-allow-headers": "authorization, apikey, content-type, x-client-info",
  "access-control-allow-methods": "GET, OPTIONS", "vary": "origin", "cache-control": "no-store", "content-type": "application/json; charset=utf-8" });
const cache = new Map<string, unknown>();
let ultima = 0;
const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));
async function embaralha(t: string): Promise<string> {
  const b = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)));
  return Array.from(b).map((x) => x.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req: Request) => {
  const H = cab(req.headers.get("origin") || "");
  const resp = (corpo: unknown, status = 200) => new Response(JSON.stringify(corpo), { status, headers: H });
  if (req.method === "OPTIONS") return new Response(null, { headers: H });
  if (req.method !== "GET") return resp({ erro: "método não aceito" }, 405);
  const u = new URL(req.url), slat = u.searchParams.get("lat"), slon = u.searchParams.get("lon");
  const lat = Number(slat), lon = Number(slon);
  if (slat === null || slon === null || !/^-?\d{1,2}(\.\d{1,6})?$/.test(slat) || !/^-?\d{1,3}(\.\d{1,6})?$/.test(slon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) return resp({ erro: "posição inválida" }, 400);
  const la = Math.round(lat * 100) / 100, lo = Math.round(lon * 100) / 100, k = la + "," + lo;   // arredonda de novo: cerca de 1 km
  if (cache.has(k)) return resp(cache.get(k));
  const ip = req.headers.get("cf-connecting-ip") || (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "sem-ip";
  const { data: pode, error } = await SB.rpc("local_ritmo", { p_chave: await embaralha(ip + "|" + new Date().toISOString().slice(0, 10)) });
  if (error || pode === false) return resp({ erro: "muitas consultas; tente mais tarde" }, 429);
  const falta = 1100 - (Date.now() - ultima); if (falta > 0) await espera(falta); ultima = Date.now();   // o Nominatim pede no máximo 1 consulta por segundo
  // dois mapas abertos, um suprindo o outro: Nominatim (OpenStreetMap) e Photon (Komoot, sobre os mesmos dados)
  const pega = async (url: string) => { const c = new AbortController(), t = setTimeout(() => c.abort(), 7000);
    try { const r = await fetch(url, { signal: c.signal, headers: { "user-agent": UA, accept: "application/json" } }); return r.ok ? await r.json() : { falha: r.status }; }
    catch (e) { return { falha: String((e as Error).name || e) }; } finally { clearTimeout(t); } };
  const corta = (v: unknown, n: number) => String(v || "").slice(0, n);
  const falhas: unknown[] = [];
  let out: Record<string, string> | null = null;
  const n = await pega(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=10&addressdetails=1&accept-language=pt-BR&lat=${la}&lon=${lo}`);
  if (n && n.address) { const a = n.address, iso = String(a["ISO3166-2-lvl4"] || "");
    out = { cidade: corta(a.city || a.town || a.village || a.municipality || a.county, 80), uf: /^BR-[A-Z]{2}$/.test(iso) ? iso.slice(3) : "", estado: corta(a.state, 80), pais: corta(a.country, 60), pais_codigo: corta(a.country_code, 2).toUpperCase() };
  } else falhas.push({ nominatim: n && n.falha });
  if (!out || !out.cidade) { const f = await pega(`https://photon.komoot.io/reverse?lat=${la}&lon=${lo}&limit=1`), q = f && f.features && f.features[0] && f.features[0].properties;
    if (q) out = { cidade: corta(q.city || q.town || q.village || q.county || (["city", "town", "village", "locality"].includes(q.type) ? q.name : ""), 80), uf: "", estado: corta(q.state, 80), pais: corta(q.country, 60), pais_codigo: corta(q.countrycode, 2).toUpperCase() };
    else falhas.push({ photon: f && f.falha }); }
  if (!out || !out.cidade) return resp({ erro: "serviço de mapas indisponível", falhas }, 502);
  if (cache.size > 500) cache.clear();
  cache.set(k, out);
  return resp(out);
});
