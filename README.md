# a rede.com

Ambiente online do projeto **a rede.com**: uma rede social e de notícias que ajuda organizações sociopolíticas democráticas a se organizarem, e em que a notícia pode virar movimento.

## Protótipo navegável

**https://norbgt.github.io/arede.com/** (abre direto o protótipo, no celular e no computador)

O protótipo guarda as escolhas de cada pessoa (tema, curtidas, pastas, algoritmo) só no navegador dela. Quem abre o link pela primeira vez vê o mesmo ponto de partida.

## Documentos

- [manifesto.md](manifesto.md): o manifesto, construído aos poucos.
- [como-a-rede-funciona.md](como-a-rede-funciona.md): as regras do produto, em linguagem simples.
- [analise-referencias.md](analise-referencias.md): análise de referências e todas as decisões tomadas no protótipo.
- [dados/conteudos.json](dados/conteudos.json): base de notícias reais (resumo, link original, cobertura e gancho para mobilizar).
- [prototipo/ARQUITETURA.md](prototipo/ARQUITETURA.md): princípios mobile first e organização do código.
- [LEIA-ME.md](LEIA-ME.md): como o ambiente local e o online se relacionam.
- [redes/index.ts](redes/index.ts) e [artes/index.ts](artes/index.ts): funções do servidor que leem o feed público de outras redes e o acervo do Design Ativista.

## Versões

- **v1.6 (9 nov 2026):** Documentos básicos do cidadão na aba Documentos (31 textos oficiais por assunto, com link direto ao Planalto: Constituição, CDC, CLT, ECA, LGPD, Lei de Acesso à Informação e outros); filtros rápidos Em alta (com os assuntos do dia), Por perto e Desmentidos (checagens das agências da base) na linha do algoritmo; selo de perfil verificado (identidade com documento ou conta oficial, concedido só pela curadoria); estado "Ainda sem selo" para publicações originais; desenho do selo corrigido; aba Arte em mosaico irregular; cartões abertos com o mesmo esqueleto em todos os tipos; eventos e chamados do mesmo tamanho, com 2 linhas de descrição.
- **v1.5 (9 nov 2026):** aba Arte no Início, com o acervo público do Design Ativista (453 peças, campanha como etiqueta, crédito a quem cria) e 1 arte a cada 5 conteúdos no feed geral; outras redes no perfil (Letterboxd, Substack, Medium e Pinterest pelo feed público, no perfil ou também no feed, com o mesmo selo e a marca de fonte individual; Facebook, Instagram e Spotify em breve); perfil que mostra o que é público e o que é só seu (o algoritmo nunca é público); pedido de cadastro de organização para a curadoria; criar pastas; mapa nos eventos; conteúdos de exemplo marcados como exemplo; revisão de todos os elementos clicáveis.
- **v1.4 (9 nov 2026):** notícias de origem em inglês e espanhol (146 fontes novas com os mesmos critérios e selo); botão de origem no topo, com bandeiras, para cada pessoa escolher os idiomas; ordem "mais perto de você primeiro" (cidade, estado, Brasil, América Latina) e marca de reforço internacional quando fontes de mais de um país publicam a mesma notícia, inclusive em idiomas diferentes.
- **v1.3 (8 nov 2026):** Organizações reúne movimentos, votações e organizações, com carrossel dos eventos da semana, chamados abertos e votações por prazo; o Início fica com Tudo, Publicações, Vídeos e Documentos. Página da notícia com trecho maior do feed, link de texto para a matéria completa, selo compacto e Mobilizar no fim. Em alta (métricas do dia, assuntos mais comentados, confirmado ou boato), Mídia NINJA na base com aviso de mídia ativista, e manifesto revisado (Premissa e Estruturas em cartões).
- **v1.2 (8 nov 2026):** coletor de notícias em tempo real (53 fontes com selo, a cada 15 minutos, com fila de curadoria); contas reais (cadastro com confirmação por e-mail da marca, entrada, nova senha) e publicações originais guardadas no servidor (Supabase, projeto "arede") e abertas a quem acessa; feed com fotos das matérias, cartões de tamanhos variados e texto sempre completo; Agenda no perfil (Quero ir, Quero ajudar com cadastro).
- **v1.1 (8 nov 2026):** 60 notícias reais das fontes verificadas, com link para a matéria original, cobertura em outras fontes e "Mobilizar a partir disto" (evento, chamado, abaixo-assinado ou votação ligados à notícia); Movimentos em duas colunas; algoritmo com resumo no ícone de ajuste; novo ambiente do Manifesto e de Como a rede funciona; organizações de exemplo marcadas.
- **v0.1 (7 nov 2026):** primeira versão do protótipo.
