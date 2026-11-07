# Análise de referências: Facebook, Instagram, WhatsApp e Pinterest

*Versão 1 · 7 nov 2026 · documento de trabalho*

## Objetivo (do Comando básico)

Uma rede social que ajude organizações sociopolíticas democráticas a se organizarem, com navegação simples e feed contínuo, e com um algoritmo que o usuário enxerga, controla, desliga ou troca por um ambiente "fora da bolha".

---

## 1. O que aproveitar de cada referência

### Facebook: a organização
- **Grupos**: o lugar onde comunidades se organizam de verdade (mural, membros, admins, regras).
- **Eventos**: convite, confirmação de presença e lembrete.
- **Páginas**: presença pública de uma organização, separada do perfil pessoal.
- **Feeds alternativos**: dá para ver só amigos, grupos ou páginas em ordem de publicação, mas a opção fica escondida e não pode virar o padrão.

### Instagram: a experiência
- **Visual primeiro**: imagem e vídeo curto em destaque, leitura rápida.
- **Stories**: conteúdo efêmero, que reduz a pressão de "postar algo perfeito".
- **"Seu Algoritmo"**: desde dez/2025 o Instagram mostra os temas que acha que interessam a você e deixa adicionar ou remover. Começou nos Reels, passou pelo Explorar e chegou ao feed principal em 2026. É a referência mais próxima do que queremos, mas só permite ajustar temas.
- **Seguindo / Favoritos**: feeds em ordem cronológica, que também não podem ser o padrão (o app volta ao feed com algoritmo).

### WhatsApp: a coordenação
- **Comunidades**: reúnem vários grupos sob um guarda-chuva, com um grupo de avisos.
- **Enquetes**: votação rápida dentro da conversa.
- **Eventos**: qualquer membro cria, os outros respondem e todos recebem lembrete.
- **Canais**: transmissão de mão única para muitos seguidores.
- **Criptografia de ponta a ponta**: conversas privadas de verdade.

### Pinterest: arquitetura, UX e UI
- **Grade em mosaico (masonry)**: cartões de alturas diferentes em colunas; a grade *é* a interface.
- **A interface recua**: pouco "cromo", poucas sombras, o conteúdo carrega a página.
- **Navegação inferior fixa no celular**: 5 itens (início, busca, criar, notificações, perfil), sem menu hambúrguer.
- **Pastas (boards)**: o usuário salva e organiza o que encontra, o que dá uma intenção à navegação.
- **Busca no centro**: descobrir é o gesto principal.

### Referência extra: Bluesky
- **Escolha de algoritmo**: em vez de um algoritmo mestre, o usuário escolhe entre vários feeds (de amigos, de temas, cronológico) e fixa os que quer. É o modelo mais avançado de "algoritmo que pode ser desligado ou trocado".

---

## 2. O que NÃO copiar

- **Controle escondido**: na Meta, o feed sem algoritmo existe, mas não pode ser o padrão. Na a rede, a escolha do usuário **fica salva**.
- **Algoritmo como caixa-preta**: o usuário deve ver *por que* um post apareceu.
- **Preferências usadas para anúncios**: a Meta diz que as escolhas do "Seu Algoritmo" também influenciam a segmentação de anúncios. Nossas preferências não devem virar produto.
- **Engajamento como meta única**: medir sucesso pelo tempo de tela é o que gera a alienação que queremos combater.

---

## 3. Proposta inicial para a rede

### Três modos de feed (escolha persistente)
1. **Meu algoritmo**: personalizado, mas transparente e editável (temas, organizações, pessoas), com o "por que estou vendo isto".
2. **Sem algoritmo**: ordem cronológica, só de quem e do que eu sigo.
3. **Fora da bolha**: ambiente agnóstico, não baseado no meu perfil, com amostra diversa de temas, regiões e organizações, para descobrir coisas novas.

### Navegação (inspirada no Pinterest)
Barra inferior com 5 itens: **Início** (feed) · **Explorar** (busca + Fora da bolha) · **Criar** · **Organizações** · **Perfil**. Mensagens e notificações ficam no topo.

### Organização como unidade central
Mistura de Grupo do Facebook com Comunidade do WhatsApp:
- mural e avisos;
- núcleos/subgrupos (por tema, bairro, cidade);
- eventos com presença;
- enquetes e votações;
- documentos (pautas, atas, propostas);
- membros e papéis (quem administra, quem modera, quem vota).

### Feed em mosaico
Cartões de tipos diferentes na mesma grade: post, evento, enquete, chamado para ação, documento.

---

## 4. Tensões que precisamos decidir

1. **Feed infinito x combater a alienação.** A rolagem infinita é justamente um dos mecanismos mais associados ao uso compulsivo. Em fev/2026 a Comissão Europeia concluiu, de forma preliminar, que o design viciante do TikTok (incluindo o feed altamente personalizado) violava o DSA. Sugestão: manter a navegação contínua, mas com **pontos de parada** ("você está em dia com suas organizações"), aviso de tempo opcional e a possibilidade de o próprio usuário pôr limite.
2. **Mosaico é visual; política é muito texto.** A grade do Pinterest funciona com imagens. Vamos precisar desenhar bem os cartões de texto (propostas, debates) para não perderem espaço.
3. **Enquete não é deliberação.** Para organizações democráticas, votações precisam definir quem pode votar, se o voto é secreto, quórum e como auditar o resultado. Enquete rápida (estilo WhatsApp) e votação formal devem ser coisas diferentes.
4. **Dados sensíveis (LGPD).** Opinião política e filiação a organização política são dados pessoais sensíveis (art. 5º, II), e não podem ser tratados com base em "legítimo interesse". Na prática, a rede inteira lida com dados sensíveis. Consequência de design: o "Meu algoritmo" deveria se basear no que o usuário **escolhe explicitamente**, não em opiniões políticas que o sistema **deduz**. Vale consultar um advogado especialista antes de lançar.
5. **Moderação e desinformação.** Qualquer rede política vai enfrentar isso, sobretudo em períodos eleitorais. Precisamos de regras claras desde o começo.

---

## 5. Próximos passos sugeridos

- Decidir os nomes finais dos três modos de feed.
- Desenhar o wireframe da tela Início (mosaico + seletor de modo).
- Desenhar a página de uma Organização.
- Definir o modelo de dados básico (usuário, organização, post, evento, votação).

---

## Fontes
- Instagram "Seu Algoritmo": Social Media Today, https://www.socialmediatoday.com/news/instagram-extends-your-algorithm-to-the-main-feed/822576/ · Creatorflow, https://creatorflow.so/blog/your-algorithm-instagram/
- Feeds cronológicos da Meta: Engadget, https://www.engadget.com/instagram-chronological-feed-is-back-150050596.html
- WhatsApp Comunidades e Eventos: https://blog.whatsapp.com/communities-now-available · https://blog.whatsapp.com/new-to-communities-events-and-replies-in-announcement-groups
- Pinterest (análise de design, não oficial): https://www.webdesignhot.com/api/design-md/pinterest/export/google-alpha
- Bluesky, escolha de algoritmo: https://bsky.social/about/blog/7-27-2023-custom-feeds
- DSA art. 38 e caso TikTok: https://ppc.land/recommender-system/
- LGPD dados sensíveis: https://confidata.com.br/blog/dados-sensiveis-lgpd-bases-legais-cuidados
