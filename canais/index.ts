// arede.online · CANAIS: acha o ID de um canal do YouTube a partir do @ (ou de um link oficial) e confere se o RSS público responde.
import { createClient } from "npm:@supabase/supabase-js@2";
const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";
async function get(url: string, ms = 12000) {
  const c = new AbortController(); const t = setTimeout(() => c.abort(), ms);
  try { const r = await fetch(url, { signal: c.signal, redirect: "follow", headers: { "user-agent": UA, "accept-language": "pt-BR,pt;q=0.9", cookie: "CONSENT=YES+1; SOCS=CAI" } }); return { ok: r.ok, status: r.status, url: r.url, txt: (await r.text()).slice(0, 1_500_000) }; }
  catch (e) { return { ok: false, status: 0, url, txt: "", err: String(e).slice(0, 120) }; } finally { clearTimeout(t); }
}
async function resolve(h: string) {
  const r = await get(h.startsWith("http") ? h : "https://www.youtube.com/" + (h.startsWith("UC") ? "channel/" + h : "@" + h.replace(/^@/, "")));
  if (!r.ok) return { h, erro: "página " + r.status, final: r.url };
  const id = r.txt.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]{22})"/)?.[1] || r.txt.match(/"externalId":"(UC[\w-]{22})"/)?.[1] || r.txt.match(/"channelId":"(UC[\w-]{22})"/)?.[1];
  const titulo = r.txt.match(/<meta property="og:title" content="([^"]+)"/)?.[1] || "";
  const handle = r.txt.match(/"canonicalBaseUrl":"\/(@[^"]+)"/)?.[1] || r.txt.match(/"vanityChannelUrl":"http:\/\/www\.youtube\.com\/(@[^"]+)"/)?.[1] || "";
  const desc = r.txt.match(/<meta property="og:description" content="([^"]*)"/)?.[1] || "";
  if (!id) return { h, erro: "sem id", titulo, final: r.url };
  const feed = "https://www.youtube.com/feeds/videos.xml?playlist_id=UULF" + id.slice(2);
  const f = await get(feed); const n = (f.txt.match(/<entry>/g) || []).length;
  const ult = f.txt.match(/<entry>[\s\S]*?<published>([^<]+)<\/published>/)?.[1] || "";
  const t1 = f.txt.match(/<entry>[\s\S]*?<title>([^<]+)<\/title>/)?.[1] || "";
  return { h, final: r.url, id, titulo, handle, desc: desc.slice(0, 200), feed, feed_ok: f.ok && n > 0, videos: n, ultimo: ult, ultimo_titulo: t1 };
}
Deno.serve(async (req) => {
  const { data: ok } = await SB.rpc("coletor_chave_confere", { k: req.headers.get("x-coletor") || "" });
  if (!ok) return new Response(JSON.stringify({ erro: "não autorizado" }), { status: 401 });
  const body = await req.json().catch(() => ({}));
  const out = await Promise.all((body.handles || []).map(resolve));
  return new Response(JSON.stringify(out), { headers: { "content-type": "application/json" } });
});
