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
