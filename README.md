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

## Versões

- **v1.2 (8 nov 2026):** coletor de notícias em tempo real (53 fontes com selo, a cada 15 minutos, com fila de curadoria); contas reais (cadastro com confirmação por e-mail da marca, entrada, nova senha) e publicações originais guardadas no servidor (Supabase, projeto "arede") e abertas a quem acessa; feed com fotos das matérias, cartões de tamanhos variados e texto sempre completo; Agenda no perfil (Quero ir, Quero ajudar com cadastro).
- **v1.1 (8 nov 2026):** 60 notícias reais das fontes verificadas, com link para a matéria original, cobertura em outras fontes e "Mobilizar a partir disto" (evento, chamado, abaixo-assinado ou votação ligados à notícia); Movimentos em duas colunas; algoritmo com resumo no ícone de ajuste; novo ambiente do Manifesto e de Como a rede funciona; organizações de exemplo marcadas.
- **v0.1 (7 nov 2026):** primeira versão do protótipo.
