# arede.online

Ambiente local onde idealizamos tudo do projeto (no Mac: Mesa › arede.online).
Cada nova versão vai ao ar em https://arede.online/, com o código em https://github.com/norbgt/arede.online.
A marca é sempre **arede.online**, em minúsculas (desde 10 nov 2026; antes “a rede.com”).

## Pares: sempre na mesma versão
Estes ambientes andam juntos e estão sempre na versão mais recente (o número aparece no rodapé do site):
- **Site:** https://arede.online/ (domínio no Cloudflare, servido pelo GitHub Pages com HTTPS). Não há outro endereço: o antigo (/prototipo e norbgt.github.io/arede.com) foi retirado.
- **Repositório:** https://github.com/norbgt/arede.online (antes norbgt/arede.com).
- **Servidor:** Supabase, projeto arede (zbmzabgdejylpmabujad, São Paulo, plano gratuito): banco, login, funções coletor, canais, redes e artes, agendamentos. A tabela `ambiente` registra os pares, a versão no ar e o commit.
- **Domínio e e-mail:** arede.online no Cloudflare, renovação automática, vence em 10 nov 2027; contato@arede.online é o único endereço público.
- **Acompanham:** a prévia no Claude, o Projeto “Político” no Claude e esta pasta no Mac (que guarda também o painel de controle, que nunca vai para o online).

O painel de controle mostra tudo isso em Visão geral › A plataforma, com o status de cada ambiente.

**Acesso por nível:** visitante vê 30 publicações por aba e 8 vídeos; conta com e-mail, 30 novas por aba e 100 no total por hora, e 15 vídeos a cada 12 horas; conta verificada com documento, sem esses limites. A aba Arte é só da administradora. Desde 10 nov 2026 o servidor cobra essa regra: as notícias saem pela função `conteudo`, na medida do nível de quem pede. A avaliação de segurança fica no painel, em Segurança.

**Para entender e conversa:** o detalhe da notícia pode trazer uma nota de contexto com fonte oficial (função `entender`, a partir das notas aprovadas na curadoria) e os comentários de quem tem conta. A curadoria do site tem as abas Para entender e Conversa.

## Estrutura desta pasta
- `index.html`: o site (a mesma versão de https://arede.online/, com o painel embutido só aqui).
- `painel/index.html`: painel de controle (só local).
- `ARQUITETURA.md`, `manifesto.md`, `como-funciona.md`, `analise-referencias.md`: documentos.
- `coletor/`, `canais/`, `redes/`, `artes/`: funções do servidor (Supabase).
- `dados/`, `emails/`: dados de partida e modelos de e-mail.

## Quando publicar
A cada nova versão: site, repositório e servidor vão juntos, sempre na mais recente (decisão de 10 nov 2026).

## Painel de controle (só local)
`painel/index.html` é o nosso painel de controle: a plataforma e seus ambientes, decisões, servidor, manifesto, fontes verificadas, verificação do selo, denúncias e moderação, organizações e mandatos, parâmetros de governança, transparência e LGPD, permissões e análise do produto.
- Abre direto no navegador, ou pelo site aberto desta pasta (logo “arede.online” › Painel de controle).
- **Nunca vai para o online:** fica fora do repositório, e o link só aparece quando o site é aberto pela pasta do Mac.
- O que você muda no painel (fontes, pesos do selo) fica salvo neste navegador.

## Permissões
- Amanda é admin de todos os ambientes: site, repositório norbgt/arede.online, servidor, domínio arede.online, painel de controle e prévia no Claude.
- Ajustes são feitos a partir deste Mac: direto nos arquivos ou pelos consoles logados nele, como o Claude e o GitHub.
- Detalhes no painel, em Permissões.

## Versões publicadas
- **v1 registrada (10 nov 2026):** a primeira versão no domínio próprio. A marca passa a ser arede.online em tudo e o endereço principal é https://arede.online/. Traz vídeos de canais oficiais do YouTube (Canal UOL, TV Senado, Câmara dos Deputados, TV Brasil, BBC News Brasil, DW Brasil, Brasil de Fato, Intercept Brasil, Repórter Brasil, Agência Pública e Aos Fatos), tocados aqui, um de cada vez, com o detalhe da publicação junto; Documentação cidadã com a localidade de cada documento; tema e local nos cartões de notícia; e espaços de anunciantes de exemplo, discretos, 1 a cada 8 cartões.
- **v1.2 (8 nov 2026, 16h35):** contas reais com confirmação por e-mail e publicações originais guardadas no servidor (Supabase, projeto arede), abertas a quem acessa; feed com fotos das matérias, cartões de tamanhos variados e texto sempre completo; Agenda no perfil; logo com o ponto que se move e roxo da marca unificado. Publicada em https://norbgt.github.io/arede.com/
- **v1.1 (8 nov 2026, 12h15):** notícias reais, Mobilizar a partir disto, novo manifesto e resumo do algoritmo. Publicada em https://norbgt.github.io/arede.com/
- **v0.1 (7 nov 2026):** primeira versão.
