// a rede.com · COLETOR de notícias
// Lê os feeds (RSS/Atom) das fontes com selo, guarda só título, chamada do veículo, data, imagem de capa e link,
// evita repetidas, agrupa a mesma notícia em fontes diferentes (cobertura cruzada) e manda para o feed ou para a fila.
// Modos: ?modo=descobrir (acha o feed de cada fonte) · ?modo=coletar (padrão). Lotes: ?lote=0..3 (as fontes se dividem em 4).
import { createClient } from "npm:@supabase/supabase-js@2";
import { XMLParser } from "npm:fast-xml-parser@4.4.1";

const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const UA = "Mozilla/5.0 (compatible; arede-coletor/1.0; +https://norbgt.github.io/arede.com/)";
const LOTES = 4, DIAS = 4, NOTA_DIRETO = 80;

type Res = { ok: boolean; status: number; url: string; ct: string; txt: string; err?: string };
async function get(url: string, ms = 12000): Promise<Res> {
  const c = new AbortController(); const t = setTimeout(() => c.abort(), ms);
  try {
    const r = await fetch(url, { signal: c.signal, redirect: "follow", headers: { "user-agent": UA, accept: "application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.9, text/html;q=0.8, */*;q=0.5" } });
    // respeita a codificação do feed (alguns, como a Folha, ainda usam ISO-8859-1)
    const buf = new Uint8Array(await r.arrayBuffer()).slice(0, 2_500_000);
    const ini = new TextDecoder("latin1").decode(buf.slice(0, 400));
    const cs = ((r.headers.get("content-type") || "").match(/charset=["']?([\w-]+)/i)?.[1] || ini.match(/encoding=["']([\w-]+)["']/i)?.[1] || "utf-8").toLowerCase();
    let txt: string; try { txt = new TextDecoder(cs).decode(buf); } catch { txt = new TextDecoder().decode(buf); }
    return { ok: r.ok, status: r.status, url: r.url || url, ct: r.headers.get("content-type") || "", txt };
  } catch (e) { return { ok: false, status: 0, url, ct: "", txt: "", err: String(e).slice(0, 160) }; }
  finally { clearTimeout(t); }
}
const pareceFeed = (t: string) => /<rss[\s>]|<feed[\s>]|<rdf:RDF/i.test(t.slice(0, 4000));

// endereços conhecidos (testados antes da busca automática; a busca confirma se funcionam)
const CONHECIDOS: Record<string, string[]> = {
  "g1.globo.com": ["https://g1.globo.com/rss/g1/"],
  "folha.uol.com.br": ["https://feeds.folha.uol.com.br/emcimadahora/rss091.xml", "https://feeds.folha.uol.com.br/poder/rss091.xml"],
  "agenciabrasil.ebc.com.br": ["https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml"],
  "camara.leg.br": ["https://www.camara.leg.br/noticias/rss/ultimas-noticias"],
  "senado.leg.br": ["https://www12.senado.leg.br/noticias/feed/todasasnoticias/RSS", "https://www12.senado.leg.br/noticias/rss"],
  "bbc.com/portuguese": ["https://feeds.bbci.co.uk/portuguese/rss.xml"],
  "bbc.com/news": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
  "dw.com/pt-br": ["https://rss.dw.com/rdf/rss-br-all", "https://rss.dw.com/xml/rss-br-all"],
  "rfi.fr/br": ["https://www.rfi.fr/br/rss"],
  "npr.org": ["https://feeds.npr.org/1001/rss.xml"],
  "theguardian.com": ["https://www.theguardian.com/world/rss"],
  "nytimes.com": ["https://rss.nytimes.com/services/xml/rss/nyt/World.xml"],
  "elpais.com": ["https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada"],
  "lemonde.fr": ["https://www.lemonde.fr/rss/une.xml"],
  "who.int": ["https://www.who.int/rss-feeds/news-english.xml"],
  "hrw.org": ["https://www.hrw.org/rss/news"],
  "propublica.org": ["https://www.propublica.org/feeds/propublica/main"],
  "theconversation.com": ["https://theconversation.com/br/articles.atom", "https://theconversation.com/global/articles.atom"],
  "politifact.com": ["https://www.politifact.com/rss/factchecks/"],
  "mongabay.com": ["https://news.mongabay.com/feed/", "https://brasil.mongabay.com/feed/"],
  "poder360.com.br": ["https://www.poder360.com.br/feed/"],
  "aosfatos.org": ["https://www.aosfatos.org/noticias/feed/"],
  "unicef.org": ["https://www.unicef.org/brazil/rss.xml"],
  "paho.org": ["https://www.paho.org/pt/rss.xml"],
};
const absoluto = (h: string, base: string) => { try { return new URL(h.replace(/&amp;/g, "&"), base).href; } catch { return ""; } };
function linksDeFeed(html: string, base: string): string[] {
  const out: string[] = [];
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0];
    if (!/type=["']application\/(rss|atom)\+xml["']/i.test(tag)) continue;
    const h = tag.match(/href=["']([^"']+)["']/i); if (!h) continue;
    const u = absoluto(h[1], base); if (u && !/comment/i.test(u)) out.push(u);
  }
  return out;
}
async function descobre(f: any) {
  const base = "https://" + f.dominio.replace(/\/+$/, "") + "/", root = "https://" + f.dominio.split("/")[0] + "/";
  const cand: string[] = [...(CONHECIDOS[f.dominio] || [])];
  const home = await get(base, 10000);
  if (home.txt && pareceFeed(home.txt)) cand.unshift(home.url);
  else if (home.txt) cand.push(...linksDeFeed(home.txt, home.url));
  for (const p of ["feed/", "rss/", "rss.xml", "feed.xml", "index.xml", "atom.xml", "?feed=rss2"]) cand.push(base + p);
  if (root !== base) for (const p of ["feed/", "rss.xml"]) cand.push(root + p);
  const vistos = new Set<string>();
  for (const u of cand) {
    if (vistos.has(u)) continue; vistos.add(u);
    const r = await get(u, 9000);
    if (r.ok && pareceFeed(r.txt)) {
      const itens = leFeed(r.txt, r.url).itens;
      if (itens.length) return { feed_url: r.url, feed_tipo: /<feed[\s>]/i.test(r.txt.slice(0, 4000)) ? "atom" : "rss" };
    }
  }
  return { feed_url: null, feed_tipo: "nenhum", erro: home.ok ? "Nenhum feed encontrado" : "Site não respondeu (" + (home.status || home.err) + ")" };
}

