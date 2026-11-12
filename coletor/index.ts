// arede.online · COLETOR de notícias
// Lê os feeds (RSS/Atom) das fontes com selo, guarda só título, chamada do veículo, um trecho de até 800 caracteres, data, imagem de capa e link,
// evita repetidas, agrupa a mesma notícia em fontes diferentes (cobertura cruzada) e manda para o feed ou para a fila.
// Modos: ?modo=descobrir (acha o feed de cada fonte) · ?modo=coletar (padrão) · ?modo=agrupar (junta a mesma notícia entre idiomas)
//   · ?modo=reclassificar&pagina=N (refaz o tema das notícias dos últimos 30 dias com os temas de temas.ts).
// Lotes: ?lote=0..9 (as fontes se dividem em 10).
// Canais do YouTube: feed_tipo "youtube", lidos pelo RSS público do canal (só vídeos longos, sem Shorts nem lives).
// Idiomas: português, inglês e espanhol vão direto para o feed (selo 80+); cada notícia guarda o idioma, e quem lê escolhe as origens.
import { createClient } from "npm:@supabase/supabase-js@2";
import { XMLParser } from "npm:fast-xml-parser@4.4.1";
import { temaDe } from "./temas.ts";

const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const UA = "Mozilla/5.0 (compatible; arede-coletor/1.0; +https://arede.online/)";
const LOTES = 10, DIAS = 4, NOTA_DIRETO = 80, IDIOMAS = ["pt", "en", "es"];

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
  // inglês
  "factcheck.org": ["https://www.factcheck.org/feed/"],
  "washingtonpost.com": ["https://feeds.washingtonpost.com/rss/world"],
  "latimes.com": ["https://www.latimes.com/world-nation/rss2.0.xml"],
  "telegraph.co.uk": ["https://www.telegraph.co.uk/news/rss.xml"],
  "smh.com.au": ["https://www.smh.com.au/rss/feed.xml"],
  "pbs.org/newshour": ["https://www.pbs.org/newshour/feeds/rss/headlines"],
  "cbc.ca/news": ["https://www.cbc.ca/webfeed/rss/rss-topstories"],
  "abc.net.au/news": ["https://www.abc.net.au/news/feed/51120/rss.xml"],
  "rnz.co.nz": ["https://www.rnz.co.nz/rss/national.xml"],
  "nasa.gov": ["https://www.nasa.gov/news-release/feed/"],
  "nature.com": ["https://www.nature.com/nature.rss"],
  "science.org": ["https://www.science.org/rss/news_current.xml"],
  "democracynow.org": ["https://www.democracynow.org/democracynow.rss"],
  "globalvoices.org": ["https://globalvoices.org/feed/"],
  "grist.org": ["https://grist.org/feed/"],
  "insideclimatenews.org": ["https://insideclimatenews.org/feed/"],
  "themarshallproject.org": ["https://www.themarshallproject.org/rss/recent.rss"],
  // espanhol
  "bbc.com/mundo": ["https://feeds.bbci.co.uk/mundo/rss.xml"],
  "dw.com/es": ["https://rss.dw.com/rdf/rss-sp-all", "https://rss.dw.com/xml/rss-sp-all"],
  "rfi.fr/es": ["https://www.rfi.fr/es/rss"],
  "rtve.es": ["https://api2.rtve.es/rss/temas_noticias.xml"],
  "elmundo.es": ["https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml"],
  "abc.es": ["https://www.abc.es/rss/2.0/portada/"],
  "lavanguardia.com": ["https://www.lavanguardia.com/rss/home.xml"],
  "eldiario.es": ["https://www.eldiario.es/rss/"],
  "clarin.com": ["https://www.clarin.com/rss/lo-ultimo/"],
  "lanacion.com.ar": ["https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml"],
  "elespectador.com": ["https://www.elespectador.com/arc/outboundfeeds/rss/?outputType=xml"],
  "latercera.com": ["https://www.latercera.com/arc/outboundfeeds/rss/?outputType=xml"],
  "elcomercio.pe": ["https://elcomercio.pe/arcio/rss/"],
  "ciperchile.cl": ["https://www.ciperchile.cl/feed/"],
  "newtral.es": ["https://www.newtral.es/feed/"],
  "elsaltodiario.com": ["https://www.elsaltodiario.com/general/feed"],
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
// divide em frases sem perder nenhum pedaço (datas como 6.nov.2026 ficam inteiras); só a última pode estar incompleta
const frases = (t: string) => t.split(/(?<=[.!?]["”»)]?)\s+(?=["“«(]?[A-ZÀ-Ý0-9])/).map((f) => f.trim() + " ").filter((f) => f.trim());
const fechada = (f: string) => /[.!?]["”»)]?\s*$/.test(f);
function chamada(t: string): string | null {
  t = t.replace(/\s*(The post|O post|Leia mais|Continue lendo|Saiba mais)[\s\S]*$/i, "").replace(/\[…\]|\[\.\.\.\]|…$/g, "").trim();
  let out = ""; for (const f of frases(t)) { if (!fechada(f) || (out + f).length > 300) break; out += f; }
  out = out.trim(); return out.length >= 40 ? out : null;
}
// resumo para a página da notícia: os primeiros parágrafos do feed, só com frases inteiras, até 800 caracteres.
// É um trecho, não a matéria: quem quer ler tudo vai ao site da fonte.
const LIXO = /^(foto|imagem|crédito|credito|leia (mais|também|tambem)|veja (também|tambem|mais)|assista|ouça|ouca|siga|inscreva|publicidade|the post|o post)\b/i;
function resumoLongo(html: string, cham: string | null): string | null {
  const pars = html.replace(/<\/(p|li|h\d|blockquote|div)>|<br\s*\/?>/gi, "\u0001").split("\u0001")
    .map((x) => limpa(x).replace(/\[…\]|\[\.\.\.\]|…$/g, "").trim()).filter((x) => x.length >= 40 && !LIXO.test(x));
  const out: string[] = []; let n = 0;
  for (const p of pars) {
    let par = "";
    for (const f of frases(p)) { if (!fechada(f) || n + par.length + f.length > 800) break; par += f; }
    par = par.trim(); if (!par) break;
    out.push(par); n += par.length; if (par.length < p.replace(/\s+$/, "").length - 1) break;
  }
  const t = out.join("\n\n"); if (!t) return null;
  const base = (cham || "").replace(/\s+/g, " ");
  return t.replace(/\s+/g, " ").length >= base.length + 60 ? t : null;
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
// descrição de vídeo: tira links, hashtags, pedidos de inscrição e redes sociais; fica só o texto sobre o vídeo
const YT_LIXO = /^(quer ajudar|contribua|doe |doação|faça parte|torne-se|pix|inscreva|siga|assine|acesse|baixe|ative|seja membro|apoie|curta|compartilhe|leia|veja|assista|ouça|conheça nosso|nossas redes|redes sociais|facebook|instagram|twitter|x:|tiktok|whatsapp|telegram|threads|bluesky|site|podcast|spotify|#|\*|»|►|▶|👉|📲|📺|🔔)/i;
const limpaYT = (t: string) => t.split(/\n/).map((l) => l.trim()).filter((l) => l && !YT_LIXO.test(l) && !/https?:\/\/|www\./i.test(l)).join("\n").replace(/\n{3,}/g, "\n\n").trim();
function leFeed(xml: string, base: string) {
  let o: any; try { o = parser.parse(xml); } catch { return { lingua: "", itens: [] as any[] }; }
  const ch = o?.rss?.channel || o?.["rdf:RDF"]?.channel || {};
  const brutos = o?.rss ? lista(o.rss.channel?.item) : o?.["rdf:RDF"] ? lista(o["rdf:RDF"].item) : o?.feed ? lista(o.feed.entry) : [];
  const lingua = (texto(ch.language) || texto(ch["dc:language"]) || (o?.feed?.["@_xml:lang"] ?? "")).toLowerCase();
  const itens = brutos.slice(0, 40).map((it: any) => {
    // vídeo de canal do YouTube (RSS público do canal): capa e descrição vêm de yt:videoId e media:group
    const yid = texto(it["yt:videoId"]);
    if (yid) {
      const g = lista(it["media:group"])[0] || {};
      // só linhas que terminam como frase: título repetido, créditos e chamadas de canal (sem ponto final) ficam de fora
      const desc = limpaYT(texto(g["media:description"])).split("\n").filter((l) => !l || /[.!?…"”»)]$/.test(l)).join("\n");
      const data = texto(it.published) || texto(it.updated);
      return { titulo: limpa(texto(it.title)), url: "https://www.youtube.com/watch?v=" + yid, chamada: chamada(desc), resumo: resumoLongo(desc.split(/\n\s*\n/).map((x) => "<p>" + x + "</p>").join(""), chamada(desc)),
        imagem_url: "https://i.ytimg.com/vi/" + yid + "/hqdefault.jpg", publicada_em: data ? new Date(data) : null };
    }
    const corpo = texto(it["content:encoded"]) || texto(it.content) || texto(it.description) || texto(it.summary);
    const resumo = texto(it.description) || texto(it.summary) || corpo;
    let img = imagem(it, corpo + " " + resumo); if (img) img = absoluto(img, base);
    const data = texto(it.pubDate) || texto(it["dc:date"]) || texto(it.published) || texto(it.updated);
    return { titulo: limpa(texto(it.title)), url: absoluto(link(it), base), chamada: chamada(limpa(resumo)), resumo: resumoLongo(corpo.length >= resumo.length ? corpo : resumo, chamada(limpa(resumo))), imagem_url: img && img.startsWith("https://") ? img : null, publicada_em: data ? new Date(data) : null };
  }).filter((i: any) => i.titulo && i.url.startsWith("http"));
  return { lingua, itens };
}

// impressão digital, cobertura cruzada, tema e idioma
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
// datas e palavras de serviço (hoje, ao vivo, cotação) não dizem que duas notícias são a mesma
const DATAS = "segunda terca quarta quinta sexta sabado domingo janeiro fevereiro marco abril maio junho julho agosto setembro outubro novembro dezembro hoje ontem amanha vivo " +
  "lunes martes miercoles jueves viernes enero febrero abril mayo junio julio agosto septiembre octubre noviembre diciembre hoy ayer manana cuanto cotiza precio efemerides feriado " +
  "monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december today yesterday live";
const VAZIAS = new Set(("a o as os de do da dos das e em no na nos nas um uma para por com que se ao aos sobre apos mais the of to in and for on is are at by with from el la los las del en este esta " + DATAS).split(" "));
const palavras = (s: string) => new Set(norm(s).split(" ").filter((w) => w.length > 2 && !VAZIAS.has(w)));
const parecido = (a: Set<string>, b: Set<string>) => { let i = 0; for (const w of a) if (b.has(w)) i++; return i / Math.max(1, Math.min(a.size, b.size)); };
// nomes próprios (pessoas, lugares, instituições) valem em qualquer idioma: é por eles que a mesma notícia se reconhece entre português, inglês e espanhol
const COMUNS = new Set(("the and how what why who new says after over from with for this that their about into amid more first last year news " +
  "el la los las del como que por para una uno este esta sus tras ante entre sobre contra nuevo nueva presidente gobierno " +
  "o a os as do da dos das como que por para uma um este esta seus apos sobre entre contra novo nova governo " +
  "quien quem who calendario horarios agenda temblor terremoto dolar euro real precio cotizacao " + DATAS).split(" "));
const entidades = (t: string) => new Set((t.match(/(?<![\p{L}])[A-ZÀ-Ý][\p{L}'-]{2,}/gu) || []).map((w) => norm(w)).filter((w) => w.length > 2 && !COMUNS.has(w)));
const comuns = (a: Set<string>, b: Set<string>) => { let i = 0; for (const w of a) if (b.has(w)) i++; return i; };
// mesma notícia: ao menos 3 nomes em comum no título e na chamada (60% dos nomes do menor) e ao menos 2 deles no próprio título
const mesmaPorNomes = (x: any, y: any) => { if (x.en.size < 3 || y.en.size < 3 || x.et.size < 2 || y.et.size < 2) return false;
  const i = comuns(x.en, y.en); return i >= 3 && i / Math.min(x.en.size, y.en.size) >= 0.6 && comuns(x.et, y.et) >= 2; };
const mesmaNoticia = (x: any, y: any) => (x.pw.size >= 4 && y.pw.size >= 4 && parecido(x.pw, y.pw) >= 0.6) || mesmaPorNomes(x, y);
// os temas (14) e o classificador ficam em temas.ts, o mesmo arquivo que o site usa para os filtros
// fora do escopo da rede (esporte, entretenimento, sorteios): guardada como recusada, para não voltar na próxima coleta
const FORA = /\b(futebol|campeonato|brasileirao|libertadores|copa do brasil|goleada|gols?|tenis|masters de|formula 1|ufc|nba|nfl|bbb|big brother|novela|reality|celebridade\w*|famosos|horoscopo|signo|loteria|mega.sena|lotofacil|quina|palmeiras|corinthians|flamengo|vasco|santos fc|gremio|cruzeiro|soccer|premier league|champions league|super bowl|playoffs?|touchdown|celebrity|celebrities|horoscope|lottery|powerball|futbol|liga mx|laliga|goles?|telenovela\w*|farandula|horoscopo|loteria|rugby|cricket|grand prix|atacante|zagueiro|goleiro|meio-campista|tecnico do|tecnico da selecao|bayern|real madrid|juventus|psg|nrl|afl|golden boot|copa do mundo de futebol|selecao brasileira de futebol|surf|surfing games|jockey|turfe)\b/;
// idioma: o declarado no feed quando é pt, en ou es; senão, palavras frequentes do próprio texto
const MARCAS: Record<string, RegExp> = {
  pt: /\b(do|da|dos|das|nao|sao|com|uma|pelo|pela|tambem|mais|ao|aos|esta|governo)\b/g,
  es: /\b(el|la|los|las|del|en|una|por|con|y|se|mas|esta|gobierno|tambien|al|sus)\b/g,
  en: /\b(the|and|of|to|in|for|is|on|with|that|by|from|after|over|says)\b/g,
};
function idiomaDe(t: string, lingua: string): string {
  const l = (lingua || "").slice(0, 2).toLowerCase(); if (IDIOMAS.includes(l)) return l;
  const n = " " + norm(t) + " "; let melhor = "outra", max = 1;
  for (const [k, re] of Object.entries(MARCAS)) { const c = (n.match(re) || []).length; if (c > max){ max = c; melhor = k; } }
  return melhor;
}
const limpaUrl = (u: string) => { try { const x = new URL(u); x.hash = ""; for (const k of [...x.searchParams.keys()]) if (/^(utm_|fbclid|gclid|ref$|cmpid|origin)/i.test(k)) x.searchParams.delete(k); return x.href; } catch { return u; } };

async function coleta(f: any, recentes: any[]) {
  const r = await get(f.feed_url, 12000);
  if (!r.ok || !pareceFeed(r.txt)) return { erro: r.ok ? "O feed não está mais no formato esperado" : "Feed não respondeu (" + (r.status || r.err) + ")", novas: 0 };
  const { lingua, itens } = leFeed(r.txt, r.url);
  const limite = Date.now() - DIAS * 864e5;
  const frescos = itens.filter((i: any) => !i.publicada_em || isNaN(+i.publicada_em) || +i.publicada_em >= limite).map((i: any) => ({ ...i, url: limpaUrl(i.url) }));
  if (!frescos.length) return { erro: null, novas: 0 };
  const { data: ja } = await SB.from("noticias").select("url,resumo").in("url", frescos.map((i: any) => i.url));
  const temUrl = new Set((ja || []).map((x: any) => x.url));
  // resumo nulo = ainda não revisado com o divisor de frases atual; "" = revisado, o feed não tem mais texto
  const semResumo = new Set((ja || []).filter((x: any) => x.resumo === null).map((x: any) => x.url));
  await Promise.all(frescos.filter((i: any) => semResumo.has(i.url)).map((i: any) => SB.from("noticias").update({ resumo: i.resumo || "", chamada: i.chamada }).eq("url", i.url)));
  const novas: any[] = [];
  for (const i of frescos) {
    if (temUrl.has(i.url)) continue;
    const imp = norm(i.titulo); if (recentes.some((x) => x.fonte_id === f.id && x.impressao === imp)) continue;   // mesma matéria repetida na fonte
    const pw = palavras(i.titulo);
    const en = entidades(i.titulo + " " + (i.chamada || "")), et = entidades(i.titulo), eu = { pw, en, et };
    // vídeo de canal fica no próprio grupo: não esconde nem é escondido por uma matéria escrita sobre o mesmo assunto
    const yt = f.feed_tipo === "youtube";
    const par = yt ? null : recentes.find((x) => x.fonte_id !== f.id && x.grupo && !x.yt && mesmaNoticia(eu, x));
    const grupo: string = par ? par.grupo : crypto.randomUUID();   // cada notícia tem um grupo; a mesma notícia em outra fonte entra no mesmo
    const lg = idiomaDe(i.titulo + " " + (i.chamada || ""), lingua || (yt ? f.lingua : ""));   // o RSS do YouTube não diz o idioma: vale o do canal
    const n = { fonte_id: f.id, url: i.url, titulo: i.titulo.slice(0, 300), chamada: i.chamada, resumo: i.resumo || "", lingua: lg, imagem_url: i.imagem_url, publicada_em: i.publicada_em && !isNaN(+i.publicada_em) ? i.publicada_em.toISOString() : new Date().toISOString(),
      impressao: imp, grupo, tema: temaDe(i.titulo, i.chamada), status: FORA.test(imp) ? "recusada" : f.nota >= NOTA_DIRETO && IDIOMAS.includes(lg) ? "publicada" : "fila" };
    novas.push(n); recentes.push({ id: null, fonte_id: f.id, impressao: imp, grupo, pw, en, et, yt });
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
  if (modo === "reclassificar") {
    // aplica os temas atuais às notícias dos últimos ?dias (padrão 30), uma página de 2000 por chamada (?pagina=0,1,2...)
    const dias = Math.max(1, Math.min(120, +(q.get("dias") || 30))), pag = Math.max(0, +(q.get("pagina") || 0));
    const { data: ns, error } = await SB.from("noticias").select("id,titulo,chamada,tema").gte("publicada_em", new Date(Date.now() - dias * 864e5).toISOString())
      .order("id").range(pag * 2000, pag * 2000 + 1999);
    if (error) return new Response(JSON.stringify({ erro: error.message }), { status: 500 });
    const m = (ns || []).map((n: any) => ({ id: n.id, tema: temaDe(n.titulo, n.chamada), antes: n.tema })).filter((x: any) => x.tema !== x.antes).map(({ id, tema }: any) => ({ id, tema }));
    let mudou = 0; for (let k = 0; k < m.length; k += 500) { const { data } = await SB.rpc("aplica_temas", { m: m.slice(k, k + 500) }); mudou += data || 0; }
    return new Response(JSON.stringify({ modo, pagina: pag, lidas: (ns || []).length, mudou, mais: (ns || []).length === 2000 }), { headers: { "content-type": "application/json" } });
  }
  const { data: todas } = await SB.from("fontes").select("*").eq("ativa", true).order("id");
  const fontes = (todas || []).filter((f: any, i: number) => i % LOTES === lote);
  const agora = new Date().toISOString(), rel: any[] = [];
  if (modo === "descobrir") {
    // canais do YouTube já têm o endereço certo do RSS (cadastrado pelo ID do canal): não passam pela busca
    const busca = fontes.filter((f: any) => f.feed_tipo !== "youtube");
    for (let i = 0; i < busca.length; i += 4) await Promise.all(busca.slice(i, i + 4).map(async (f: any) => {
      const d: any = await descobre(f);
      await SB.from("fontes").update({ feed_url: d.feed_url, feed_tipo: d.feed_tipo, descoberto_em: agora, ultimo_erro: d.erro || null }).eq("id", f.id);
      rel.push({ id: f.id, feed: d.feed_url, erro: d.erro });
    }));
    return new Response(JSON.stringify({ modo, lote, fontes: rel }), { headers: { "content-type": "application/json" } });
  }
  const { data: rec } = await SB.from("noticias").select("id,fonte_id,url,impressao,grupo,titulo,chamada,publicada_em").gte("coletada_em", new Date(Date.now() - 3 * 864e5).toISOString()).limit(4000);
  const recentes = (rec || []).map((x: any) => ({ ...x, pw: palavras(x.titulo), en: entidades(x.titulo + " " + (x.chamada || "")), et: entidades(x.titulo), yt: /youtube\.com\/watch/.test(x.url || "") }));
  if (modo === "agrupar") {
    // refaz os grupos dos últimos 3 dias: a mesma notícia, no mesmo idioma ou em idiomas diferentes (cada grupo com até 12 notícias)
    const L = recentes, pai = new Map<string, string>();
    const raiz = (g: string): string => { let r = g; while (pai.has(r) && pai.get(r) !== r) r = pai.get(r)!; return r; };
    const tam = new Map<string, number>(); for (const x of recentes) tam.set(x.grupo, (tam.get(x.grupo) || 0) + 1);
    let juntou = 0;
    for (let a = 0; a < L.length; a++) for (let b = a + 1; b < L.length; b++) {
      const x = L[a], y = L[b]; if (x.fonte_id === y.fonte_id || x.yt || y.yt) continue;
      const rx = raiz(x.grupo), ry = raiz(y.grupo); if (rx === ry) continue;
      if (Math.abs(+new Date(x.publicada_em) - +new Date(y.publicada_em)) > 2 * 864e5 || !mesmaNoticia(x, y)) continue;
      if ((tam.get(rx) || 1) + (tam.get(ry) || 1) > 12) continue;
      pai.set(ry, rx); tam.set(rx, (tam.get(rx) || 1) + (tam.get(ry) || 1)); juntou++;
    }
    const mudar = new Map<string, string>(); for (const x of recentes) { const r = raiz(x.grupo); if (r !== x.grupo) mudar.set(x.grupo, r); }
    const m = [...mudar].map(([de, para]) => ({ de, para })); let mudou = 0;
    for (let k = 0; k < m.length; k += 500) { const { data } = await SB.rpc("aplica_grupos", { m: m.slice(k, k + 500) }); mudou += data || 0; }
    return new Response(JSON.stringify({ modo, juntou, grupos: mudar.size, noticias: mudou }), { headers: { "content-type": "application/json" } });
  }
  const comFeed = fontes.filter((f: any) => f.feed_url);
  for (let i = 0; i < comFeed.length; i += 5) await Promise.all(comFeed.slice(i, i + 5).map(async (f: any) => {
    const r = await coleta(f, recentes);
    await SB.from("fontes").update(r.erro ? { ultima_coleta: agora, ultimo_erro: r.erro } : { ultima_coleta: agora, ultimo_ok: agora, ultimo_erro: null, itens_ultima: r.novas }).eq("id", f.id);
    rel.push({ id: f.id, novas: r.novas, erro: r.erro });
  }));
  return new Response(JSON.stringify({ modo, lote, fontes: rel }), { headers: { "content-type": "application/json" } });
});
