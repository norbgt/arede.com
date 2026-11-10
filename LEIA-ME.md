# a rede

Ambiente local onde idealizamos tudo do projeto.
Periodicamente, o que estiver pronto é levado para o ambiente online:
https://github.com/norbgt/arede.com

- `manifesto.md`: o manifesto, construído aos poucos.
- `analise-referencias.md`: análise de Facebook, Instagram, WhatsApp e Pinterest e proposta inicial da rede.
- `prototipo/index.html`: protótipo navegável (abre direto no navegador).
- `prototipo/ARQUITETURA.md`: princípios mobile first e organização do código.

## Quando publicar

Publicamos quando houver grandes mudanças que devem ser salvas ou que precisam ser testadas em produção.
Tanto a Amanda quanto o Claude podem sinalizar que chegou a hora. (Acordo provisório, a ser ajustado com o tempo.)

## Protótipo online

https://arede.online (público; domínio próprio desde 10 nov 2026, registrado no Cloudflare e publicado pelo GitHub Pages a partir da branch main). O endereço antigo, https://norbgt.github.io/arede.com/, leva ao novo. A cada nova publicação no repositório, o site se atualiza sozinho em cerca de um minuto.

## Painel de controle (só local)

`painel/index.html` é o nosso painel de controle: fontes verificadas, verificação do selo, denúncias e moderação, organizações e mandatos, parâmetros de governança, transparência e LGPD, e análise do produto (completude, gaps, evolução, receita e riscos).
- Abre direto no navegador, ou pelo protótipo aberto desta pasta (logo "a rede.com" › Painel de controle, ou Configurações › Sobre a rede.com).
- **Nunca vai para o online:** está no `.gitignore` e o link só aparece quando o protótipo é aberto pela pasta do Mac.
- O que você muda no painel (fontes, pesos do selo) fica salvo neste navegador.

## Permissões
- Amanda é admin de todos os ambientes: protótipo, link público, repositório norbgt/arede.com, painel de controle e prévia no Claude.
- Ajustes são feitos a partir deste Mac: direto nos arquivos ou pelos consoles logados nele, como o Claude e o GitHub.
- Detalhes no painel, em Permissões.

## Versões publicadas
- **v1 registrada (10 nov 2026):** a primeira versão no domínio próprio, arede.online. Traz vídeos de canais oficiais do YouTube (Canal UOL, TV Senado, Câmara dos Deputados, TV Brasil, BBC News Brasil, DW Brasil, Brasil de Fato, Intercept Brasil, Repórter Brasil, Agência Pública e Aos Fatos), tocados aqui, um de cada vez, com o detalhe da publicação junto; Documentação cidadã com a localidade de cada documento; tema e local nos cartões de notícia; e espaços de anunciantes de exemplo, discretos, 1 a cada 8 cartões.
- **v1.2 (8 nov 2026, 16h35):** contas reais com confirmação por e-mail e publicações originais guardadas no servidor (Supabase, projeto arede), abertas a quem acessa; feed com fotos das matérias, cartões de tamanhos variados e texto sempre completo; Agenda no perfil; logo com o ponto que se move e roxo da marca unificado. Publicada em https://norbgt.github.io/arede.com/
- **v1.1 (8 nov 2026, 12h15):** notícias reais, Mobilizar a partir disto, novo manifesto e resumo do algoritmo. Publicada em https://norbgt.github.io/arede.com/
- **v0.1 (7 nov 2026):** primeira versão.
