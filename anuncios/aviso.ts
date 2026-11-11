// arede.online · ANÚNCIO-AVISO: recebe o aviso de pagamento do Mercado Pago e confere o pagamento.
// Não confia no que chega: pega só o número do pagamento, consulta o próprio Mercado Pago com a chave da rede
// e só então marca o pedido como pago, se o valor aprovado cobre o valor do pedido. Responde sempre rápido, como o Mercado Pago pede.
// Também atende o site quando a pessoa volta do pagamento (?payment_id=...), pelo mesmo caminho de conferência.
// Segredos: MP_ACCESS_TOKEN e, se existir, MP_WEBHOOK_SECRET (assinatura dos avisos configurados no painel do Mercado Pago).
import { createClient } from "npm:@supabase/supabase-js@2";

const SB = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const SITE = "https://arede.online";
const cab = (origem: string) => ({ "access-control-allow-origin": origem === SITE ? origem : SITE, "access-control-allow-headers": "authorization, apikey, content-type, x-client-info",
  "access-control-allow-methods": "GET, POST, OPTIONS", "vary": "origin", "cache-control": "no-store", "content-type": "application/json; charset=utf-8" });
const hex = (b: ArrayBuffer) => Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
async function assinaturaConfere(req: Request, id: string, segredo: string): Promise<boolean> {
  const partes = Object.fromEntries((req.headers.get("x-signature") || "").split(",").map((p) => p.trim().split("=") as [string, string]));
  if (!partes.ts || !partes.v1) return false;
  const rid = req.headers.get("x-request-id"), manifesto = `id:${id.toLowerCase()};${rid ? `request-id:${rid};` : ""}ts:${partes.ts};`;
  const chave = await crypto.subtle.importKey("raw", new TextEncoder().encode(segredo), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const feito = hex(await crypto.subtle.sign("HMAC", chave, new TextEncoder().encode(manifesto)));
  if (feito.length !== partes.v1.length) return false;
  let dif = 0; for (let i = 0; i < feito.length; i++) dif |= feito.charCodeAt(i) ^ partes.v1.charCodeAt(i);
  return dif === 0;
}

Deno.serve(async (req: Request) => {
  const H = cab(req.headers.get("origin") || "");
  const resp = (corpo: unknown, status = 200) => new Response(JSON.stringify(corpo), { status, headers: H });
  if (req.method === "OPTIONS") return new Response(null, { headers: H });
  const token = Deno.env.get("MP_ACCESS_TOKEN");
  if (!token) return resp({ ok: false, erro: "pagamento não configurado" }, 200);
  const u = new URL(req.url);
  let corpo: Record<string, unknown> = {};
  if (req.method === "POST") { try { corpo = await req.json(); } catch (_e) { corpo = {}; } }
  const dados = (corpo.data || {}) as Record<string, unknown>;
  const tipo = String(u.searchParams.get("type") || u.searchParams.get("topic") || corpo.type || (u.searchParams.get("payment_id") ? "payment" : ""));
  const id = String(u.searchParams.get("payment_id") || u.searchParams.get("data.id") || dados.id || (tipo === "payment" ? u.searchParams.get("id") || "" : ""));
  if (tipo !== "payment" || !/^\d{4,20}$/.test(id)) return resp({ ok: true, ignorado: true });
  const segredo = Deno.env.get("MP_WEBHOOK_SECRET");
  if (segredo && req.headers.get("x-signature") && !(await assinaturaConfere(req, id, segredo))) return resp({ ok: false, erro: "assinatura não confere" }, 401);
  const ip = req.headers.get("cf-connecting-ip") || (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "sem-ip";
  const { data: pode } = await SB.rpc("anuncio_ritmo", { p_chave: hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip + "|" + new Date().toISOString().slice(0, 10)))) });
  if (pode === false) return resp({ ok: false, erro: "muitas consultas" }, 429);
  let r: Response;
  try { r = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, { headers: { authorization: `Bearer ${token}` } }); }
  catch (_e) { return resp({ ok: false, erro: "o Mercado Pago não respondeu" }, 502); }
  if (!r.ok) return resp({ ok: true, encontrado: false });
  const p = await r.json().catch(() => ({}));
  const ped = String(p.external_reference || "");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(ped)) return resp({ ok: true, encontrado: false });
  const { data: situacao } = await SB.rpc("anuncio_pedido_pago", { p_id: ped, p_pagamento: String(p.id), p_status: String(p.status || ""), p_valor: Number(p.transaction_amount) || 0, p_real: p.live_mode === true });
  return resp({ ok: true, situacao });
});
