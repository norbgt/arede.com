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

---

## Decisões tomadas no protótipo (7 nov 2026)

- **Abas por tipo de conteúdo** no Início: Tudo, Publicações, Eventos, Enquetes, Votações, Chamados, Documentos.
- **Switch "Algoritmo"** na barra superior substitui os três modos de feed.
- **Algoritmo ligado:** feed pelos temas que o usuário escolhe (e, se ele permitir, suas organizações), com o "por que estou vendo isto" em cada cartão.
- **Algoritmo desligado:** mesma estrutura (abas, mosaico, rolagem contínua, pausas), mas o conteúdo deixa de ser limitado ao perfil. Vem de todas as organizações, por critérios amplos e iguais para todos: rodízio de temas e cidades e, dentro de cada tema, o mais novo primeiro. Cartões que fogem do padrão do usuário avisam "Fora do seu padrão". É aqui que mora o "sair da bolha".
- **Selo de confiabilidade** em cada cartão: um selo de verificação cuja cor varia em tons contínuos conforme a nota (0 a 100), do vermelho ao verde-escuro. Faixas: Alta confiança (90+), Confiável (75–89), Confiança moderada (45–74), Baixa confiança (abaixo de 45). No detalhe, uma escala mostra onde a nota está e o que foi checado (organização, afirmações, imagem, fontes, histórico), com opção de contestar e revisão humana. Pergunta, pedido ou opinião recebem selo neutro "Sem fatos a checar". Conteúdo de baixa confiança aparece desfocado no feed.
- **Página do conteúdo** (como o pin aberto do Pinterest): ao clicar no cartão, abre o conteúdo grande e completo, com a organização, o botão "Ver original" (quando o conteúdo veio de fora) ou a indicação "Publicado direto na rede", as interações (votar, confirmar presença, ajudar), os conteúdos vinculados com prévia (documentos, fontes oficiais, outros conteúdos da organização) e as informações da rede (selo de confiabilidade, tema, cidade, organização verificada, por que apareceu). Embaixo, "Mais para explorar" com conteúdos relacionados no mosaico.
- **Vídeo como tipo de conteúdo** (aba própria "Vídeos"): o vídeo toca no próprio cartão, sem som, quando aparece na tela, e pausa quando sai. O selo no canto superior mostra o tempo restante e funciona como play/pausa; o botão de som liga o áudio só daquele vídeo. Ao abrir o conteúdo, o vídeo continua de onde parou, com o player completo. No Perfil dá para desligar a reprodução automática (economia de dados). Quem pediu "reduzir movimento" no aparelho não tem reprodução automática.
- **Aba Vídeos em 1 coluna**, exclusivamente (as demais abas seguem em 2). Na aba Publicações, vídeos aparecem misturados com textos e imagens.
- **Mecanismo de interação padrão: expansão no lugar.** Ao clicar num cartão, ele se expande na mesma tela, na largura toda da grade. O que estava acima continua no lugar; os demais conteúdos descem e seguem normalmente na grade, abaixo do cartão expandido. Ao selecionar outro cartão, o anterior volta à grade e o novo se expande. Vale para todas as grades (feed, Explorar, organização, relacionados). O cartão expandido tem fechar (X) e um atalho para abrir em página própria (para compartilhar o link).
- **Premissa: resumo antes do clique.** Nenhuma miniatura mostra só o título. Todo cartão traz um resumo com no mínimo 2 e no máximo 4 linhas (padrão), para dar contexto antes de qualquer clique.
- **Ajustar ao lado do Algoritmo:** o botão de ajuste (ícone de controles) fica junto do switch, no mesmo bloco, porque só diz respeito ao algoritmo.
- **Filtro e ordenação** na linha de status do feed. Filtros: temas, cidades, organizações (todas ou só as que participo) e confiabilidade mínima; valem só para a navegação, sem mudar o algoritmo. Ordenação: padrão, mais recentes, mais confiáveis, mais participação. O ícone mostra quantos filtros estão ativos; não há texto repetindo a mesma informação.
- **Avisos do feed discretos:** "Você viu tudo", "Nada por aqui" e "Pausa" viraram uma nota centralizada, em texto suave, com ações em link. Com filtros ativos o feed não repete conteúdo.
- **Duas grades com papéis diferentes:**
  - **Início:** grade irregular em mosaico (referência Pinterest), 2 colunas, espaçamento curto no celular.
  - **Buscar:** barra de pesquisa com digitação no topo + temas + grade regular de 3 colunas (referência Instagram/Facebook), com destaques 2×2 alternando de lado. Vídeos tocam sem som e mostram a duração; cada bloco traz o selo, o título e um resumo curto. A busca filtra a grade enquanto você digita e mostra as organizações encontradas. Tocar num bloco abre o conteúdo expandido logo abaixo da linha dele (mesmo mecanismo padrão).
- **Barra de navegação flutuante** no celular (referência Instagram): pílula só com ícones (Início, Buscar, Criar, Organizações, Perfil), item ativo com fundo. No tablet/desktop continua como trilho lateral com rótulos.
- **Enquetes e votações numa só aba ("Votações").** Dentro dela, cada cartão continua dizendo se é "Enquete rápida" (opinião) ou "Votação formal" (decisão com quórum e voto secreto). As contagens das abas agora batem com o que o feed mostra.
- **Troca das grades (decisão de 7 nov, 17h45):**
  - **Início** passa a usar a grade regular (3 colunas iguais + destaques 2×2 alternando lados), mantendo tudo do modelo anterior: abas, algoritmo e ajuste, filtro e ordenação, rolagem contínua com pausas, selo, resumo, dados-chave de cada tipo (data e local, votos, quórum, voluntários, páginas), vídeo tocando no bloco com som e play/pausa, salvar no hover e expansão no lugar logo abaixo da linha. A aba Vídeos continua com 1 coluna.
  - **Buscar** passa a usar o mosaico irregular estilo Pinterest (2 colunas), com a barra de pesquisa e os temas no topo.
