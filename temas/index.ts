// arede.online · TEMAS: reclassifica as notícias com os 14 temas de temas.ts (o mesmo arquivo do coletor).
// Chamado pelo servidor (privado.temas_reclassifica), com a chave do coletor. Cada chamada pega até 1000 notícias dos últimos ?dias (padrão 30)
// que ainda têm um tema fora da lista atual, ou, com ?todas=1&pagina=N, todas as daquela página.
import { createClient } from "npm:@supabase/supabase-js@2";
import { temaDe, TEMAS_LISTA, TEMA_OUTROS } from "./temas.ts";
const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
Deno.serve(async (req) => {
  const q = new URL(req.url).searchParams;
  const { data: ok } = await SB.rpc("coletor_chave_confere", { k: req.headers.get("x-coletor") || "" });
  if (!ok) return new Response(JSON.stringify({ erro: "não autorizado" }), { status: 401 });
  const dias = Math.max(1, Math.min(120, +(q.get("dias") || 30))), pag = Math.max(0, +(q.get("pagina") || 0));
  let c = SB.from("noticias").select("id,titulo,chamada,tema").gte("publicada_em", new Date(Date.now() - dias * 864e5).toISOString());
  if (q.get("todas") !== "1") c = c.not("tema", "in", "(" + [...TEMAS_LISTA, TEMA_OUTROS].map((t) => '"' + t + '"').join(",") + ")");
  const { data: ns, error } = await c.order("id").range(pag * 1000, pag * 1000 + 999);
  if (error) return new Response(JSON.stringify({ erro: error.message }), { status: 500 });
  const m = (ns || []).map((n: any) => ({ id: n.id, tema: temaDe(n.titulo, n.chamada), antes: n.tema })).filter((x: any) => x.tema !== x.antes).map(({ id, tema }: any) => ({ id, tema }));
  let mudou = 0; for (let k = 0; k < m.length; k += 500) { const { data } = await SB.rpc("aplica_temas", { m: m.slice(k, k + 500) }); mudou += data || 0; }
  return new Response(JSON.stringify({ lidas: (ns || []).length, mudou }), { headers: { "content-type": "application/json" } });
});
