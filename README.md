# arede.online

Ambiente online de **arede.online**: uma rede social e de notícias que ajuda organizações sociopolíticas democráticas a se organizarem, e em que a notícia pode virar movimento. A marca é sempre **arede.online**, em minúsculas: o nome é também o endereço.

## No ar

**https://arede.online/** abre direto a rede, no celular e no computador. Código neste repositório (github.com/norbgt/arede.online); servidor no Supabase (projeto arede). Site, repositório e servidor estão sempre na mesma versão, e o número dela aparece no rodapé do site.

O site guarda as escolhas de cada pessoa (tema, curtidas, pastas, algoritmo) só no navegador dela. Quem abre pela primeira vez vê o mesmo ponto de partida.

## Estrutura

- [index.html](index.html): o site inteiro (um arquivo, mobile first, sem framework), publicado pelo GitHub Pages a partir da raiz.
- [CNAME](CNAME): o domínio arede.online.
- [ARQUITETURA.md](ARQUITETURA.md): princípios mobile first e organização do código.
- [manifesto.md](manifesto.md): o manifesto, construído aos poucos.
- [como-funciona.md](como-funciona.md): as regras do produto, em linguagem simples.
- [analise-referencias.md](analise-referencias.md): análise de referências e todas as decisões tomadas.
- [dados/conteudos.json](dados/conteudos.json): base inicial de notícias reais (resumo, link original, cobertura e gancho para mobilizar).
- [coletor/index.ts](coletor/index.ts) e [canais/index.ts](canais/index.ts): funções do servidor que coletam as notícias e os vídeos dos canais do YouTube, e que acham o endereço de cada canal.
- [redes/index.ts](redes/index.ts) e [artes/index.ts](artes/index.ts): funções do servidor que leem o feed público de outras redes e o acervo do Design Ativista.
- [emails/](emails/): modelos dos e-mails de cadastro e de nova senha.
- [LEIA-ME.md](LEIA-ME.md): os ambientes pares e como o ambiente local e o online se relacionam.

## Versões

- **v1 registrada (10 nov 2026):** primeira versão no domínio próprio. A marca passa a ser arede.online em tudo (logo, textos, e-mails, código e documentos) e o endereço principal é https://arede.online/, sem /prototipo. Vídeos de canais oficiais do YouTube na aba Vídeos, um de cada vez e com o detalhe junto; Documentação cidadã com a localidade de cada documento; tema e local nos cartões de notícia; anunciantes de exemplo, 1 a cada 8 cartões.
- **v1.6 (9 nov 2026):** Documentos básicos do cidadão na aba Documentos (31 textos oficiais por assunto, com link direto ao Planalto: Constituição, CDC, CLT, ECA, LGPD, Lei de Acesso à Informação e outros); filtros rápidos Em alta (com os assuntos do dia), Por perto e Desmentidos (checagens das agências da base) na linha do algoritmo; selo de perfil verificado (identidade com documento ou conta oficial, concedido só pela curadoria); estado "Ainda sem selo" para publicações originais; desenho do selo corrigido; aba Arte em mosaico irregular; cartões abertos com o mesmo esqueleto em todos os tipos; eventos e chamados do mesmo tamanho, com 2 linhas de descrição.
- **v1.5 (9 nov 2026):** aba Arte no Início, com o acervo público do Design Ativista (453 peças, campanha como etiqueta, crédito a quem cria) e 1 arte a cada 5 conteúdos no feed geral; outras redes no perfil (Letterboxd, Substack, Medium e Pinterest pelo feed público, no perfil ou também no feed, com o mesmo selo e a marca de fonte individual; Facebook, Instagram e Spotify em breve); perfil que mostra o que é público e o que é só seu (o algoritmo nunca é público); pedido de cadastro de organização para a curadoria; criar pastas; mapa nos eventos; conteúdos de exemplo marcados como exemplo; revisão de todos os elementos clicáveis.
- **v1.4 (9 nov 2026):** notícias de origem em inglês e espanhol (146 fontes novas com os mesmos critérios e selo); botão de origem no topo, com bandeiras, para cada pessoa escolher os idiomas; ordem "mais perto de você primeiro" (cidade, estado, Brasil, América Latina) e marca de reforço internacional quando fontes de mais de um país publicam a mesma notícia, inclusive em idiomas diferentes.
- **v1.3 (8 nov 2026):** Organizações reúne movimentos, votações e organizações, com carrossel dos eventos da semana, chamados abertos e votações por prazo; o Início fica com Tudo, Publicações, Vídeos e Documentos. Página da notícia com trecho maior do feed, link de texto para a matéria completa, selo compacto e Mobilizar no fim. Em alta (métricas do dia, assuntos mais comentados, confirmado ou boato), Mídia NINJA na base com aviso de mídia ativista, e manifesto revisado (Premissa e Estruturas em cartões).
- **v1.2 (8 nov 2026):** coletor de notícias em tempo real (53 fontes com selo, a cada 15 minutos, com fila de curadoria); contas reais (cadastro com confirmação por e-mail da marca, entrada, nova senha) e publicações originais guardadas no servidor (Supabase, projeto "arede") e abertas a quem acessa; feed com fotos das matérias, cartões de tamanhos variados e texto sempre completo; Agenda no perfil (Quero ir, Quero ajudar com cadastro).
- **v1.1 (8 nov 2026):** 60 notícias reais das fontes verificadas, com link para a matéria original, cobertura em outras fontes e "Mobilizar a partir disto" (evento, chamado, abaixo-assinado ou votação ligados à notícia); Movimentos em duas colunas; algoritmo com resumo no ícone de ajuste; novo ambiente do Manifesto e de Como funciona; organizações de exemplo marcadas.
- **v0.1 (7 nov 2026):** primeira versão.
