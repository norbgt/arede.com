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
