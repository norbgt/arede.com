// arede.online · ARTES: lê o acervo público do Design Ativista (designativista.pages.dev/api) e publica cada peça nova
// direto (decisão de 9 nov 2026: sem passar pela fila). Aparecem na aba Arte e no feed geral, sempre com crédito a quem criou;
// a curadoria pode retirar uma peça depois.
// Chamada pelo agendamento, com a mesma chave do coletor.
import { createClient } from "npm:@supabase/supabase-js@2";

const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const BASE = "https://designativista.pages.dev";
const UA = "Mozilla/5.0 (compatible; arede-artes/1.0; +https://arede.online/)";

async function json(path: string) {
  const c = new AbortController(); const t = setTimeout(() => c.abort(), 15000);
  try { const r = await fetch(BASE + path, { signal: c.signal, headers: { "user-agent": UA, accept: "application/json" } }); if (!r.ok) throw new Error(path + " → " + r.status); return await r.json(); }
  finally { clearTimeout(t); }
}

Deno.serve(async (req) => {
  const { data: ok } = await SB.rpc("coletor_chave_confere", { k: req.headers.get("x-coletor") || "" });
  if (!ok) return new Response(JSON.stringify({ erro: "não autorizado" }), { status: 401 });
  const rel: any = { campanhas: 0, lidas: 0, novas: 0, erros: [] as string[] };
  try {
    const { campaigns } = await json("/api/campaigns");
    for (const c of (campaigns || []).filter((c: any) => c.status === "published")) {
      rel.campanhas++;
      for (let page = 1, pages = 1; page <= pages && page <= 40; page++) {
        let d: any; try { d = await json(`/api/campaigns/${encodeURIComponent(c.slug)}/artworks?limit=50&page=${page}`); } catch (e) { rel.erros.push(String(e).slice(0, 120)); break; }
        pages = d.pages || 1;
        const linhas = (d.artworks || []).filter((a: any) => a.id && a.title && a.imageUrl).map((a: any) => ({
          fonte: "Design Ativista", ext_id: a.id, titulo: String(a.title).slice(0, 200),
          artista: a.artistName ? String(a.artistName).slice(0, 120) : null,
          artista_instagram: a.artistInstagram ? String(a.artistInstagram).replace(/^@/, "").slice(0, 60) : null,
          categoria: a.category || null, campanha: c.title,
          imagem_url: a.imageUrl.startsWith("http") ? a.imageUrl : BASE + a.imageUrl,
          url: `${BASE}/convocatoria/?c=${encodeURIComponent(c.slug)}`, largura: a.width || null, altura: a.height || null,
          criada_na_fonte: a.createdAt || null, status: "publicada" }));
        rel.lidas += linhas.length;
        if (linhas.length) {
          const { data, error } = await SB.from("artes").upsert(linhas, { onConflict: "fonte,ext_id", ignoreDuplicates: true }).select("id");
          if (error) rel.erros.push(error.message.slice(0, 120)); else rel.novas += (data || []).length;
          // página inteira já conhecida: o resto também é antigo
          if (!error && (data || []).length === 0 && page > 1) break;
        }
      }
    }
  } catch (e) { rel.erros.push(String(e).slice(0, 160)); }
  return new Response(JSON.stringify(rel), { headers: { "content-type": "application/json" } });
});
