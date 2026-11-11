-- AO VIVO (11 nov 2026): canais oficiais exibidos no topo da aba Vídeos, sempre pelo player do próprio canal.
-- Aplicado no servidor em 11 nov 2026, com autorização da Amanda ("publique em todos os ambientes").
create table if not exists public.aovivo_canais (
  k text primary key,
  nome text not null,
  canal_id text not null,
  url text not null,
  termos text,
  ordem int not null default 0,
  ativo boolean not null default true,
  video_id text,
  estado text not null default 'fora' check (estado in ('aovivo','agendado','fora')),
  conferido_em timestamptz,
  mudou_em timestamptz
);
alter table public.aovivo_canais enable row level security;

insert into public.aovivo_canais (k, nome, canal_id, url, termos, ordem) values
 ('senado','TV Senado','UCLgti7NuK0RuW9wty-fxPjQ','https://www.youtube.com/@tvsenado/streams','https://www12.senado.leg.br/assessoria-de-imprensa/politica-de-uso',1),
 ('camara','Câmara dos Deputados','UC-ZkSRh-7UEuwXJQ9UMCFJA','https://www.youtube.com/@camaradosdeputadosoficial/streams','https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/acervo-por-tipo/videos',2),
 ('stf','STF','UCsW4QSB1USsu9ouuFUWe4Iw','https://www.youtube.com/@STF_oficial/streams',null,3),
 ('tse','Justiça Eleitoral','UC1kilS1DdyYOEGItHPRukBw','https://www.youtube.com/@justicaeleitoral/streams',null,4),
 ('canalgov','CanalGov','UCjaWLFTNqLkq3ZY2BJ4NYRg','https://www.youtube.com/@canalgov/streams','https://agenciagov.ebc.com.br/sobre',5),
 ('tvbrasil','TV Brasil','UCSv9d0kQegylHWpP83jWSQg','https://www.youtube.com/@tvbrasil/streams','https://agenciagov.ebc.com.br/sobre',6),
 ('onu','Nações Unidas','UC5O114-PQNYkurlTg6hekZw','https://www.youtube.com/@unitednations/streams','https://webtv.un.org/',7)
on conflict (k) do nothing;

-- leitura pública: só o necessário para montar a faixa
create or replace function public.aovivo_lista() returns jsonb
language sql stable security definer set search_path to '' as $$
  select coalesce(jsonb_agg(jsonb_build_object('k', k, 'nome', nome, 'canal', canal_id, 'url', url, 'video', video_id,
           'estado', estado, 'conferido_em', conferido_em) order by ordem), '[]'::jsonb)
  from public.aovivo_canais where ativo
$$;
revoke all on function public.aovivo_lista() from public;
grant execute on function public.aovivo_lista() to anon, authenticated;

-- conferência: só a função do servidor, com a chave do coletor
create or replace function public.aovivo_confere_inicio(p_chave text) returns jsonb
language plpgsql security definer set search_path to '' as $$
begin
  if p_chave is null or p_chave is distinct from (select valor from privado.config where chave = 'coletor_chave') then
    raise exception 'chave invalida';
  end if;
  return (select coalesce(jsonb_agg(jsonb_build_object('k', k, 'canal', canal_id) order by ordem), '[]'::jsonb)
          from public.aovivo_canais where ativo);
end $$;

create or replace function public.aovivo_grava(p_chave text, p_dados jsonb) returns int
language plpgsql security definer set search_path to '' as $$
declare n int := 0; r jsonb; e text; v text;
begin
  if p_chave is null or p_chave is distinct from (select valor from privado.config where chave = 'coletor_chave') then
    raise exception 'chave invalida';
  end if;
  for r in select * from jsonb_array_elements(coalesce(p_dados, '[]'::jsonb)) loop
    e := r->>'estado'; v := r->>'video';
    if e not in ('aovivo','agendado','fora') then continue; end if;
    if v is not null and v !~ '^[A-Za-z0-9_-]{11}$' then continue; end if;
    update public.aovivo_canais c
       set mudou_em = case when c.video_id is distinct from v or c.estado <> e then now() else c.mudou_em end,
           video_id = v, estado = e, conferido_em = now()
     where c.k = r->>'k';
    if found then n := n + 1; end if;
  end loop;
  return n;
end $$;
revoke all on function public.aovivo_confere_inicio(text) from public, anon, authenticated;
revoke all on function public.aovivo_grava(text, jsonb) from public, anon, authenticated;
grant execute on function public.aovivo_confere_inicio(text) to service_role;
grant execute on function public.aovivo_grava(text, jsonb) to service_role;

create or replace function privado.aovivo_dispara() returns void
language plpgsql security definer set search_path to '' as $$
begin
  perform net.http_post(
    url := 'https://zbmzabgdejylpmabujad.supabase.co/functions/v1/aovivo',
    headers := jsonb_build_object('Content-Type','application/json','x-coletor',(select valor from privado.config where chave='coletor_chave')),
    body := '{}'::jsonb, timeout_milliseconds := 60000);
end $$;

-- a cada 10 minutos
select cron.schedule('aovivo-confere', '*/10 * * * *', 'select privado.aovivo_dispara()');
