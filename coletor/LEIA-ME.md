# Coletor de notícias da a rede.com

Função do servidor (Supabase Edge Function `coletor`, projeto "arede") escrita do zero para a rede.

- Lê os feeds RSS/Atom das fontes com selo da base (tabela `fontes`).
- Guarda só título, chamada publicada pela fonte, data, imagem de capa e link (tabela `noticias`). A matéria completa fica no site original.
- Evita repetidas e agrupa a mesma notícia publicada por fontes diferentes (cobertura cruzada).
- Selo 80 ou mais e em português: entra direto no feed. Demais: fila de revisão (Curadoria do coletor, só administradoras).
- Esporte, entretenimento e sorteios ficam fora do feed.
- Roda a cada 15 minutos (pg_cron). A busca por feeds novos roda toda segunda às 4h (Brasília).
