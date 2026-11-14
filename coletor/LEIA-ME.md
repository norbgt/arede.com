# Coletor de notícias da a rede.com

Função do servidor (Supabase Edge Function `coletor`, projeto "arede") escrita do zero para a rede.

- Lê os feeds RSS/Atom das fontes com selo da base (tabela `fontes`).
- Guarda só título, chamada publicada pela fonte, data, imagem de capa e link (tabela `noticias`). A matéria completa fica no site original.
- Evita repetidas e agrupa a mesma notícia publicada por fontes diferentes (cobertura cruzada).
- Selo 80 ou mais e em português: entra direto no feed. Demais: fila de revisão (Curadoria do coletor, só administradoras).
- Esporte, entretenimento e sorteios ficam fora do feed.
- Roda a cada 15 minutos (pg_cron). A busca por feeds novos roda toda segunda às 4h (Brasília).
- Sem RSS (13 nov 2026): a busca tenta o mapa de notícias do site (sitemap de notícias). Dele vêm título, link, data e capa; a chamada fica vazia. Quem pede no robots.txt para nenhum robô ler não é lido.
- `?modo=descobrir&so=semfeed` refaz a busca só das fontes sem feed (no banco: `select privado.coletor_dispara('descobrir&so=semfeed')`).
- A versão publicada lê `temas.ts` deste repositório fixado num commit (o arquivo `temas.ts` da função só reexporta). Ao mudar os temas, publique o coletor de novo apontando para o commit novo.

## Agendamento (13 nov 2026)
As 10 partes (lotes) não são mais disparadas juntas: juntas, estouravam o limite de processamento da função (CPU Time exceeded).
A rotina `coletor-noticias` roda a cada minuto e chama `privado.coletor_dispara_lote('coletar', minuto % 15)`:
os lotes 0 a 9 saem nos minutos 0 a 9 de cada janela de 15 minutos; cada fonte segue lida a cada 15 minutos.
`privado.coletor_dispara(modo)` (as 10 de uma vez) fica para usos manuais e para a busca semanal de feeds.
A limpeza diária (`coletor-limpa-respostas`) também apaga o histórico do agendador com mais de 7 dias.

## Publicação e idioma (14 nov 2026)
A função publicada no Supabase tem uma linha só: ela carrega `coletor/index.ts` deste repositório, fixado num commit.
O que roda é exatamente o que está aqui. Para publicar uma mudança: enviar ao repositório e trocar o commit na função.
Idioma de cada notícia: vale o que o feed declara quando é pt, en ou es; senão, o idioma cadastrado da fonte; só sem os dois, as palavras do texto.
