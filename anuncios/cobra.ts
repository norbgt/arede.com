// arede.online · ANÚNCIO-COBRA: cria o pedido de anúncio e a cobrança no Mercado Pago (Checkout Pro).
// O site envia só a peça e as escolhas (tamanho, posição, dias). O valor é calculado no servidor, pela tabela de preços.
// O pagamento acontece na página do Mercado Pago: a rede nunca vê nem guarda dados de cartão.
// Segredo usado: MP_ACCESS_TOKEN (guardado pela administração nos segredos do Supabase; nunca sai daqui).
// POST {nome, frase, cta, seg, link, cor, fmt, pos, dias}  com a sessão da pessoa no cabeçalho Authorization.
import { createClient } from "npm:@supabase/supabase-js@2";

const URL_SB = Deno.env.get("SUPABASE_URL")!;
const SB = createClient(URL_SB, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const SITE = "https://arede.online";
const cab = (origem: string) => ({ "access-control-allow-origin": origem === SITE ? origem : SITE, "access-control-allow-headers": "authorization, apikey, content-type, x-client-info",
  "access-control-allow-methods": "POST, OPTIONS", "vary": "origin", "cache-control": "no-store", "content-type": "application/json; charset=utf-8" });

Deno.serve(async (req: Request) => {
  const H = cab(req.headers.get("origin") || "");
  const resp = (corpo: unknown, status = 200) => new Response(JSON.stringify(corpo), { status, headers: H });
  if (req.method === "OPTIONS") return new Response(null, { headers: H });
  if (req.method !== "POST") return resp({ erro: "método não aceito" }, 405);
  const token = Deno.env.get("MP_ACCESS_TOKEN");
  if (!token) return resp({ erro: "o pagamento ainda não está configurado" }, 503);
  const jwt = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const { data: quem } = await SB.auth.getUser(jwt);
  if (!quem || !quem.user) return resp({ erro: "entre na sua conta para anunciar" }, 401);
  let d: Record<string, unknown>;
  try { d = await req.json(); } catch (_e) { return resp({ erro: "pedido inválido" }, 400); }
  const limpo = { nome: String(d.nome ?? "").slice(0, 60), frase: String(d.frase ?? "").slice(0, 120), cta: String(d.cta ?? "").slice(0, 40), seg: String(d.seg ?? "").slice(0, 60),
    link: String(d.link ?? "").slice(0, 300), cor: Number(d.cor) || 0, fmt: String(d.fmt ?? ""), pos: String(d.pos ?? ""), dias: Math.round(Number(d.dias)) || 0 };
  const { data: ped, error } = await SB.rpc("anuncio_pedido_cria", { p_usuario: quem.user.id, p_d: limpo });
  if (error || !ped) return resp({ erro: (error && error.message) || "não foi possível criar o pedido" }, error && error.code === "42501" ? 403 : error && error.code === "53400" ? 429 : 400);
  const volta = `${SITE}/?pedido=${ped.id}#anunciar`;
  const corpo = { items: [{ id: ped.id, title: ped.titulo, quantity: 1, unit_price: Number(ped.valor), currency_id: "BRL" }],
    external_reference: ped.id, back_urls: { success: volta, pending: volta, failure: volta }, auto_return: "approved",
    notification_url: `${URL_SB}/functions/v1/anuncio-aviso`, statement_descriptor: "AREDE ONLINE", metadata: { pedido: ped.id } };
  let r: Response;
  try { r = await fetch("https://api.mercadopago.com/checkout/preferences", { method: "POST",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json", "x-idempotency-key": ped.id }, body: JSON.stringify(corpo) }); }
  catch (_e) { return resp({ erro: "o Mercado Pago não respondeu; tente de novo" }, 502); }
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.init_point) { console.error("mercado pago recusou a cobrança", r.status, j && j.message); return resp({ erro: "o Mercado Pago recusou a cobrança", codigo: r.status, detalhe: String((j && j.message) || "").slice(0, 120) }, 502); }
  await SB.rpc("anuncio_pedido_mp", { p_id: ped.id, p_pref: String(j.id || "") });
  return resp({ pedido: ped.id, valor: ped.valor, teste: ped.teste, url: j.init_point });
});