// leitura dos feeds
const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", textNodeName: "#text", processEntities: true, htmlEntities: true });
const lista = (x: any) => (x == null ? [] : Array.isArray(x) ? x : [x]);
const texto = (x: any): string => (x == null ? "" : typeof x === "string" ? x : typeof x === "number" ? String(x) : Array.isArray(x) ? texto(x[0]) : (x["#text"] ?? "") + "");
const ENT: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", ndash: "–", mdash: "—", laquo: "«", raquo: "»", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’" };
const limpa = (h: string) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m).replace(/\s+/g, " ").trim();
// regra da rede: texto sempre completo. A chamada é a primeira frase inteira (ou as duas primeiras, se couberem em 300 caracteres)
function chamada(t: string): string | null {
  t = t.replace(/\s*(The post|O post|Leia mais|Continue lendo|Saiba mais)[\s\S]*$/i, "").replace(/\[…\]|\[\.\.\.\]|…$/g, "").trim();
  const fr = t.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [];
  let out = ""; for (const f of fr) { if ((out + f).length > 300) break; out += f; }
  out = out.trim(); return out.length >= 40 ? out : null;
}
function imagem(it: any, html: string): string | null {
  for (const e of lista(it.enclosure)) if (/^image\//.test(e["@_type"] || "") || /\.(jpe?g|png|webp)(\?|$)/i.test(e["@_url"] || "")) return e["@_url"];
  for (const k of ["media:content", "media:thumbnail"]) for (const m of lista(it[k])) { const u = m["@_url"]; if (u && (!m["@_medium"] || m["@_medium"] === "image")) return u; }
  const g = lista(it["media:group"])[0]; if (g) for (const m of lista(g["media:content"])) if (m["@_url"]) return m["@_url"];
  const img = html.match(/<img[^>]+src=["']([^"']+)["']/i); return img ? img[1] : null;
}
function link(it: any): string {
  for (const l of lista(it.link)) { if (typeof l === "string" && l.trim()) return l.trim(); if (l && l["@_href"] && (!l["@_rel"] || l["@_rel"] === "alternate")) return l["@_href"]; }
  const g = it.guid; const gu = texto(g); if (/^https?:\/\//.test(gu)) return gu;
  return "";
}
function leFeed(xml: string, base: string) {
  let o: any; try { o = parser.parse(xml); } catch { return { lingua: "", itens: [] as any[] }; }
  const ch = o?.rss?.channel || o?.["rdf:RDF"]?.channel || {};
  const brutos = o?.rss ? lista(o.rss.channel?.item) : o?.["rdf:RDF"] ? lista(o["rdf:RDF"].item) : o?.feed ? lista(o.feed.entry) : [];
  const lingua = (texto(ch.language) || texto(ch["dc:language"]) || (o?.feed?.["@_xml:lang"] ?? "")).toLowerCase();
  const itens = brutos.slice(0, 40).map((it: any) => {
    const corpo = texto(it["content:encoded"]) || texto(it.content) || texto(it.description) || texto(it.summary);
    const resumo = texto(it.description) || texto(it.summary) || corpo;
    let img = imagem(it, corpo + " " + resumo); if (img) img = absoluto(img, base);
    const data = texto(it.pubDate) || texto(it["dc:date"]) || texto(it.published) || texto(it.updated);
    return { titulo: limpa(texto(it.title)), url: absoluto(link(it), base), chamada: chamada(limpa(resumo)), imagem_url: img && img.startsWith("https://") ? img : null, publicada_em: data ? new Date(data) : null };
  }).filter((i: any) => i.titulo && i.url.startsWith("http"));
  return { lingua, itens };
}

// impressão digital, cobertura cruzada, tema e idioma
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
const VAZIAS = new Set("a o as os de do da dos das e em no na nos nas um uma para por com que se ao aos sobre apos mais the of to in and for on is are at by with from".split(" "));
const palavras = (s: string) => new Set(norm(s).split(" ").filter((w) => w.length > 2 && !VAZIAS.has(w)));
const parecido = (a: Set<string>, b: Set<string>) => { let i = 0; for (const w of a) if (b.has(w)) i++; return i / Math.max(1, Math.min(a.size, b.size)); };
const TEMAS: [string, RegExp][] = [
  ["Mobilidade", /\b(onibus|metro|metrô|transporte|ciclovia|bicicleta|transito|mobilidade|tarifa|brt|trem|transit|bus|cycling)\b/],
  ["Moradia", /\b(moradia|habitac\w*|despejo|aluguel|ocupac\w*|sem.teto|minha casa|reintegrac\w*|housing|eviction|homeless)\b/],
  ["Hortas e alimentação", /\b(fome|aliment\w*|horta\w*|agricultura familiar|seguranca alimentar|merenda|agroecolog\w*|cesta basica|hunger|food)\b/],
  ["Educação", /\b(escola\w*|educac\w*|ensino|professor\w*|universidade\w*|enem|creche\w*|alunos?|school\w*|education|teacher\w*)\b/],
  ["Cultura", /\b(cultura\w*|festival|museu|cinema|musica|teatro|livros?|artistas?|patrimonio|culture|museum)\b/],
  ["Saúde pública", /\b(saude|sus|hospita\w*|ubs|vacina\w*|dengue|medic\w*|epidemi\w*|doenc\w*|health|vaccine\w*|disease\w*)\b/],
  ["Meio ambiente", /\b(desmatamento|clima\w*|queimada\w*|amazonia|floresta\w*|ambient\w*|poluic\w*|enchente\w*|cop ?30|carbono|climate|deforestation|wildfire\w*|flood\w*)\b/],
  ["Saneamento", /\b(saneamento|esgoto|abastecimento|drenagem|lixo|residuos|sabesp|sanitation|sewage|drinking water)\b/],
  ["Juventude", /\b(jove\w*|juventude|adolescente\w*|youth|teen\w*)\b/],
  ["Orçamento participativo", /\b(orcamento|prefeitura\w*|vereador\w*|licitac\w*|audiencia publica|emenda\w*|camara municipal|conselho\w*|budget|city council)\b/],
];
// fora do escopo da rede (esporte, entretenimento, sorteios): guardada como recusada, para não voltar na próxima coleta
const FORA = /\b(futebol|campeonato|brasileirao|libertadores|copa do brasil|goleada|gols?|tenis|masters de|formula 1|ufc|nba|nfl|bbb|big brother|novela|reality|celebridade\w*|famosos|horoscopo|signo|loteria|mega.sena|lotofacil|quina|palmeiras|corinthians|flamengo|vasco|santos fc|gremio|cruzeiro)\b/;
const temaDe = (t: string) => { const n = norm(t); for (const [k, re] of TEMAS) if (re.test(n)) return k; return "Geral"; };
const portugues = (t: string, lingua: string) => lingua.startsWith("pt") || (!lingua && (norm(t).match(/\b(de|do|da|que|para|com|nao|em|os|das)\b/g) || []).length >= 2);
const limpaUrl = (u: string) => { try { const x = new URL(u); x.hash = ""; for (const k of [...x.searchParams.keys()]) if (/^(utm_|fbclid|gclid|ref$|cmpid|origin)/i.test(k)) x.searchParams.delete(k); return x.href; } catch { return u; } };

async function coleta(f: any, recentes: any[]) {
  const r = await get(f.feed_url, 12000);
  if (!r.ok || !pareceFeed(r.txt)) return { erro: r.ok ? "O feed não está mais no formato esperado" : "Feed não respondeu (" + (r.status || r.err) + ")", novas: 0 };
  const { lingua, itens } = leFeed(r.txt, r.url);
  const limite = Date.now() - DIAS * 864e5;
  const frescos = itens.filter((i: any) => !i.publicada_em || isNaN(+i.publicada_em) || +i.publicada_em >= limite).map((i: any) => ({ ...i, url: limpaUrl(i.url) }));
  if (!frescos.length) return { erro: null, novas: 0 };
  const { data: ja } = await SB.from("noticias").select("url").in("url", frescos.map((i: any) => i.url));
  const temUrl = new Set((ja || []).map((x: any) => x.url));
  const novas: any[] = [];
  for (const i of frescos) {
    if (temUrl.has(i.url)) continue;
    const imp = norm(i.titulo); if (recentes.some((x) => x.fonte_id === f.id && x.impressao === imp)) continue;   // mesma matéria repetida na fonte
    const pw = palavras(i.titulo);
    const par = pw.size >= 4 ? recentes.find((x) => x.fonte_id !== f.id && x.grupo && parecido(pw, x.pw) >= 0.6) : null;
    const grupo: string = par ? par.grupo : crypto.randomUUID();   // cada notícia tem um grupo; a mesma notícia em outra fonte entra no mesmo
    const pt = portugues(i.titulo + " " + (i.chamada || ""), lingua);
    const n = { fonte_id: f.id, url: i.url, titulo: i.titulo.slice(0, 300), chamada: i.chamada, imagem_url: i.imagem_url, publicada_em: i.publicada_em && !isNaN(+i.publicada_em) ? i.publicada_em.toISOString() : new Date().toISOString(),
      impressao: imp, grupo, tema: temaDe(i.titulo + " " + (i.chamada || "")), status: FORA.test(imp) ? "recusada" : f.nota >= NOTA_DIRETO && pt ? "publicada" : "fila" };
    novas.push(n); recentes.push({ id: null, fonte_id: f.id, impressao: imp, grupo, pw });
  }
  if (novas.length) { const { error } = await SB.from("noticias").upsert(novas, { onConflict: "url", ignoreDuplicates: true }); if (error) return { erro: "Banco: " + error.message, novas: 0 }; }
  return { erro: null, novas: novas.length };
}

Deno.serve(async (req) => {
  const q = new URL(req.url).searchParams;
  const chave = req.headers.get("x-coletor") || "";
  const { data: ok } = await SB.rpc("coletor_chave_confere", { k: chave });
  if (!ok) return new Response(JSON.stringify({ erro: "não autorizado" }), { status: 401 });
  const modo = q.get("modo") || "coletar", lote = Math.max(0, Math.min(LOTES - 1, +(q.get("lote") || 0)));
  const { data: todas } = await SB.from("fontes").select("*").eq("ativa", true).order("id");
  const fontes = (todas || []).filter((f: any, i: number) => i % LOTES === lote);
  const agora = new Date().toISOString(), rel: any[] = [];
  if (modo === "descobrir") {
    for (let i = 0; i < fontes.length; i += 4) await Promise.all(fontes.slice(i, i + 4).map(async (f: any) => {
      const d: any = await descobre(f);
      await SB.from("fontes").update({ feed_url: d.feed_url, feed_tipo: d.feed_tipo, descoberto_em: agora, ultimo_erro: d.erro || null }).eq("id", f.id);
      rel.push({ id: f.id, feed: d.feed_url, erro: d.erro });
    }));
    return new Response(JSON.stringify({ modo, lote, fontes: rel }), { headers: { "content-type": "application/json" } });
  }
  const { data: rec } = await SB.from("noticias").select("id,fonte_id,impressao,grupo,titulo").gte("coletada_em", new Date(Date.now() - 3 * 864e5).toISOString()).limit(3000);
  const recentes = (rec || []).map((x: any) => ({ ...x, pw: palavras(x.titulo) }));
  const comFeed = fontes.filter((f: any) => f.feed_url);
  for (let i = 0; i < comFeed.length; i += 5) await Promise.all(comFeed.slice(i, i + 5).map(async (f: any) => {
    const r = await coleta(f, recentes);
    await SB.from("fontes").update(r.erro ? { ultima_coleta: agora, ultimo_erro: r.erro } : { ultima_coleta: agora, ultimo_ok: agora, ultimo_erro: null, itens_ultima: r.novas }).eq("id", f.id);
    rel.push({ id: f.id, novas: r.novas, erro: r.erro });
  }));
  return new Response(JSON.stringify({ modo, lote, fontes: rel }), { headers: { "content-type": "application/json" } });
});