- **Refatoração dos feeds e marca (7 nov, 18h10):**
  - **Início** em blocos quadrados (3 colunas × 2 linhas), e cada cartão com o tamanho do seu tipo: imagem 1×1 com até 3 linhas de legenda, vídeo 1×2 vertical com até 2 linhas, textual 2×2 (ou 1½×2 em dupla) com no mínimo 5 linhas de leitura. Legenda de mídia = título em negrito + resumo, num parágrafo só. Isso substitui a regra anterior de "resumo de 2 a 4 linhas".
  - Mesma regra de texto em todas as grades (mosaico da Buscar, organizações, relacionados, aba Vídeos). Selo dos cartões textuais no topo, junto do tipo, em todas.
  - Interface mais simples: abas sem contadores; coluna de conteúdo de 640px no desktop.
  - **Marca "a rede.com"** (Estrutura #7 do manifesto): o ponto é um nó da rede; com mouse a marca aparece compacta e se completa ao passar o cursor; símbolo "a." no trilho e no ícone.
- **Cartões e leiautes por tipo (7 nov, 18h25):** Eventos virou agenda (por data, com "Vou" no cartão); Votações virou cédula (prazo, opções da enquete votáveis no cartão, quórum da votação formal e botão Votar); Chamados virou metas em 2 colunas ("N faltando" em destaque e "Quero ajudar"); Documentos virou arquivo (folha com o tipo, organização, data, páginas e situação). No Início e na Buscar, cada tipo leva o mesmo sinal em versão compacta. Na data do evento, o dia da semana aparece só na folhinha (um sinal só).
- **Ajustes de leitura (7 nov, 18h27):** um só tamanho de texto nos cartões de cada grade (texto do cartão textual = legenda de imagem e vídeo). Nas legendas, o título nunca divide linha com o resumo: título em linha própria (até 2 linhas), resumo na linha seguinte, sem passar de 3 linhas no total (imagem) ou 2 (vídeo). Pastas do Perfil viraram miniaturas (cerca de 112px).
- **Cartão aberto mais leve (7 nov, 18h29):** conteúdos vinculados, selo, etiquetas e "por que apareceu" ficaram compactos, em segundo plano em relação ao conteúdo.
- **Curtir e salvar como ícones (7 nov, 18h32):** na barra do cartão aberto: abrir em página, curtir (coração com contagem), compartilhar, salvar (marcador) e fechar. Salvar pergunta em qual pasta guardar; tocar de novo remove. As pastas ficam no Perfil.
- **Perfil no modelo do Pinterest (7 nov, 18h36):** conteúdo separado de configuração. No topo: você, "Visualizar perfil", compartilhar e a engrenagem. Abas de conteúdo: Pastas (busca, nova pasta, miniaturas; pasta com cadeado é secreta), Salvos (filtra por pasta) e Publicações. A engrenagem abre Configurações: perfil público ou privado (privado por padrão), organizações no perfil, organizações no algoritmo, feed e aparência. "Visualizar perfil" mostra o que as outras pessoas veem conforme essas escolhas: pasta secreta e pasta vazia não aparecem; com o perfil privado, nem as pastas.
- **Perfil com duas abas (7 nov, 18h42):** Pastas e Salvos eram a mesma coisa e viraram uma aba só, **Salvos**: as pastas aparecem em miniatura e, ao tocar, mostram o que está dentro (com voltar e busca na pasta). **Publicações** é um feed seu, na mesma grade do Início, com publicações de todos os formatos; no topo, o mesmo fluxo do botão Criar ("Criar publicação" e atalhos por tipo). Publicar a partir do perfil mantém você no perfil. "Visualizar perfil" mostra esse mesmo feed.
- **Publicações do perfil (7 nov, 18h44):** os chips são filtros por tipo (os mesmos grupos das abas do Início, só os que você tem) e criar é um único botão "+" discreto no fim da linha de filtros, que abre o mesmo fluxo do botão Criar. Chips e abas passam a começar alinhados à margem.
- **Ações do perfil no canto superior direito (7 nov, 18h47):** criar (+), compartilhar e configurações ficam juntos no topo. O + do perfil abre o mesmo menu Criar, com a opção extra "Pasta". Não há mais + no meio da página.
- **"Por que apareceu" padronizado (7 nov, 18h48):** sempre "Apareceu porque você …": "… participa de [organização].", "… escolheu o tema [tema].", "… desligou o algoritmo: [tema] · [cidade]." e, quando foge do padrão, "… desligou o algoritmo, e está fora do seu padrão: [tema] · [cidade]."
- **Perfil: Compartilhadas e Curtidas (7 nov, 18h55):** os filtros da aba Publicações são Tudo · Compartilhadas · Curtidas · e os tipos que a pessoa já publicou (sem o chip "Publicações", que repetia o nome da aba). Curtidas e compartilhadas ficam só com a pessoa ("só você vê").
- **Pé do cartão textual (7 nov, 18h55):** os dados do tipo (enquete com todas as opções e parciais, quórum, data e local, meta, páginas) ficam sempre no pé; título e leitura no topo. Com mais largura, os blocos ficam um pouco mais baixos (3:1,6) e o texto um ponto maior, para não sobrar vazio: no desktop, a maior sobra medida caiu de 157px para 60px; no celular, até 22px.
- **Governança a partir do manifesto (7 nov, 19h10)** — decisões da Amanda:
  - **#1 Propostas de membros:** qualquer membro com direito a voto propõe uma votação; ela vai a voto com apoio de **20%** dos membros com direito a voto. Novo estado "Proposta de votação" com barra de apoios e botão Apoiar (cartão, cédula, página e aba Votações da organização, com "Propor votação"). Criar › Proposta de votação segue o mesmo fluxo.
  - **#2 Manifesto no produto:** página completa (texto integral + "Como a rede funciona"), acessível pelo rodapé das telas (Perfil, Configurações, Organizações, Buscar, conteúdo, pausas e fim do feed) e pelo pé do trilho lateral no desktop.
  - **#3 Ao vivo:** votos, apoios, presenças e voluntários entram em tempo real nos cartões visíveis (simulado no protótipo), com um ponto "ao vivo".
  - **#4 Denúncias:** o conteúdo denunciado por ferir direitos **continua visível** durante a revisão; a revisão é **automática, sem interferência humana**, com registro público; recurso = nova revisão automática independente. "Informação falsa" vai para a verificação do selo. A contestação do selo também passou a ser automática.
  - **#5 Mandatos:** coordenação sempre com data de fim de mandato. Em **processo crítico** (eleições e disputas entre chapas), mandato vencido sem eleição passa à **oposição, interinamente, por até 30 dias**, com eleição obrigatória nesse prazo. Assembleias e votações simples seguem o processo comum. Exemplo: Vila Aurora.
- **Perfil simplificado (7 nov, 19h15):** mesma lógica do Início. Uma linha de abas (Publicações · Compartilhadas · Curtidas · Salvos), uma linha de status (o que está na tela e quem pode ver) e a mesma grade de blocos em todas, inclusive dentro das pastas. Saíram os chips de tipo, a etiqueta "Perfil privado" e a busca do perfil.
- **Manifesto e regras separados (7 nov, 19h15):** as respostas da Amanda sobre governança não entram no texto do manifesto. O rodapé leva a duas páginas: **Manifesto** (só o texto, como foi escrito) e **Como a rede funciona** (regras do produto).
- **Interesses públicos (7 nov, 19h19):** cada perfil escolhe até 5 interesses (dos temas da rede) para mostrar abaixo do nome, no Perfil e em "Visualizar perfil". Edição pelo Perfil ou em Configurações; com 5 escolhidos, os demais ficam bloqueados. São separados dos temas do algoritmo, que continuam privados.
- **"Como a rede funciona" no tom do manifesto (7 nov, 19h19):** o "Comando básico" saiu do texto do manifesto e virou a introdução da página "Como a rede funciona", reescrito no tom de voz do manifesto, assim como as regras da página. Texto em `como-a-rede-funciona.md`.
- **Dois tons de voz (7 nov, 19h22):** o **Manifesto** tem tom lúdico e inspiracional e não é editado por Claude. **Como a rede funciona** fala de forma simples e direta: introdução (o antigo "Comando básico", simplificado) e seis regras com títulos claros.
- **Perfil público em abas (7 nov, 19h25):** "Visualizar perfil" usa a mesma estrutura do Perfil (abas, status, grade): Publicações · Pastas. Compartilhar o perfil fica no topo dessa tela.
- **Topo do Perfil mais enxuto (7 nov, 19h27):** foto menor, nome e "Visualizar perfil"; à direita só criar (+) e configurações. Interesses públicos aparecem só no perfil público e são editados nas Configurações.
- **Manifesto e regras sem rodapé (7 nov, 19h28):** como o feed é infinito, o rodapé saiu das telas com rolagem. O acesso fica em Configurações › Sobre a rede.com (Manifesto, Como a rede funciona, versão), no pé do trilho lateral no desktop e em atalhos no contexto (ao denunciar e ao ajustar o algoritmo).
- **Aba Algoritmo no Perfil privado (7 nov, 19h31):** transparência sobre o algoritmo, com gráficos simples (rótulo + barra + número, nunca só cor): o que alimenta o feed (temas, organizações e equilíbrio), do que é feito o feed por tema, o tamanho da bolha (temas, cidades e organizações alcançados), a confiabilidade do que chega (por faixa do selo) com alerta de sinal de desinformação, e a confiabilidade das suas interações.
- **Manifesto na barra superior (7 nov, 19h37):** o logo "a rede.com" do Início ganhou uma setinha e, ao toque, abre uma folha com Manifesto e Como a rede funciona (e a versão). Para caber no celular, o rótulo "Algoritmo" aparece a partir de 385px e o logo fica um ponto menor até 429px. Configurações › Sobre a rede.com continua como segundo caminho.
- **Eventos e chamados numa aba só (7 nov, 19h46):** a aba "Eventos e chamados" é uma agenda única, ordenada pelo que acontece ou vence primeiro. Os cartões têm a mesma estrutura e o tipo se reconhece pelo destaque à esquerda: **evento** = folhinha com a data (com "às 9h" e local; ação "Vou"); **chamado** = quantos faltam, na cor da organização (com prazo, barra de progresso e "Quero ajudar"). A página da organização segue o mesmo agrupamento. O leiaute de metas em 2 colunas saiu.
- **"Movimentos" (7 nov, 20h02):** a aba "Eventos e chamados" passa a se chamar **Movimentos**, no Início e nas organizações.
- **Painel de controle local (7 nov, 20h02):** ambiente só nosso, em `painel/`, fora do GitHub e do link público. Seções: visão geral, fontes verificadas (base de fontes confiáveis para conteúdos e selo, com critérios, situação e cadastro), verificação do selo (faixas, pesos, contestações), denúncias e moderação (prazos, registro público), organizações e mandatos, parâmetros de governança, transparência e LGPD, e análise do produto (completude por área, gaps priorizados, evolução, receita e riscos).

## 08/11 · Ambiente do manifesto (referência: artists4ceasefire.org)
- Manifesto e "Como a rede funciona" viram um ambiente à parte: fundo escuro, tipografia grande, sem a navegação do app; barra própria com "← a rede.com" (volta à última tela do app).
- Mantém marca (fonte do logo, ponto azul), destaque roxo e botões arredondados.
- Manifesto: abertura com a frase inaugural, faixa "o poder emana do povo", Interlude em coluna de leitura com frases curtas em destaque, Estruturas em grade, Regras de governança, "Quem assina" (exemplo) e cartões para compartilhar. Texto sem alterações.
- Como funciona: título grande, introdução simples, 6 regras numeradas 01–06.
- Regra de trabalho: ao fim de cada ação, o HTML atualizado vai para o Mac (Dock) e também como arquivo na conversa.

## 08/11 · Movimentos em 2 colunas irregulares
- A aba Movimentos passa a usar grade de 2 colunas irregulares (encaixe pela altura real de cada cartão).
- Evento = ingresso: data grande no topo, dia da semana na cor da organização, horário num selo, picote, local, "X vão" e Vou.
- Chamado = meta: bloco na cor da organização com quanto falta, a barra e "X de Y", depois prazo, resumo maior e "Quero ajudar".
- Nas colunas estreitas, as ações ficam embaixo do nome da organização.

## 08/11 · Algoritmo: estado no botão, resumo no ajuste
- Sai a linha "Ligado: 4 temas + suas organizações" do Início: o estado fica no botão Algoritmo; filtrar e ordenar sobem para a linha das abas.
- O ícone de ajuste abre "Meu algoritmo": resumo (estado com o detalhe, equilíbrio organizações/temas, 3 temas mais presentes, alcance da bolha, sinal de desinformação) + ajustes (temas e equilíbrio).
- "Saber mais sobre o meu algoritmo" leva ao painel completo, na aba Algoritmo do perfil.
- (08/11 09:55) Ajuste: algoritmo + ajuste, filtrar e ordenar ficam numa mesma linha abaixo das abas e acima do feed; o topo fica só com a marca e mensagens.

## 08/11 · Auditoria de fluxos
- Clique automático em 65 tipos de botão (547 cliques), em 11 telas e nos 9 tipos de cartão aberto: 0 erros; todo botão responde.
- Corrigido: marcador "Pastas salvas" do Explorar agora abre a aba Salvos; links para a própria tela voltam ao topo; removida ação sem uso.
- 12 fluxos a criar foram para o painel (Análise do produto → Auditoria de fluxos). P0: criar por tipo (evento, enquete, chamado, documento), ver as fontes do selo, ler documentos.

## 08/11 · Permissões
- Amanda é admin de todos os ambientes (protótipo, link público, GitHub norbgt/arede.com, painel, prévia no Claude).
- Ajustes são feitos a partir do Mac dela: direto nos arquivos ou pelos consoles em que ela está logada nele (Claude, GitHub). Publicações no GitHub pelo Claude valem, quando ela pedir.
- O painel não é publicado (fora do GitHub e do link público). "Protótipo" no painel volta para ../prototipo/index.html quando aberto da pasta; fora dela, abre o link público.
- No produto real: conta de admin, segundo fator, aparelhos autorizados e registro de cada ajuste.
- (08/11 10:40) Painel ↔ protótipo pelo mesmo mecanismo: no painel, a marca "a rede.com ⌄" abre a mesma folha do protótipo (Protótipo, Manifesto, Como a rede funciona, Painel de controle · você está aqui). Saiu o link "← Protótipo" do fim do menu.

## 08/11 · Base de fontes: imprensa como corroboração
- Decisão da Amanda: imprensa (grande e alternativa) entra no selo como corroboração — ajuda a nota quando veículos independentes noticiam o mesmo fato, mas sozinha não confirma.
- Mesmos critérios para grande e alternativa: responsável identificado, política pública de correções, separação notícia/opinião, apuração própria. Só reportagem conta.
- Entraram em revisão: 9 da grande imprensa e 9 alternativas e independentes. Fontes primárias e checagem seguem como "prova".
- (08/11 11:04) Fontes internacionais: 52 novas, em revisão, cobrindo todos os segmentos (organismos internacionais, cortes e eleições, dados abertos, checagem da rede IFCN, OMS/IPCC/FAO e afins, sociedade civil internacional, imprensa pública, grande e independente). Filtro Brasil / Internacionais no painel.
- (08/11 11:07) Todas as fontes listadas ficam ativas por padrão (Amanda revisa uma a uma depois); só o exemplo sem responsáveis (cidadealerta) segue suspenso. Cada fonte ganhou selo próprio (nota 0–100 nas mesmas faixas do selo dos conteúdos) e o porquê: nota pelo tipo de fonte, nunca pela linha editorial; ajustes pontuais com motivo escrito.

## 08/11 · Base de notícias reais + Mobilizar
- Foco redefinido pela Amanda: a rede.com é rede social e rede de notícias amplas; a notícia acende a conversa e a conversa pode virar movimento. Não depender só de organizações que já existem.
- 60 notícias reais (6 por tema), publicadas pelas próprias fontes da base (perfil da fonte, com o selo dela), resumo da curadoria, link da matéria original, cidade, cobertura em outras fontes e "gancho para mobilizar".
- "Mobilizar a partir disto" em cada notícia: Evento, Chamado, Abaixo-assinado e Votação já ligados à matéria; a notícia mostra as mobilizações ligadas.
- Dados em dados/conteudos.json (formato estável, o mesmo que o coletor em tempo real vai preencher). Organizações de exemplo marcadas "exemplo".
- Limites da primeira carga: 43 notícias só com uma fonte (limite de buscas) e grande imprensa sub-representada (sites bloquearam a leitura). Ambos viraram tarefa no painel, junto com o coletor em tempo real, organizações reais e conteúdos internacionais.
- (08/11 12:15) Publicada a **v1.1** no GitHub Pages (norbgt/arede.com, commit 5078012), sem o painel de controle.
- (08/11 12:20) v1.1 atualizada online: barra inferior mais perto da borda (commit 5562e9d).

## 08/11 · Cartões do Início: tamanhos, formatos, texto completo e fotos
- Blocos de texto alternam 7 desenhos (4|2, 2|4, alta+média+curta, faixa de manchete, destaque) e espelham a cada bloco: nenhum par de cartões iguais lado a lado.
- Tudo e Publicações alternam cartão com foto, só texto e vídeo. Imagens genéricas (ilustração gerada) saem do feed principal.
- Texto sempre completo: título inteiro (a letra diminui se precisar) e, do resumo, só frases inteiras; se nenhuma cabe, entra o gancho; se nem ele, a foto ocupa o espaço.
- 54 das 60 notícias têm a foto principal da matéria, com crédito, carregada da própria fonte (dados/conteudos.json, campo "imagem"). A foto com "proibida reprodução" (Reuters) ficou de fora.
- Na prévia do Claude as fotos externas são bloqueadas: o cartão vira só texto, sem buraco.
- Fotos embutidas: as 54 fotos foram reduzidas (560px, JPEG) e guardadas em dados/fotos/fotos.json; o build as embute no HTML, então aparecem também na prévia do Claude e no artefato.
- Densidade de texto: só alguns cartões são de leitura longa (os grandes sem foto). Os demais mostram título e no máximo uma frase; cartões com foto ficam com título.

## 08/11 · Contas reais (v1.2)
- Banco: Supabase, projeto "arede" (São Paulo, plano gratuito). Tabelas perfis e publicacoes, imagens no bucket "midia"; regras RLS: leitura pública, publicação só por conta confirmada e em nome próprio, admin modera, papel não muda pelo app.
- Site URL e Redirect URLs: https://norbgt.github.io/arede.com/prototipo/
- E-mails da marca prontos (pasta emails); entram quando houver SMTP próprio. Decisão: por enquanto, e-mail padrão do Supabase.

## 10/11 · Marca arede.online e endereço principal
- A marca passa a ser **arede.online**, sempre em minúsculas (antes “a rede.com”). O nome é também o endereço. Como a marca já começa com “a”, ela aparece sem artigo antes: “Como arede.online funciona”, “Acessar arede.online”, “e-mail da arede.online”.
- Logo: “arede” em peso forte, o ponto (nó da rede, na cor de destaque) e “online” mais leve. Como antes, o ponto se move: com mouse, a marca fica compacta, “a.rede”, e ao passar o cursor o ponto corre para “arede.online”; no celular aparece completa. O símbolo compacto “a.” continua no trilho lateral e no ícone.
- Endereço principal: https://arede.online/ (o site fica na raiz do repositório). O /prototipo e o endereço norbgt.github.io/arede.com saíram; o login do Supabase aceita só arede.online.
- Trocada também no manifesto do projeto (Estrutura #7 e Comando #2), nos e-mails, nas funções do servidor (identificação nas leituras de feed), no perfil oficial e no painel. Falta o documento oficial do manifesto no Google Docs.
- Topo do perfil (10/11): sai o botão “+ Publicar”, que repetia o Criar da navegação; criar uma publicação começa só pelo Criar. Ficam dois botões, cada um com um destino: o “a.” roxo (entrar ou criar conta; com conta, “Sua conta”) e a engrenagem (Configurações).

## 10/11 · Pé do cartão em 2 linhas, com os interesses de quem lê
- O pé de todo cartão textual tem sempre 2 linhas, cada uma numa só linha, sem repetir o que o cartão já mostra. O que não cabe sai inteiro (nunca cortado no meio); barras de progresso (enquete, votação, chamado) ficam acima e não contam como linha.
- Linha 1, contexto: o lugar (cidade, estado, Nacional, perto de você) e as etiquetas de tema do conteúdo. As que estão nos interesses de quem lê (temas do algoritmo e interesses do perfil) vêm primeiro, com um coração; as demais aparecem com #. O tema saiu do topo do cartão e passou para cá. Fonte individual e reforço também ficam nesta linha.
- Linha 2, origem ou o essencial do tipo: notícia com o veículo ↗ e a data (o domínio, que repetia o veículo, saiu); publicação da rede com quem publicou e há quanto tempo; evento com hora, local e quem vai; enquete com votos e prazo; votação com votantes e quórum; chamado com quanto falta e a meta; documento com tipo, páginas, data e situação.

## 10/11 · Progressão de acesso e segurança
- Quanto mais a pessoa se identifica, mais ela vê (regra definida pela Amanda). Visitante, sem conta: as 30 primeiras publicações de cada aba e da busca, e 8 vídeos por visita; depois, convite para criar conta. Conta com e-mail: até 30 publicações novas por aba e 100 no total a cada hora; 15 vídeos a cada 12 horas, depois só no canal original. Conta verificada com documento: sem esses limites (a verificação com documento ainda não existe). Administradora: tudo.
- O que a pessoa já viu nos últimos 7 dias não conta de novo: o limite é de conteúdo novo. Os números ficam num lugar só do código (ACESSO).
- A aba Arte fica, por enquanto, só para a administradora. As artes saíram da página pública (que ficou com metade do tamanho). No servidor, a regra que fecha a leitura das artes aguarda confirmação da Amanda.
- Limite honesto: a contagem é da interface e fica no aparelho. Para valer contra ação em massa, precisa ir para o servidor (próximo passo, registrado no painel).
- Segurança: a biblioteca de login passou a vir em versão fixa, conferida por assinatura (SRI). Avaliação geral do ambiente em 10/11: grau Médio, 3 de 5; detalhes, próximos passos e análises sugeridas ficam no painel de controle, em Segurança.

## 10/11 · Cadastro maduro e acesso cobrado no servidor
- Cadastro em 3 passos: seus dados, confirme o e-mail, conta ativa. Senha de no mínimo 10 caracteres, com medidor; recusa as mais comuns e as que repetem nome ou e-mail. Uma nota “Seus dados” diz, no próprio formulário, o que acontece com e-mail e senha.
- O cadastro responde do mesmo jeito para e-mail novo ou já cadastrado. Numa rede de organização política, saber quem tem conta é informação sensível.
- Conta: cartão “Seu acesso” com os 3 níveis; pedido de verificação que entra numa fila da administração, sem enviar documento (o método ainda será definido); trocar a senha (pede a atual e tira a conta dos outros aparelhos); sair de todos os aparelhos; baixar meus dados; apagar minha conta (pede a senha e a palavra APAGAR; apaga tudo do servidor na hora).
- Servidor: as notícias saem por uma função que entrega na medida do nível (visitante 30 e 8 vídeos; conta com e-mail até 100 novas por hora, com memória de 7 dias; verificada e administração, o conjunto completo). Decisão da Amanda: só a arte sai do ambiente online por enquanto; as notícias continuam abertas, inclusive à leitura direta do banco. As artes fecharam também no servidor (só a administração lê). Há limite de chamadas por conta e por endereço de rede, que é guardado embaralhado e trocado a cada dia.
- Servidor: limite de publicações por conta (5 por hora e 20 por dia; verificada, 20 e 100; decisão da Amanda), e aceite do cadastro registrado com versão e data. Tirar o papel (admin) da leitura pública de perfis fica como próximo passo.
- A página “Privacidade e seus dados” fica em rascunho até a Amanda aprovar; o cadastro mantém a frase de aceite de antes.
- Ficam na interface: o ritmo de 30 por aba e a cota de vídeos tocados (o vídeo é do YouTube). Segundo fator, desafio contra robôs e método de verificação com documento são próximos passos (painel › Segurança).

## 10/11 · Localização automática e lugares de interesse
- A pessoa pode permitir que arede.online descubra a cidade dela sozinha. A permissão é pedida só depois de uma folha que explica o que acontece com a posição; negar não muda nada.
- A cidade é descoberta no próprio aparelho, com a lista pública dos 5.571 municípios do Brasil embutida na página (dados do IBGE reunidos em kelvins/municipios-brasileiros, licença MIT): a posição exata não sai do aparelho. Quando a lista não resolve (fora do Brasil), a posição arredondada, cerca de 1 km, vai à função “local” do servidor, que consulta o OpenStreetMap e não guarda nada. Decisão da Amanda: ter os dois caminhos, um suprindo o outro.
- Fica guardada só a cidade (“Cidade, UF”), e só no aparelho. Com a permissão dada, ela se atualiza sozinha ao abrir o site, no máximo a cada 6 horas. Escrever a cidade à mão desliga a atualização.
- Lugares de interesse: pelo que a pessoa abre (1 ponto), curte (2), salva, compartilha e segue (3), o site percebe de quais cidades e estados ela quer saber mais e sobe um pouco as notícias de lá. Cada ponto perde metade do valor a cada 30 dias; um lugar entra na lista com 4 pontos. Começa ligado junto com o algoritmo (decisão da Amanda), fica só no aparelho, e a pessoa vê a lista, tira qualquer lugar, apaga tudo ou desliga, em Origem das notícias › Ordem do feed. No cartão, o lugar ganha a marca “do seu interesse”.

## 10/11 · Prévia dos vídeos sem clique
- Quando a capa de um vídeo do YouTube fica na tela por um instante, ele toca sozinho por cerca de 5 segundos, sem som, e a capa volta. Uma prévia por vez, uma vez por vídeo a cada visita. Tocar no cartão abre o vídeo normalmente, com som.
- A capa só dá lugar à prévia quando o player avisa que o vídeo começou; se o canal não deixa embutir, a capa fica.
- A prévia não conta na cota de vídeos (8 para visitante; 15 a cada 12 horas para conta com e-mail): a cota vale para quem toca em Assistir.
- Respeita “Reproduzir vídeos automaticamente” (Configurações), o pedido de menos movimento do aparelho e a economia de dados.
- Privacidade: antes, o player do YouTube só era carregado no toque. Com a prévia, ele é carregado sem clique (ainda no endereço sem cookies de rastreio); quem desliga a reprodução automática volta ao comportamento anterior.

## 10/11 · O movimento da marca também no celular
- Antes, no toque (celular), a marca aparecia sempre completa e parada, “arede.online”; o ponto só se movia com mouse. Agora o repouso é “a.rede” em qualquer aparelho, e no toque o ponto corre sozinho: a marca se completa (“arede.online”) por uns 2,5 segundos e volta. Acontece ao abrir o site, ao tocar na marca (que também abre “Sobre arede.online”) e ao voltar ao topo da página.
- Com mouse, nada muda: continua ao passar o mouse. Quem pede menos movimento no aparelho vê a marca completa, parada.

## 10/11 · Pé do cartão com menos negrito
- O pé do cartão perdeu peso: o lugar e o nome da fonte ficam em peso médio; as etiquetas de tema (com ou sem coração) e a data, em peso normal. A cor continua fazendo a distinção.

## 10/11 · Descrições de uma linha em Configurações e na Conta
- Em Configurações e nas linhas de segurança e dados da Conta, a descrição de cada item cabe em uma linha só, do celular pequeno (320 px) ao computador. Os textos foram encurtados para caber inteiros; o corte com reticências existe só como rede de segurança.


## 10/11 · Conectar uma rede ao perfil: o link, e a prévia como escolha
- Conectar uma conta de outra rede (Letterboxd, Substack, Medium, Pinterest) passa a mostrar, no perfil, o link dessa conta. A prévia das publicações virou uma escolha à parte da pessoa: “Só o link”, “Link e prévia das publicações” ou “Link, prévia e feed”.
- A prévia só existe se o perfil da pessoa lá for público: arede.online lê só o que é público, sem pedir senha. Se não houver nada público, a conexão com prévia é recusada com a orientação de deixar o perfil público ou conectar só o link; quem liga a prévia depois passa pela mesma checagem.
- “Só o link” conecta mesmo sem nada público para ler. Em “Como outras pessoas veem”, os links aparecem junto dos interesses, e a lista “Aparece” diz se é só o link ou o link e a prévia.
- No servidor, o destino das contas ligadas passou a aceitar “link” (só o link no perfil), além de “perfil”, “perfil_feed” e “feed”.

## 10/11 · Forma de trabalho: dois tipos de mudança
- Ajustes visuais e de texto (negrito, descrições, logo, espaçamentos) ficam no HTML (prévia no Claude e cópia no Mac), se acumulam e vão à produção quando a Amanda pedir.
- Mudanças que mexem no servidor (banco, funções, acesso, cadastro, conexões) vão inteiras: página e servidor juntos, publicadas no fim do pedido. Só no HTML elas ficariam pela metade e não dariam para testar de verdade.
- O Claude diz de que tipo é cada pedido; na dúvida, pergunta para decidirem juntos. Em mudança grande ou sensível, avisa antes de publicar.

## 10/11 · Para entender, conversa, usuário colaborador e sinais para o selo
- “Para entender” (nome escolhido pela Amanda): um bloco no detalhe da notícia que explica algo ligado ao conteúdo, com a fonte oficial. Exemplo de origem: notícia de violência em que as pessoas culpam o presidente, quando as polícias Militar e Civil respondem ao governador.
- O bloco não existe sempre (decisão da Amanda): nem todo assunto gera polêmica, e com confiança baixa ele não aparece. Regra: a nota nasce sempre de uma base de conhecimento aprovada pela administração, cada nota com fonte oficial. Com a chave de IA configurada, a IA lê a notícia, as notas aprovadas e os comentários mais úteis, decide se a nota cabe e escreve 2 ou 3 frases; abaixo de 85 de confiança, nada aparece. Sem a chave, a própria nota aprovada aparece quando o assunto e o sinal de polêmica batem. A fonte mostrada vem da base, nunca da IA, e o bloco diz quando foi escrito por IA.
- A base começa com 8 rascunhos de “quem responde pelo quê” (segurança pública, saúde, educação, transporte, leis, prisão, eleições, impostos). Nada aparece ao público antes de a Amanda aprovar, na curadoria.
- Onde prestar atenção (pedido da Amanda): muita conversa numa notícia, ou um comentário marcado como útil por muita gente, indicam onde a rede deve olhar. Com 5 comentários ou um comentário com 3 úteis, a notícia é reavaliada para ganhar um Para entender, e aparece na lista de atenção da curadoria.
- Conversa: comentários nas notícias e nas publicações. Só quem tem conta comenta; todo mundo lê. O comentário mostra o nome do perfil, com aviso só no primeiro uso. Limite de 10 por hora e 40 por dia. A pessoa pode dizer se acrescenta contexto, confirma ou contesta; confirmar e contestar pedem o endereço da fonte. Denúncia não tira do ar antes da decisão da curadoria.
- Usuário colaborador (nome escolhido pela Amanda): destaque para quem contribui de forma construtiva. Os critérios indicam, a Amanda confirma: conta com 14 dias, 5 comentários, 10 marcações de útil vindas de 5 pessoas, 2 comentários com fonte e nenhum removido, em 90 dias. Comentários de colaborador, ou com 3 úteis, sobem como “Em destaque”.
- Sinais para o selo: comentário que confirma ou contesta com fonte, vindo de colaborador ou com 3 úteis, vira um sinal numa fila da curadoria. A nota da notícia só muda quando o sinal é aceito (até 10 pontos por sinal, 30 no total).
- Os números (5 comentários, 3 úteis, 85 de confiança, critérios do colaborador, limites) são pontos de partida escolhidos pelo Claude, ajustáveis.

## 10/11 · Região com origem visível e relações com o algoritmo no cartão
- A Amanda via “perto de você” em notícias de São Paulo sem estar lá. Causa: a localização nunca tinha sido ativada no navegador dela; o site usava a cidade cadastrada no perfil como região, sem dizer isso.
- O cartão diz agora a relação exata: “na sua cidade”, “no seu estado” ou “do seu interesse” (só em notícias de cidade ou estado). Antes dos temas aparece a relação mais forte, como “Você segue”.
- “Por que apareceu” lista até 3 relações, da mais forte para a mais fraca, diz de onde vem a região (sua localização, escolhida por você ou cidade do perfil) e tem o botão Ajustar.
- A região ficou fácil de achar: Configurações › Seu feed › Sua região, que abre a folha com “Usar minha localização”.

## 10/11 · Correção: cartões de chamado centralizados e estreitos
- O cabeçalho dos comentários (criado às 17:59) usava a classe `.ch`, o mesmo nome do cartão de chamado. O estilo dos comentários passou a valer nos chamados: conteúdo centralizado e o recorte colorido (quanto falta, barra e Quero ajudar) estreito no meio do cartão. O cabeçalho dos comentários passou a se chamar `.comh`; o recorte voltou a ocupar a largura toda do cartão, no celular e no computador.
- Cuidado para as próximas: nomes de classe novos são conferidos contra os existentes antes de entrar.

## 10/11 · Histórico, selo ajustado pela comunidade e prioridade no feed
- O selo continua baseado nas fontes verificadas e passa a ser incrementado por comentários com fonte. Decisão da Amanda: automático com limite. Contas com histórico 65 ou mais ajustam a nota sozinhas (de 2 a 5 pontos, pela força do histórico), até 10 pontos automáticos por notícia e uma vez por pessoa em cada notícia; o que passa disso vai para a fila da curadoria, onde tudo pode ser desfeito. O cartão avisa quando a nota teve contribuição da comunidade.
- Histórico (reputação) de 0 a 100, calculado no servidor, nos últimos 90 dias: começa em 40; somam tempo de conta (até 15), pessoas diferentes que marcaram comentários como úteis (até 25, o que mais pesa), comentários com fonte (até 10), destaque de colaborador (10) e verificação (5); cada comentário removido tira 15. Decisão da Amanda: a pessoa vê o próprio número, na conta, com o que ajuda a subir. Ninguém mais vê; o feed recebe só a faixa.
- Prioridade no feed, decisão da Amanda: em todo lugar, inclusive com o algoritmo desligado. Faixas: 80+ sobe 12 horas na ordem, 65+ sobe 6 horas, abaixo de 30 desce 6 horas. O “Como funciona” ganhou a regra “Bom histórico conta”, porque o espaço aberto deixou de ser critério idêntico para todo mundo (a regra é a mesma para todos).
- Os números (40, pesos, 65, 80, 30, horas) são pontos de partida escolhidos pelo Claude.

## 10/11 · Detalhe do cartão mais simples
- Saíram o botão grande “Apagar minha publicação”, logo abaixo da autoria, e a caixa “Publicado direto na rede por…”, que repetia a autoria. Apagar e Denunciar viraram links discretos no fim do bloco de confiança.
- Selo e “Por que apareceu” ficam um embaixo do outro. Na própria publicação não aparece “Por que apareceu”.
- Conversa: o campo de comentário tem uma linha e cresce ao escrever; o tipo (contexto, confirma, contesta) e o botão só aparecem quando a pessoa toca no campo. O tipo do comentário vai na linha do nome, sem pílula separada.
- A conta da própria rede aparece com a marca “a.” em todo lugar (autoria e comentários).

## 10/11 · Sem buracos no feed
- Quando um bloco tinha um anúncio sem foto ao lado, o anúncio ocupava meio espaço e sobrava um quadrado vazio embaixo. Agora o anúncio sozinho ocupa a coluna inteira.
- Conferido em três larguras (celular estreito, celular comum e computador), com e sem algoritmo: nenhum espaço em branco.

## 10/11 · Apagar virou ícone
- “Apagar publicação” saiu do bloco de confiança e virou uma lixeira no canto superior direito do cartão, junto de salvar e fechar. Só aparece para quem publicou e para a administração.
- O primeiro toque deixa a lixeira vermelha e avisa; o segundo apaga. Sem um segundo toque em 6 segundos, volta ao normal.

## 10/11 · Autoria no topo do cartão
- Quem escreveu passa para a primeira linha do cartão aberto, alinhado aos ícones do canto superior direito. Depois vêm o tipo, o título e o texto.
- “Seguir” virou um link discreto ao lado da data, para caber na linha de cima.
- No celular, o ícone de abrir em página própria sai da linha de cima para o nome não ser cortado.

## 10/11 · Cartão aberto no estilo Pinterest
- Referência: cartão aberto do Pinterest. Primeiro vem a imagem ou o vídeo, quando houver. Logo abaixo fica uma linha de ações: curtir com o número, ir para a conversa, compartilhar e “…”. À direita ficam o botão “Salvar” em destaque e o fechar.
- Quem escreveu vem logo abaixo, menor (avatar pequeno, nome, data e “Seguir”). Depois vêm o tipo, o título e o texto.
- “Abrir em página própria” e “Apagar” foram para o “…”, com confirmação antes de apagar.
- Revertido a pedido da Amanda: ela preferiu a versão anterior (autoria na linha de cima, alinhada aos ícones). Voltou a valer a versão das 20:14, que é a que está no site.

## 10/11 · Tipo no topo, autoria como crédito
- Escolha da Amanda: o tipo (NOTÍCIA, VÍDEO…) fica na linha dos ícones, à esquerda. Logo abaixo vem o título e, embaixo dele, a autoria como linha de crédito pequena: avatar, nome, data e “Seguir”.
- Bloco do selo mais compacto: “Por que apareceu” e “Denunciar” dividem a mesma linha, sem a linha vazia que sobrava.

## 10/11 · “Por que apareceu” em tags
- A frase longa (“Apareceu porque você desligou o algoritmo: Saneamento · Belo Horizonte, MG.”) virou tags curtas dos assuntos relacionados: tema, lugar, “Você segue”, “Fora do seu padrão”. O ícone ao lado diz se o algoritmo está ligado (i) ou desligado (bússola).
- A frase completa continua disponível no ícone, para o leitor de tela e ao passar o mouse.

## 10/11 · Selo em cima, autoria junto da fonte
- Sugestão da Amanda: o selo de confiabilidade sobe para logo abaixo do título, junto das tags de “por que apareceu” e do Denunciar. Assim, quem lê vê a confiabilidade antes do texto.
- A autoria (avatar, nome, data, Seguir) desce para logo acima de “Ler a matéria completa”, junto da fonte.
- Revertido a pedido da Amanda: voltou a ordem anterior (tipo no topo, título, autoria logo abaixo do título, texto, fonte e selo no fim). As tags de “por que apareceu” continuam.

## 11/11 · Link da fonte em uma linha
- O botão grande “Ler a matéria completa em oglobo.globo.com” e a nota “Trecho do feed de O Globo, 8 nov.” viraram um link de uma linha: “Ler em oglobo.globo.com ↗”. A fonte e a data já aparecem na autoria, logo abaixo do título.
- Uma nota curta só aparece quando acrescenta algo: texto oficial, resumo da curadoria, ou publicação vinda de uma rede conectada.

## 11/11 · Duas formas de ver o feed: Mosaico e Cartões
- Pedido da Amanda: um botão ao lado do filtro deixa a pessoa escolher como ver o feed principal. **Mosaico** é a forma de sempre (mais cartões por vez, encaixados). **Cartões** é a forma que já existia em “Mais para explorar” (cartões separados).
- Regra de alternância: o feed usa a forma escolhida e “Mais para explorar”, no cartão aberto, usa sempre a outra. Assim há sempre uma mudança visual, com só duas formas no produto.
- Vale para as abas Tudo e Publicações (e Arte, na administração). Vídeos e Documentos têm formato próprio e não mostram o botão.
- A escolha fica guardada no aparelho. Com conta, fica também no perfil e vale em qualquer aparelho.
- Para mapear a preferência, o servidor conta cada troca sem identificar quem trocou: forma nova, forma anterior, celular ou computador, com ou sem conta. O painel mostra o resultado em Servidor e dados reais.
- Cuidado na leitura: quem nunca troca fica no padrão (Mosaico). O sinal útil é quantas pessoas vão para Cartões e não voltam.
- Servidor: coluna `perfis.vista`, tabela `vista_escolhas` (sem leitura pública), função `vista_registra` (com limite de 12 por hora) e o resumo em `painel_resumo`.

## 11/11 · Anuncie aqui (só no HTML, ainda não publicado)
- Pedido da Amanda: a etiqueta “Anúncio” vira a chamada “Anuncie aqui”, que abre um fluxo simples de contratação do espaço. O anunciante define tempo, tamanho e posição no feed, acompanha a prévia e vê o valor mudar na hora.
- Decisões dela: pagamento ao final do fluxo; tabela de preços proposta pelo Claude; negócios e organizações, sem propaganda eleitoral; tudo só no HTML até ela aprovar.
- Fluxo: tela “Anuncie aqui” com prévia fixa no topo (um bloco do feed com o anúncio no tamanho escolhido e a régua de posição), mensagem, cor, 3 tamanhos, 3 posições, tempo de 3 a 90 dias e a conta do valor. “Continuar” abre “Revisar e pagar”, com as regras, Pix ou cartão e o aceite.
- O pagamento ainda não está ligado: o fluxo termina em “Pagamento em preparação”, avisa que nada foi cobrado e guarda o rascunho no aparelho. Nada vai para o servidor.
- Preço proposto: R$ 5,00 por dia × tamanho (1 · 1,8 · 3,2) × posição (1,6 · 1,3 · 1), com desconto de 5%, 10% e 20% para 7, 15 e 30 dias. Os multiplicadores são os da tabela de 10 nov.
- Nos espaços de exemplo, a etiqueta agora diz “Anuncie aqui” (“Anuncie” nos espaços pequenos). Proposta registrada no painel: espaço vendido continua com a marca “Anúncio”.
- Painel: aba nova “Anúncios”, com o cálculo do valor, a ponte com o preço por mil exibições, cenários de receita, comparação de serviços de pagamento (taxas consultadas em 11 nov), o que falta para ligar o pagamento, 13 decisões e os riscos.
- Lição repetida: duas classes novas (.adprev com .mini) bateram em estilos antigos. Conferir nomes antes de criar.

## 11/11 · Calibrar o preço do anúncio no painel
- Pedido da Amanda: um lugar no painel para entender os parâmetros que formam o preço e calibrá-los.
- Painel › Anúncios › “Calibrar o preço”: cada parâmetro tem nome, explicação do efeito e campo com − e +. São dez: preço base por dia; multiplicadores de Vertical e Destaque; multiplicadores de início e meio do feed; descontos de 7, 15 e 30 dias; menor e maior pedido em dias.
- “Pedido de exemplo” mostra a conta aberta (base × tamanho × posição × dias − desconto). A tabela de preços, a leitura por mil exibições, os cenários de receita e o peso da taxa de pagamento mudam na hora.
- Travas: descontos precisam crescer com o tempo; maior pedido não pode ser menor que o menor. Avisos sem travar: Destaque mais barato que Vertical, início mais barato que meio, pedido mínimo abaixo de R$ 10,00.
- Salvar guarda neste computador e vale para todas as contas do painel. O fluxo “Anuncie aqui” do site só passa a usar os valores calibrados quando a tabela de preços existir no servidor (a ponte direta painel → site local foi escrita, mas não foi testada). A tabela de preços no servidor (tabela anuncio_precos, funções anuncio_tabela e painel_precos_salva) está escrita, mas não foi criada: o sistema barrou a mudança em produção. Painel e site já tentam o servidor e passam a usá-lo sozinhos quando existir.

## 11/11 · Anuncie aqui publicado, com a tabela de preços no servidor
- A Amanda autorizou criar a tabela de preços e publicar o fluxo em todos os ambientes. Servidor: tabela anuncio_precos (leitura pública, uma linha), função anuncio_tabela (o site lê) e painel_precos_salva (o painel grava, com a chave do painel e limites conferidos no servidor).
- O fluxo segue terminando em “Pagamento em preparação” até a cobrança ser ligada. Ela escolheu o Mercado Pago, criou a aplicação e guardou o Access Token de teste nos segredos do Supabase (MP_ACCESS_TOKEN).

## 11/11 · Medição de uso e CSAT para o teste de usabilidade (até dom. 15/11)
- Pedido da Amanda: entender como os convidados navegam, onde tocam, o que dá errado e onde há interesse em botões sem fluxo (portas falsas); depois de 45 s, CSAT com nota, 4 atributos e comentário.
- Decisões dela: medir todo mundo que abrir o site e manter no painel a lista de convidados; sem aviso na tela durante este teste, que vai até domingo 15/11/2026; atributos Navegação, Conteúdo, Confiança e Aparência; nota de 1 a 5.
- O que o site registra: telas e tempo em cada uma, até onde rolou, toques pelo nome da ação, tipo do cartão aberto, folhas abertas, avisos mostrados, erros, toques sem resposta, toques repetidos, site da fonte para onde saiu, celular ou computador.
- O que não registra: conta, e-mail, endereço de rede, texto digitado, busca e qual conteúdo foi aberto. Cada visita leva dois códigos aleatórios e, se veio por link pessoal (?c=código), o código do convite.
- Cuidados do Claude: só roda em arede.online; para sozinha em 15/11 às 23:59 (no site e no servidor, pela configuração uso_fim); respeita o pedido de não rastrear do navegador; marca e deixa de fora o uso da administração; registros saem do servidor em 90 dias.
- CSAT: uma vez por visita, depois de 45 s visíveis, quando não há folha aberta nem campo em uso; no máximo duas vezes por pessoa. A nota fica guardada mesmo se a pessoa fechar sem enviar.
- Painel: aba “Teste de uso”, com convidados (nome só no computador dela; link pessoal com código), fora da lista, como navegam, onde tocam, portas falsas (classificação do Claude a partir da auditoria de fluxos), o que dá errado e CSAT.
- Ressalva registrada: com link pessoal, a navegação e a nota ficam ligadas a cada convidado, sem aviso na tela. Recomendação: dizer isso na mensagem do convite.
- Servidor: tabelas uso_eventos e uso_csat (sem leitura pública), funções uso_registra, csat_envia e painel_uso, limpeza diária uso-limpa.

## 11/11 · Cobrança de anúncio pelo Mercado Pago, em modo de teste
- A Amanda já tinha conta no Mercado Pago; criou a aplicação (Checkout Pro) e guardou o Access Token de teste nos segredos do Supabase. O Claude não viu a chave.
- Como funciona: o site envia a peça e as escolhas; a função anuncio-cobra confere a sessão, cria o pedido com o valor calculado no servidor (tabela de preços) e abre a cobrança no Mercado Pago; a pessoa paga na página do Mercado Pago; a função anuncio-aviso recebe o aviso, consulta o próprio Mercado Pago e só então marca o pedido como pago, se o valor aprovado cobre o do pedido.
- Modo “teste” (configuração anuncio_pagamento): só a conta da administração consegue abrir o pagamento; para o resto, o fluxo continua em “Pagamento em preparação”. Pedido real só aceita pagamento real.
- Site: “Seus pedidos” no fim de Anuncie aqui, com a situação de cada um; na volta do Mercado Pago, a tela confere e mostra “Pagamento recebido”, “em análise” ou “não concluído”.
- Painel › Anúncios › Pedidos: lista com a peça, o valor, a conta e a situação; aprovar ou recusar pedido pago.
- Ainda falta: compra de teste feita por ela; devolução automática ao recusar; peça aprovada aparecer no feed no tamanho, posição e período comprados; contagem de exibições; chave de produção, CPF ou CNPJ e nota fiscal.
- Testado no ar com a conta dela: a cobrança foi criada no Mercado Pago (pedido de teste de R$ 15,00, que expira sozinho em 2 dias). A compra de teste em si não foi feita pelo Claude.

## 11/11 · Transmissões oficiais e canais abertos (resposta, sem construção)
- Custo quase zero se for pelo player oficial de cada canal (YouTube): o vídeo não passa pela estrutura da rede. Retransmitir sinal por conta própria custa caro e esbarra em direito da emissora.
- Canal aberto não é livre para retransmitir: a lei de direitos autorais dá à emissora o direito de autorizar ou proibir. Canais públicos são mais fáceis; o termo de uso da TV Senado proíbe uso comercial e anúncio junto do conteúdo, então a tela “Ao vivo” ficaria sem anúncio.

## 11 nov 2026 · Ao vivo: canais oficiais na aba Vídeos (só no HTML; servidor aguardando autorização)

**Pedido.** Transmissões de governo, ONU e organismos oficiais, sem custo e dentro da lei, na aba Vídeos, sem blocos de anúncio ao redor.

**O que foi feito na página.** Faixa "Ao vivo · Canais oficiais" no topo da aba Vídeos. Tocar num canal abre o player do próprio canal (YouTube, sem cookies de rastreio). Nada é carregado do YouTube antes do toque. Uma transmissão por vez; ela para ao sair da aba, rolar para longe ou tocar outro vídeo. Fica fora da cota de vídeos. A medição de uso registra só o toque, nunca qual canal.

**Regra de anúncios.** Nenhum anúncio na aba Vídeos, com ou sem transmissão aberta. A regra está no código (`comAnuncios` devolve a lista sem anúncios quando a aba é Vídeos) e foi conferida no teste automático.

**Primeira lista (7).** TV Senado, Câmara dos Deputados, STF, Justiça Eleitoral (TSE), CanalGov, TV Brasil, Nações Unidas. Todos permitem incorporar o player (conferido no site real, 11/11).

**Termos conferidos.** Senado: reprodução livre com crédito; TV Senado veda uso comercial, anúncios na exibição e propaganda política, ideológica ou comercial. Câmara: transmissões legislativas em CC BY 4.0, marca d'água mantida. EBC (CanalGov, TV Brasil): reprodução gratuita com a fonte citada. ONU: a UN Web TV oferece link e código de incorporação de cada evento. STF e TSE: não achei página de termos; canais oficiais com incorporação liberada.

**Descoberta técnica.** O endereço genérico "ao vivo do canal" do YouTube só funciona para canal com uma transmissão por vez (ONU). Senado, Câmara, CanalGov, STF, TSE e TV Brasil precisam do código do vídeo que está no ar. Solução sem custo: uma função no servidor confere a página pública "ao vivo" de cada canal a cada 10 minutos e guarda o código (arquivos em `aovivo/`). Ponto frágil: se o YouTube mudar a página, a conferência para e o canal volta a abrir no canal oficial; alternativa mais firme é a chave gratuita da API do YouTube.

**Estado.** Página pronta nos ambientes de HTML (v1 registrada · 11/11 13:42). Servidor NÃO instalado: a instalação foi barrada por ser mudança em produção sem autorização explícita. Enquanto isso, só Nações Unidas toca dentro da página; os outros mostram o link para o canal oficial.

**Lição repetida.** Choque de nome de classe outra vez (`.aovivo` na faixa e no ponto de estado). Conferir nomes antes de criar.

**Pendências.** Autorização para instalar o servidor e publicar. E-mail ao Senado (seacer@senado.leg.br) pedindo confirmação por escrito. Emissoras comerciais e TV Cultura ficam de fora sem autorização.

## 11 nov 2026 · Publicado: Ao vivo com servidor, e troca de visualização com um toque
- **Autorização.** "publique essa ultima versão em todos os ambientes". Servidor instalado: tabela `aovivo_canais`, funções `aovivo_lista`, `aovivo_confere_inicio`, `aovivo_grava`, função de servidor `aovivo` (v3) e agendamento `aovivo-confere` a cada 10 minutos.
- **Conferência.** A página de transmissão ao vivo vem do YouTube sem os dados do player quando o pedido sai do servidor; o código do vídeo no ar foi lido dos dados da própria página. Primeira rodada: 7 de 7 canais conferidos (6 ao vivo, Justiça Eleitoral agendada). Ponto frágil mantido: se o YouTube mudar a página, o canal volta a mostrar o link "Ver no canal"; alternativa firme é a chave gratuita da API do YouTube.
- **Visualização.** A tela "Visualização" saiu. Um toque no ícone ao lado do filtro alterna Mosaico e Cartões; o ícone mostra a forma atual. A escolha continua guardada no aparelho e no perfil, e as trocas continuam contadas.

## 11 nov 2026 · Conta conectada visível na navegação (só no HTML)
- **Pedido.** "sinto falta de uma diferenciação que diga se estou logada ou não nessa visão global".
- **Feito.** No item Perfil da navegação: com conta, as iniciais num círculo e o primeiro nome (no computador); sem conta, o ícone de pessoa e "Entrar". Atualiza sozinho ao entrar e ao sair. Leitores de tela ouvem "Conta conectada" ou "Entrar ou criar conta".
- **Estado.** Publicado em todos os ambientes às 15:27, a pedido ("coloque essa versão em todos os ambientes").
- **Correção logo depois de publicar.** Na conta "a rede.online" o rótulo saía só "a" (primeira palavra do nome). Regra nova: o nome inteiro quando cabe (até 13 letras); senão o primeiro nome; com menos de 2 letras, "Perfil". Visto no site no ar com a conta dela, o que o teste com conta simulada não pegou.

## 11 nov 2026 · Comunidades, primeira etapa (só no HTML)
**Pedido.** Evoluir Organizações (mais oficial) e Comunidades (mais amplo): grupos criados por contas cadastradas em torno de qualquer tema, com mural e discussões, ambiente também descontraído (memes, debate), dentro das regras gerais e das regras de cada comunidade. Reputação ruim não cria e pode perder a propriedade. Referência: comunidades do Orkut e grupos do Facebook.

**Decisões da Amanda (15:40).**
1. Tudo vira comunidade: organização é uma comunidade com selo "oficial" (cadastro continua pela curadoria).
2. Quem cria escolhe a entrada: aberta ou com aprovação.
3. Dona com má reputação perde a propriedade e as integrantes votam em quem assume; a curadoria cuida enquanto isso.
4. O que se publica na comunidade aparece nela e no feed de quem participa.

**Proposta do Claude, a confirmar.** "Má reputação" = histórico abaixo de 30 (a faixa "Baixo" que já existe). Texto das 5 regras gerais das comunidades.

**Feito nesta etapa (neste aparelho, sem servidor).** A área passa a se chamar Comunidades (navegação e título). Botão Criar: pede conta, confere a reputação no servidor e abre o cadastro (nome, tema livre, sobre, entrada, regras próprias, aceite das regras gerais). Página da comunidade com Mural (publicar e apagar), Discussões (abrir e responder), Regras e Integrantes. Selo "oficial" pronto para organizações reais; as de exemplo seguem com "exemplo". O cadastro de organização oficial continua no fim da lista.

**Não existe ainda (depende do servidor).** Outras pessoas verem e entrarem; aprovação de entrada; moderadoras; publicações no feed de quem participa; imagens e memes no mural; denúncia e moderação; perda de propriedade e votação. Por isso esta etapa NÃO deve ir para o site no ar: quem criasse uma comunidade a veria só no próprio aparelho.

## 11 nov 2026 · Cartões de comunidade no início da página (só no HTML)
- **Pedido.** Cartões mais interessantes, consistentes com as outras páginas, e logo no início de Comunidades.
- **Feito.** As listas "Onde você participa" e "Outras comunidades" subiram para o topo, antes de eventos, chamados e votações. Cada comunidade virou um cartão com capa desenhada (a mesma arte do topo da página dela), marca sobre a capa, nome, lugar ou tema, uma linha sobre ela, número de membros e a situação de quem olha. A etiqueta (exemplo, oficial, comunidade) fica no canto da capa. "Outras comunidades" mostra 4 e um botão "Ver as N comunidades", para os eventos não ficarem longe demais.
- **Estado.** Ajuste visual sobre a etapa de Comunidades, que segue fora do site no ar.

## 11 nov 2026 · "Para participar": eventos, chamados, votações e consultas num bloco só (só no HTML)
- **Pergunta dela.** Qual a diferença real entre chamado, votação e consulta; podem ser a mesma coisa ou um bloco só com estilos de cartão filtráveis?
- **Resposta.** Chamado pede uma ação e mede adesão. Votação decide, tem quem vota e quórum. Consulta colhe opinião e não obriga. Votação e consulta têm a mesma mecânica; chamado é outra. Recomendação: um bloco só, com filtro por tipo, sem misturar os rótulos de votação e consulta.
- **Pedido.** "pode montar tudo junto, vamos ver. diferencie os cards mas garanta consistência".
- **Feito.** Na página Comunidades, as três seções (Eventos desta semana, Chamados abertos, Votações e consultas) viraram o bloco "Para participar", com filtros Todos, Eventos, Chamados, Votações e Consultas e a contagem de cada um. Todo cartão tem o mesmo esqueleto: tipo e prazo, título, quem abriu, medida e ação. Muda por tipo a cor (azul, laranja, verde, roxo), a medida (quantos vão; adesão com meta; votos para o quórum; respostas) e a ação (Quero ir; Participar ou Assinar; Votar; Responder). Ordem: o que vence ou acontece primeiro. "Todos" mostra 6 e um botão para ver o resto. O cartão abre a página do item.
- **Ficou de fora.** O carrossel de eventos com a separação "Depois" saiu desta página. No feed e nas páginas de cada item nada mudou; lá os nomes seguem "Enquete rápida" e "Votação formal".

## 11 nov 2026 · Comunidades: uma linha por grupo e "Ver todos" com filtros (só no HTML)
- **Pedido.** "uma linha pra cada grupo e acesso facilitado para 'ver todos' de cada bloco/tipo; os destaques são mais relacionados com o usuário e no ver todos pode explorar todos os tipos com mais filtros e visualizações".
- **Visão geral.** Três linhas: Onde você participa; Comunidades para você; Para participar. Cada uma com "Ver todas/todos (N)" no título. No celular a linha desliza de lado; no computador mostra só o que cabe (3 ou 4 cartões). Em Para participar, um atalho por tipo (Eventos, Chamados, Votações, Consultas) abre o "ver todos" já filtrado.
- **Destaques ligados à pessoa.** Comunidades para você: primeiro as de mesmo tema e mesma cidade das comunidades em que ela participa, depois as maiores. Para participar: primeiro o que vem das comunidades dela, depois o que vence antes. Regra simples, sem perfil oculto: usa só onde a pessoa escolheu participar.
- **Ver todas as comunidades** (`#comunidades-todas`): busca por nome, tema ou cidade; filtros Todas, Onde participo, Oficiais, Criadas por pessoas; tema; ordem (mais membros, A a Z); cartões ou lista.
- **Ver tudo para participar** (`#participar`): filtro por tipo com contagem; "Das minhas comunidades"; tema; cartões ou lista.
- **Saiu.** O botão "Ver as N comunidades" e o limite de 6 no bloco único da versão anterior.

## 11 nov 2026 · Notícias com imagem na vista Cartões (só no HTML)
- **Pedido.** "sempre equilibre melhor notícias com imagem porque tem muitos cards só com texto".
- **Causa.** Não faltava imagem: 85% das notícias publicadas têm foto (11.741 de 14.018). A vista Cartões simplesmente não mostrava a foto das notícias; só o Mosaico mostrava. Por isso, em Cartões, quase toda notícia saía só com texto.
- **Feito.** O cartão solto de notícia e de publicação agora traz a foto no topo (16:9, com o crédito da fonte) e, com foto, o texto fica em até 3 linhas. Se a imagem falhar, o cartão volta a ser só texto, sem buraco. Vale também em "Mais para explorar", murais e busca, que usam o mesmo cartão.
- **Equilíbrio.** A regra de alternar foto e texto já existia na ordem padrão; conferida com 85% de itens com foto: nunca dois cartões só de texto seguidos enquanto houver foto. Votações, consultas, chamados e eventos continuam sem foto (são cartões de ação).
- **Limite do teste.** No ambiente de teste as fotos externas não carregam; a conferência usou imagem local. Falta ver com as notícias reais.

## 11 nov 2026 · Linha de cartões da aba Documentos desalinhada (só no HTML)
- **Aviso dela.** "parece desalinhado", com a captura da faixa "Documentação cidadã": depois de deslizar, os cartões paravam fora da margem do título e apareciam cortados à esquerda.
- **Causa.** A linha sangra até a borda para deslizar, mas o encaixe dos cartões ignorava essa folga.
- **Feito.** O encaixe passou a respeitar a margem: o cartão para alinhado ao título em qualquer posição (medido em 390, 820 e 1280 de largura: 0 px de diferença). No computador a linha não sangra mais para fora da margem.

## 11 nov 2026 · Filtros de "Para participar" trocam a linha ali mesmo (só no HTML)
- **Correção dela.** "clicar em filtros não abre ver todos, apenas muda a seção". Eu tinha feito os atalhos por tipo abrirem a tela "Ver todos".
- **Feito.** Na visão geral de Comunidades, os filtros (Todos, Eventos, Chamados, Votações, Consultas) trocam os cartões da linha sem sair da página. Só o link do título abre a exploração, já no tipo escolhido, e o texto acompanha: "Ver todos (13)", "Ver votações (4)".
- **Regra.** Filtro muda a seção onde está; "Ver todos" é o único caminho para a tela completa.

## 11 nov 2026 · "Já participei" e publicação de tudo (16:43)
- **Pedido.** "deixe de fácil acesso uma forma que a pessoa pode ver todos que já engajou e depois publique essa última versão em todos os ambientes".
- **Feito.** Em Para participar, o filtro "Já participei" (logo depois de Todos, com a contagem) mostra o que a pessoa confirmou, assinou, votou, apoiou ou respondeu. O cartão desses itens troca o botão por "Você vai", "Você participa", "Você votou", "Você apoiou" ou "Você respondeu". Na tela Ver todos, o mesmo filtro. Votos, apoios e respostas passaram a ficar guardados no aparelho (antes sumiam ao recarregar; presenças e chamados já ficavam).
- **Publicado em todos os ambientes** por decisão dela, com o aviso dado duas vezes: Comunidades ainda não tem servidor, então comunidade criada, mural e discussões ficam só no aparelho de quem criou (a página da comunidade diz isso). Foram junto: conta na navegação, cartões e linhas de Comunidades, Para participar, foto nas notícias da vista Cartões, linha de Documentos alinhada.

## 11 nov 2026 · Análise de maturidade: refeita dentro de "Análise do produto" (17:10)
- **Pedido.** Análise minuciosa da maturidade, refletida no painel, para avançar juntas nos próximos passos.
- **Dois erros meus, corrigidos.**
  1. Criei uma aba separada ("Maturidade"), com outra régua, em vez de evoluir a análise que já existia. Ela disse: "tudo o que estava lá é importante e era pra evoluir lá e a partir do que já está lá e considerando o que criamos de novo". A aba separada saiu.
  2. Desde as 13:42 eu vinha gravando na pasta do Mac a cópia pública do site, que não leva o painel. Por isso o painel sumiu de dentro do site dela ("onde está o painel de controle?"). O `index.html` do Mac voltou a ser a cópia completa, com o painel em `#painel`.
- **Regra para não repetir.** Mac recebe `a-rede-prototipo/index.html` (completa, com painel). Repositório e artefato recebem `a-rede-publico/index.html` (sem painel). Análise nova entra na aba e na régua que já existem; nomes das áreas não mudam, porque as decisões dela ficam presas a eles.
- **O que mudou em Painel › Análise do produto.** Bloco novo no começo, "Retrato de 11 de novembro" (frase, números do servidor). Completude: as 16 áreas antigas com o mesmo degrau e o texto em dia; 5 áreas novas (Comentários e reputação 75, Vídeos e Ao vivo 75, Anúncios e pagamento 50, Medição e teste de uso 75, Privacidade e termos 25); média de 55% nas 21 áreas. Gaps: "Conversa nos conteúdos" atendido em parte; 4 novos (validação com gente de fora, Comunidades no servidor, cópia de segurança, anúncio comprado no feed). Etapas: a de agora descreve a v1 registrada. Riscos: 5 novos. No fim, "Próximos passos propostos" (15, com marcação) e "Decisões que esperam você" (8).
- **Achado central.** Cresceu na construção, não foi validado por gente de fora: 1 conta, 1 publicação, 1 comentário, 0 convidados no teste que termina em 15/11.
- **Limite.** Números das 16:50, fixos. Auditoria de fluxos ainda é a de 9/11. Não medido: celular simples, leitor de tela, muita gente ao mesmo tempo.

## 11 nov 2026 · Decisões do painel que não chegaram à fila (17:20)
- **O que houve.** Ela tomou decisões (Aceitar, Refinar, Recusar) no painel aberto pela prévia de arquivo dentro do Claude e pediu "vamos rodar o que entrou pra fila". No servidor a fila estava vazia e os registros de acesso não mostram nenhum envio: a prévia do Claude não tem ligação com o servidor, então as decisões ficaram só nela.
- **Feito.** O painel agora avisa quando uma decisão não sai do navegador: caixa fixa com a contagem, o texto das decisões pronto para copiar e colar na conversa, e a orientação de abrir o painel pelo arquivo do Mac no Chrome, onde elas seguem sozinhas.
- **Pendente.** Recuperar as decisões que ela já tomou: abrir a versão nova na mesma prévia (se a memória do navegador for a mesma, a caixa aparece com tudo) ou mandar a lista da aba Decisões.

## 11 nov 2026 · 15 decisões do painel recebidas e postas na fila (17:35)
- **Como chegaram.** Ela colou o texto da caixa nova do painel (a que avisa quando a decisão não sai do navegador). Registrei as 15 na fila do servidor (`painel_decisoes`): 14 "na fila", 1 "registrada" (a recusada).
- **Selo.** Aceitos: Selo do conteúdo original, Em contestação, Corrigido pela fonte, Dado oficial, Checado por agência, Conteúdo antigo, Imagem gerada ou alterada, Autorizado pelo artista. Recusado: Original na rede · indexado. Refinar: Interesse declarado, que deve mostrar também o conglomerado por trás da fonte (exemplo dela: a XP é dona da InfoMoney).
- **Conteúdos reais.** Aceitos: trocar as 9 organizações fictícias por reais; completar a cobertura cruzada; equilibrar as linhas editoriais; conteúdos internacionais. Refinar: coletor em tempo real ("quero fazer, mas tem custo?").
- **Custo, medido.** Banco em 40 MB; notícias ocupam 25 MB (15.065 notícias, 5.008 nas últimas 24 h, cerca de 8 MB por dia). O plano gratuito dá 500 MB de banco e 500 mil chamadas de função por mês. Nesse ritmo o banco chega ao limite em cerca de 8 semanas. Ler fontes cabe no gratuito; resumo por IA é o que custa por uso.
- **Nada construído ainda.** Proposta de primeira leva: os três selos que já têm o dado na base (Conteúdo antigo, Dado oficial, Checado por agência). Espera a confirmação dela e o prazo de "antigo".

## 11 nov 2026 · Primeira leva das decisões: três marcas do selo (17:39, só no HTML)
- **Ordem dela.** "vamos seguir na ordem proposta começando por 1"; e a regra de custo: resumo por IA não se faz agora; só o que não gera custo nem estoura o limite do servidor em 30 dias.
- **Conta dos 30 dias.** Banco em 40 MB, crescendo cerca de 8 MB por dia: em 30 dias fica perto de 290 MB, abaixo dos 500 MB gratuitos. As três marcas não gravam nada no servidor.
- **Feito.** Ao lado do selo, no cartão aberto: "Conteúdo antigo" (publicado há mais de 183 dias, com a data; o prazo de 6 meses foi sugestão do Claude e ela não contestou), "Dado oficial" (fonte dos tipos Governo e diário oficial, Dados públicos ou Justiça e eleições) e "Checado por agência" (a fonte é agência de checagem, ou uma das 35 agências da base cobriu a mesma notícia, com link).
- **Limites.** Não há veredito escrito da checagem, porque isso pediria leitura automática do texto. As marcas aparecem só no cartão aberto, ainda não no cartão fechado. Testado com dado simulado; falta ver com notícia real.
- **Fila.** As três decisões estão "em execução" no servidor, à espera de publicar.

## 11 nov 2026 · Arquitetura do bloco do selo (17:45, só no HTML)
- **Pedido.** "melhore arquitetura considerando todos os elementos que ficaram juntos", com captura: a pílula "Checagem de agência" solta em cima, o selo com "Geral · em inglês" na linha da nota, e as etiquetas "Geral · Internacional · Fora do seu padrão" logo abaixo, repetindo o tema.
- **Feito.** Um bloco só para o selo. Linha 1: ícone, confiança, nota e "Detalhes". Linha 2: as marcas, em texto pequeno com ícone, alinhadas ao texto do selo (conteúdo antigo, dado oficial, checagem, idioma, reforço internacional, linha editorial, fonte individual, ajuste da comunidade). As pílulas soltas saíram. O tema saiu da linha do selo, porque já está nas etiquetas de "por que apareceu". Ao abrir "Detalhes", cada marca ganha uma frase de explicação (a checagem com link), antes da régua de itens do selo.
- **Ordem do rodapé do cartão aberto.** Selo e marcas; depois etiquetas de "por que apareceu" e Denunciar.

## 11 nov 2026 · Selo: alinhamento e destaque da checagem (17:52, só no HTML)
- **Pedido.** "ainda pode melhorar, melhore o alinhamento e achei que checagem de agência pode ter um pouco mais de destaque" (captura com três bordas esquerdas diferentes: ícones, etiquetas e texto do selo).
- **Feito.** Uma grade só no rodapé do cartão aberto: coluna de ícone de 22 px e coluna de texto. O ícone do selo e o da bússola ficam centrados na mesma linha vertical; confiança, nota, marcas e etiquetas começam no mesmo ponto (medido: 0 px de diferença em 390 e 1280 de largura). "Detalhes" alinhado à linha do título. Espaço menor entre a nota e as marcas.
- **Checagem.** Vem sempre primeiro, em pílula verde suave com o nome em negrito; o ícone dela fica alinhado ao das outras marcas e o fundo avança só para a margem. Dado oficial ficou como estava (ela pediu destaque só para a checagem).

## 11 nov 2026 · Guarda de notícias por 15 dias e "antigo" em 3 meses (18:05)
- **Decisão dela.** "pode instalar a rotina de 15 dias e considere que as notícias com interação de usuários cadastrados devem entrar em uma regra separada pelos próximos 30 dias, para que a gente garanta histórico e possibilidade de certa evolução e aprendizado na composição do algoritmo com os primeiros usuários". E: "antigo é o que ressurge mas tem mais de 3 meses desde a publicação".
- **Servidor (instalado).** Rotina diária `noticias-guarda-15-dias` (03:20 UTC, 00:20 em Brasília) chamando `privado.noticias_limpa()`. Notícia sai 15 dias depois de coletada. Interação de conta cadastrada (visualização registrada, comentário, "útil", sugestão de ajuste do selo) fica gravada em `privado.noticia_engajada` e segura a notícia até 30 dias depois da última interação. Notícia com comentário, sugestão de ajuste ou "Para entender" não sai por esta rotina, porque apagar levaria junto o conteúdo das pessoas (as ligações apagam em cascata). Cada rodada fica em `privado.limpeza_log`. Arquivo com os comandos: `guarda/guarda.sql`.
- **Leitura dos "30 dias".** Interpretei como 30 dias contados da última interação. Se ela quis 30 dias contados da coleta, é trocar um parâmetro.
- **Teste.** Simulação sem apagar: com 15 dias, 0 notícias sairiam hoje (a coleta começou em 8/11; a primeira saída real é em 23/11). Com 1 dia, sairiam 10.187, mostrando que a regra funciona. Hoje há 100 notícias com interação registrada (as visualizações dela de 11/11).
- **Página (só no HTML).** "Conteúdo antigo" passou de 6 para 3 meses (92 dias), com o texto "Publicado há mais de 3 meses e voltou a circular". Conferido: 80 dias não marca, 100 dias marca.
- **Painel.** Área "Servidor e segurança" atualizada com a rotina e a estimativa de 140 MB.

## 11 nov 2026 · Mecanismo de decisões do painel (18:20, só no painel)
- **Pedido.** "melhore o mecanismo no qual interajo no painel e tomo decisões, de modo que elas sejam salvas e desdobradas com mais facilidade e interface adequada" (captura: caixa preta cobrindo o painel, com texto quase ilegível, mostrando 15 decisões que já estavam registradas).
- **Causa.** Na prévia de arquivo do Claude o painel não alcança o servidor; as decisões ficavam só no navegador, e a caixa não sabia que eu já tinha registrado as 15.
- **Feito.**
  1. Retrato da fila: cada entrega do painel leva uma cópia da fila do servidor (`a-rede-dados/decisoes-servidor.json`), com estado e nota do Claude. O painel funde essa cópia com o que está no navegador (pelo código e, sem código, pelo item e pela decisão). As 15 de hoje aparecem como "na fila", "em execução" ou "recusada", com as notas.
  2. Topo do painel: contagem "N para enviar" (escura) ou "N na fila", que leva às Decisões.
  3. A caixa preta virou uma barra fina no rodapé ("N decisões ainda não chegaram ao Claude · Enviar · Depois"), que não aparece na própria aba Decisões.
  4. Aba Decisões: cinco números (para enviar, na fila, em execução, feitas, esperando decisão); estado da ligação ("Ligado à fila" ou "Sem ligação com a fila neste lugar", com a explicação); bloco "Para enviar" com o texto legível, Copiar e "Já colei na conversa"; listas por estado com a decisão, a seção, o seu comentário, a nota do Claude e "Ir ao item", que abre a seção e destaca o item.
- **Rotina minha a cada entrega do painel.** Atualizar o retrato da fila e escrever a nota de execução em cada decisão.
- **Limite que continua.** Na prévia do Claude, decisão nova ainda precisa ser colada na conversa. Saída proposta: publicar o painel como página privada dela no Claude, onde ele alcança o servidor; depende do ok dela, porque a regra era o painel não sair do Mac e da prévia.
