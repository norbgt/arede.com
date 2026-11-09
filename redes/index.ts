// a rede.com · REDES: lê o feed público de um perfil em outra rede (Letterboxd, Substack, Medium, Pinterest)
// e devolve as publicações em formato único. Só leitura, só o que já é público, nada é guardado aqui.
// O endereço do feed é montado pela função a partir da rede e do nome de usuário: ela não busca endereços arbitrários.
// GET ?rede=letterboxd&usuario=amanda
import { XMLParser } from "npm:fast-xml-parser@4.4.1";

const UA = "Mozilla/5.0 (compatible; arede-redes/1.0; +https://norbgt.github.io/arede.com/)";
const CORS = { "access-control-allow-origin": "*", "access-control-allow-headers": "authorization, apikey, content-type, x-client-info", "access-control-allow-methods": "GET, OPTIONS" };
const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", textNodeName: "#text", processEntities: true, htmlEntities: true });
const lista = (x: any) => (Array.isArray(x) ? x : x == null ? [] : [x]);
const texto = (x: any): string => (x == null ? "" : typeof x === "string" ? x : typeof x === "number" ? String(x) : Array.isArray(x) ? texto(x[0]) : (x["#text"] ?? "") + "");
const ENT: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", mdash: "—", ndash: "–", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“" };
const limpa = (h: string) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m).replace(/\s+/g, " ").trim();
// trecho com frases inteiras (até ~300 caracteres; se a primeira frase for maior, vai ela inteira)
function trecho(t: string): string {
  const fr = t.match(/[^.!?…]+[.!?…]+["”’)]*\s*|[^.!?…]+$/g) || [];
  let out = ""; for (const f of fr) { if (out && (out + f).length > 300) break; out += f; if (out.length > 300) break; }
  return out.trim();
}
function imgDe(html: string): string | null {
  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) { const u = m[1]; if (u.startsWith("https://") && !/\/_\/stat|pixel|tracking|1x1/i.test(u)) return u; }
  return null;
}

type Alvo = { rede: string; feed: string; perfil: string; usuario: string; checa?: RegExp };
function alvo(rede: string, bruto: string): Alvo | null {
  let u = (bruto || "").trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/[?#].*$/, "").replace(/\/+$/, "");
  if (rede === "letterboxd") { u = u.replace(/^letterboxd\.com\//i, "").replace(/^@/, "").split("/")[0];
    return /^[A-Za-z0-9_]{2,30}$/.test(u) ? { rede, usuario: u, feed: `https://letterboxd.com/${u}/rss/`, perfil: `https://letterboxd.com/${u}/` } : null; }
  if (rede === "medium") { u = u.replace(/^medium\.com\//i, "").replace(/^feed\//i, "").replace(/^@/, "").split("/")[0];
    return /^[A-Za-z0-9_.-]{1,40}$/.test(u) ? { rede, usuario: u, feed: `https://medium.com/feed/@${u}`, perfil: `https://medium.com/@${u}` } : null; }
  if (rede === "pinterest") { u = u.replace(/^([a-z]{2}\.)?pinterest\.[a-z.]+\//i, "").replace(/^@/, "").replace(/\/(feed\.rss|_saved|_created)$/i, "").replace(/\.rss$/i, "");
    const [p, b] = u.split("/");
    if (!/^[A-Za-z0-9_.-]{3,40}$/.test(p || "") || (b && !/^[A-Za-z0-9_-]{1,80}$/.test(b))) return null;
    return { rede, usuario: b ? p + "/" + b : p, feed: b ? `https://www.pinterest.com/${p}/${b}.rss` : `https://www.pinterest.com/${p}/feed.rss`, perfil: `https://www.pinterest.com/${p}/${b ? b + "/" : ""}` }; }
  if (rede === "substack") { u = u.replace(/\/(feed|archive|p\/.*)$/i, "").replace(/^@/, "");
    if (/^[a-z0-9-]{2,60}$/i.test(u)) u = u + ".substack.com";
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(u)) return null;
    // domínio próprio: só vale se o feed for mesmo de uma publicação do Substack
    return { rede, usuario: u.replace(/\.substack\.com$/i, ""), feed: `https://${u}/feed`, perfil: `https://${u}/`, checa: /\.substack\.com\b|substackcdn\.com|<generator>Substack/i }; }
  return null;
}

async function get(url: string) {
  const c = new AbortController(); const t = setTimeout(() => c.abort(), 12000);
  try { const r = await fetch(url, { signal: c.signal, redirect: "follow", headers: { "user-agent": UA, accept: "application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.8" } });
    const buf = new Uint8Array(await r.arrayBuffer()).slice(0, 3_000_000);
    return { ok: r.ok, status: r.status, txt: new TextDecoder().decode(buf) };
  } catch (e) { return { ok: false, status: 0, txt: "", err: String(e).slice(0, 120) }; } finally { clearTimeout(t); }
}

function le(a: Alvo, xml: string) {
  const o = parser.parse(xml); const ch = o?.rss?.channel; if (!ch) return null;
  const itens = lista(ch.item).slice(0, 30).map((it: any) => {
    const corpo = texto(it["content:encoded"]) || texto(it.description);
    const url = texto(it.link) || texto(it.guid);
    const data = texto(it.pubDate) || texto(it["dc:date"]);
    let titulo = limpa(texto(it.title)), tx = "", tipo = "post", nota: number | null = null, ano = "", repost = false;
    let img: string | null = null;
    for (const e of lista(it.enclosure)) if (/^image\//.test(e["@_type"] || "")) img = e["@_url"];
    if (!img) img = imgDe(corpo);
    if (a.rede === "letterboxd") {
      const g = texto(it.guid);
      tipo = /-list-/.test(g) ? "lista" : /-review-/.test(g) ? "critica" : "diario";
      if (texto(it["letterboxd:filmTitle"])) { titulo = limpa(texto(it["letterboxd:filmTitle"])); ano = texto(it["letterboxd:filmYear"]); }
      const r = parseFloat(texto(it["letterboxd:memberRating"])); nota = isFinite(r) && r > 0 ? r : null;
      // tira o pôster e a linha "Watched on …"; o que sobra é a crítica (quando há)
      tx = limpa(corpo.replace(/<p>\s*<img[^>]*>\s*<\/p>/i, "").replace(/<p>\s*Watched on [^<]*<\/p>/i, "").replace(/<p>\s*This review may contain spoilers\.?\s*<\/p>/i, ""));
      if (it["letterboxd:rewatch"] && /yes/i.test(texto(it["letterboxd:rewatch"]))) tipo = "revisto";
    } else if (a.rede === "pinterest") {
      tipo = "pin"; repost = true;   // no Pinterest, o perfil reúne o que a pessoa salvou (dela ou de outras pessoas)
      tx = limpa(corpo); if (tx === titulo) tx = "";
    } else {
      tx = limpa(a.rede === "substack" ? (texto(it.description) || corpo) : corpo).replace(/\s*Continue reading on [^.]*»?\s*$/i, "");
    }
    return { titulo: titulo || "Sem título", ano, url, texto: trecho(tx), imagem: img && img.startsWith("https://") ? img : null, data: data ? new Date(data).toISOString() : null, tipo, nota, repost };
  }).filter((i: any) => /^https?:\/\//.test(i.url));
  const nome = limpa(texto(ch.title)).replace(/^Letterboxd\s*-\s*/i, "").replace(/\s+on Medium$/i, "").replace(/^Stories by\s+/i, "");
  const foto = texto(ch.image?.url) || null;
  return { rede: a.rede, usuario: a.usuario, perfil: a.perfil, nome, foto: foto && foto.startsWith("https://") ? foto : null, itens };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  const q = new URL(req.url).searchParams;
  const resp = (b: any, status = 200, cache = 0) => new Response(JSON.stringify(b), { status, headers: { ...CORS, "content-type": "application/json; charset=utf-8", ...(cache ? { "cache-control": `public, max-age=${cache}` } : {}) } });
  const a = alvo(q.get("rede") || "", q.get("usuario") || "");
  if (!a) return resp({ erro: "usuario", msg: "Nome de usuário ou endereço que não reconhecemos." }, 400);
  const r = await get(a.feed);
  if (!r.ok) return resp({ erro: r.status === 404 ? "nao_achou" : "rede", msg: r.status === 404 ? "Não achamos esse perfil, ou ele é privado." : "A rede não respondeu agora. Tente de novo em alguns minutos.", status: r.status }, r.status === 404 ? 404 : 502);
  if (a.checa && !a.checa.test(r.txt.slice(0, 20000))) return resp({ erro: "nao_substack", msg: "Esse endereço não é de uma publicação do Substack." }, 400);
  let d: any = null; try { d = le(a, r.txt); } catch { d = null; }
  if (!d) return resp({ erro: "feed", msg: "Esse perfil não tem um feed público para ler." }, 422);
  return resp(d, 200, 900);
});
