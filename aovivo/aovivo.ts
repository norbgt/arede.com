// AO VIVO (11 nov 2026): confere, a cada 10 minutos, qual transmissão cada canal oficial tem no ar.
// Lê só a página pública "ao vivo" de cada canal no YouTube e guarda o código do vídeo e o estado.
// Não baixa, não grava e não retransmite nada: quem exibe o vídeo é o player do próprio canal.
// Só responde a quem traz a chave do coletor (a mesma do agendador do banco).
import { createClient } from "jsr:@supabase/supabase-js@2";

const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json" } });

Deno.serve(async (req: Request) => {
  const chave = req.headers.get("x-coletor") || "";
  if (!chave) return json({ ok: false }, 401);
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: canais, error } = await sb.rpc("aovivo_confere_inicio", { p_chave: chave });
  if (error || !Array.isArray(canais)) return json({ ok: false }, 401);

  const res = await Promise.all(canais.map(async (c: { k: string; canal: string }) => {
    try {
      const r = await fetch(`https://www.youtube.com/channel/${c.canal}/live`, {
        headers: { "accept-language": "pt-BR,pt;q=0.9", "user-agent": "Mozilla/5.0 (compatible; arede.online-aovivo/1.0; +https://arede.online)" },
        redirect: "follow", signal: AbortSignal.timeout(20000),
      });
      if (!r.ok) return { k: c.k, erro: "http " + r.status };
      const t = await r.text();
      // o código do vídeo no ar aparece em mais de um lugar da página; vale o primeiro que existir
      const canon = (t.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || "";
      const v = (canon.match(/watch\?v=([\w-]{11})$/) || t.match(/<meta property="og:url" content="https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})"/)
        || t.match(/"videoDetails":\{"videoId":"([\w-]{11})"/) || t.match(/<meta itemprop="identifier" content="([\w-]{11})"/)
        || t.match(/"currentVideoEndpoint":\{.{0,400}?"watchEndpoint":\{"videoId":"([\w-]{11})"/) || [])[1];
      const ehCanal = canon.includes("/channel/") || /<meta property="og:url" content="https:\/\/www\.youtube\.com\/channel\//.test(t);
      if (!v && !ehCanal) return { k: c.k, erro: "pagina inesperada", kb: Math.round(t.length / 1024), titulo: ((t.match(/<title>([^<]*)/) || [])[1] || "").slice(0, 60),
        marcas: ["LOGIN_REQUIRED", "ytInitialData", "ytInitialPlayerResponse", "currentVideoEndpoint", '"isLive":true', "playabilityStatus"].filter((m) => t.includes(m)).join(","),
        status: ((t.match(/"playabilityStatus":\{"status":"([A-Z_]+)"/) || [])[1] || "") };   // consentimento ou bloqueio: não mexe no que está guardado
      if (!v) return { k: c.k, video: null, estado: "fora" };
      const estado = /"isUpcoming":true/.test(t) || /LIVE_STREAM_OFFLINE/.test(t) ? "agendado" : /"isLive":true/.test(t) ? "aovivo" : "fora";
      return { k: c.k, video: estado === "fora" ? null : v, estado, via: canon.includes("watch") ? "canon" : "dados" };
    } catch (e) { return { k: c.k, erro: String(e).slice(0, 80) }; }
  }));

  const bons = res.filter((x) => !("erro" in x));
  const { data: n } = await sb.rpc("aovivo_grava", { p_chave: chave, p_dados: bons });
  return json({ ok: true, gravados: n ?? 0, res });
});
