# arede.online: arquitetura (v2, 7 nov 2026; atualizada em 10 nov 2026)

## Princípio: mobile first
Todo estilo base é escrito para o celular, a partir de 320px. Telas maiores só acrescentam camadas, sempre com `min-width`:

| A partir de | O que muda |
|---|---|
| 320px (base) | Barra inferior só com ícones, Início em blocos quadrados, mosaico de 2 colunas nas outras telas, folhas sobem de baixo |
| 375px | Rótulo no switch "Algoritmo" (abaixo disso, só o switch, para a marca caber) |
| 600px | Respiros maiores, Pastas em 3 colunas |
| 768px | Barra vira trilho lateral; folhas viram diálogo centralizado; conteúdo aberto em 2 colunas (imagem + vinculados à esquerda, leitura à direita); listas em 2 colunas |
| 1024px | Espaçamentos de desktop |

Regras fixas:
- Coluna de conteúdo com largura máxima de 640px (como o feed do Instagram). A aba Vídeos tem exclusivamente 1 coluna (máx. 520px).
- Alvos de toque com no mínimo 44px.
- Campos de texto com fonte de 16px (evita o zoom automático no iPhone).
- Áreas seguras do aparelho respeitadas (entalhe e barra de gestos).
- Altura com `dvh` (acompanha a barra do navegador no celular).
- Efeitos de hover só para quem tem mouse (`hover:hover`); no toque, tudo fica acessível na página do conteúdo.
- Sem rolagem horizontal da página. Só abas e chips rolam para o lado, no celular.
- Tema claro, escuro ou automático, à escolha do usuário.
- Respeita "reduzir movimento".

## Organização do código (um arquivo, em seções)
1. Utilidades · 2. Dados de exemplo · 3. Estado · 4. Selo de confiabilidade · 5. Arte placeholder · 6. Helpers de conteúdo · 7. Cartão · 8. Motor do feed · 9. Telas · 10. Rotas e navegação · 11. Folhas · 12. Aviso · 13. Ações

- Ações por delegação: cada botão declara `data-act` e existe um handler com esse nome.
- Atualizações locais: depois de uma interação, só o cartão e a página afetados são redesenhados.
- Navegação com pilha própria: o "voltar" não depende do histórico do navegador e o feed volta para o mesmo ponto.

## Testado
Larguras 320, 360, 375, 390, 430, 600, 768, 1024, 1366, 1920 e celular deitado (844×390), em todas as telas: sem rolagem horizontal e sem erros. Fluxos testados: abas, switch do algoritmo, abrir conteúdo e voltar, enquete, votação formal com comprovante, criar publicação, busca e temas no Explorar, abas da organização, tema escuro.

## Vídeo (adicionado em 7 nov 2026)
- Vídeos de exemplo embutidos no index.html (placeholders abstratos de 9s, com som; os originais ficam na pasta media do Mac).
- Reprodução automática sem som só quando o cartão está 60% visível; pausa ao sair da tela.
- Controles próprios no cartão, pensados para o toque (área de toque ampliada); um vídeo com som por vez.
- Respeita "reduzir movimento" e a preferência de reprodução automática no Perfil.
- Abas de tipo terminam com "Você viu tudo" em vez de repetir conteúdo.

## Interação padrão: expansão no lugar (7 nov 2026)
- Toda grade é uma instância de `Grid` com três partes: colunas de cima (A, o que estava acima do cartão clicado, medido na tela), o cartão expandido (sel) e a grade de baixo (B, o restante na ordem do feed). Novos itens da rolagem contínua entram em B.
- Selecionar outro cartão: o expandido volta para a grade (acima ou abaixo, conforme a posição) e o novo se expande. Fechar devolve tudo à grade.
- O layout interno do cartão expandido usa container query (2 colunas quando a grade tem 640px ou mais), então funciona igual no feed de 2 colunas e na aba Vídeos de 1 coluna.
- A página própria do conteúdo (#pin-…) continua existindo para links compartilhados.

## Cartão aberto sem espaço vazio (7 nov 2026)
Quando o cartão aberto tem 640px ou mais, `layoutPin` equilibra as duas colunas:
1. Testa todas as combinações das seções (vinculados, informações) entre esquerda e direita e fica com a mais equilibrada.
2. Imagem ajusta a altura (260–640px) para fechar a diferença.
3. Vídeo nunca é cortado: a largura da coluna da esquerda muda (22%–66%) até as alturas baterem.
4. Se a leitura ainda passar do box, o texto termina no fim da coluna com "Mostrar mais".
Recalcula ao redimensionar, ao carregar fontes e vídeo, e ao expandir o texto.

## Duas grades (7 nov 2026)
- `TileGrid`: grade regular do Início (3 colunas, destaque 2×2 a cada 18 itens, alternando lados). Expansão: o cartão entra depois da linha do bloco tocado (considerando blocos 2×2). Aceita itens novos da rolagem contínua.
- `Grid`: mosaico irregular (Pinterest) da Buscar, das organizações e dos relacionados; e a aba Vídeos em 1 coluna.
- Os dois registram em `GRIDS` e usam o mesmo cartão expandido (`detailHTML`) e o mesmo player de vídeo.

## Grade do Início em blocos (7 nov 2026, 18h)
Substitui a grade regular com destaques 2×2.
- O feed é uma sequência de **blocos** de 3 colunas × 2 linhas (proporção 3:2, células quadradas). O cartão aberto entra **entre dois blocos**, na largura toda.
- **Cada cartão tem o tamanho do seu tipo:**

| Tipo | Tamanho | Texto no cartão |
|---|---|---|
| Imagem | 1×1 (quadrado) | título em negrito + resumo, até 3 linhas |
| Vídeo | 1×2 (vertical) | título em negrito + resumo, até 2 linhas |
| Textual (publicação, evento, votação, enquete, chamado, documento) | 2×2, ou 1½×2 quando dois textos formam o bloco | no mínimo 5 linhas de leitura |

- **Montagem (`planBlock`)**: olha até 5 itens à frente para fechar o bloco sem buraco. Formas: [texto 2×2 + coluna de mídia] com lados alternados, [texto + texto], [3 colunas de mídia]. Coluna de mídia = 1 vídeo ou 2 imagens (uma imagem sozinha fica vertical). Na pausa e no fim da lista, sobra uma linha parcial, como no Instagram.
- **Leitura do cartão textual (`fitTiles`)**: o texto (resumo + restante) ocupa o espaço livre em linhas inteiras; quando é curto, o miolo se centraliza na altura, para não sobrar vazio embaixo. Testado: no mínimo 5 linhas em 320px.
- A mesma regra de texto vale no mosaico (Buscar, organizações, relacionados, aba Vídeos): textual com até 7 linhas de leitura; imagem 3 linhas; vídeo 2. O selo dos cartões textuais fica no topo, junto do tipo, nas duas grades.

## Marca
"arede.online" (desde 10 nov 2026; antes "a rede.com"), sempre em minúsculas: "arede" em peso forte, o ponto é um nó da rede (cor de destaque), "online" mais leve. O nome é também o endereço. Símbolo compacto "a." no trilho lateral e no ícone do navegador.

## Versão
O rodapé do Perfil e o console do navegador mostram a versão (data e hora). O arquivo da pasta é atualizado a cada mudança; recarregue a página (⌘R) para ver a mais nova.

## Cada tipo com seu cartão, cada aba com seu leiaute (7 nov 2026, 18h25)
Para perceber o que muda de uma aba para outra, cada tipo destaca a informação que importa nele, e cada aba organiza o conteúdo do seu jeito.

| Aba | Leiaute | O que vem primeiro no cartão | Ação direto no cartão |
|---|---|---|---|
| Tudo, Publicações | blocos quadrados | (misto: cada tipo com seu sinal, abaixo) | abrir |
| Vídeos | 1 coluna | o vídeo | play, som |
| Eventos | agenda, do mais próximo ao mais distante | folhinha com dia da semana, dia e mês; hora; local | Vou |
| Votações | cédula, 1 coluna | prazo ("Fecha amanhã", "Encerra em 3 dias"); enquete: opções; votação formal: barra com a marca do quórum | votar |
| Chamados | metas, 2 colunas | quanto falta ("32 voluntários faltando"), barra, quando | Quero ajudar |
| Documentos | arquivo, lista | folha com o tipo (Ata, Carta); organização e data; páginas; situação ("Assinaturas até sexta") | abrir |

Sinais de cada tipo nos cartões do Início e da Buscar (os mesmos das abas, em versão compacta):
- **Evento:** folhinha de calendário ao lado do título; hora e local no pé.
- **Enquete:** fundo neutro; "Lidera: opção · %" no pé.
- **Votação formal:** fundo branco com moldura escura; barra de participação com a marca do quórum.
- **Chamado:** "Faltam N" grande, na cor da organização.
- **Documento:** folha de papel com canto dobrado; tipo e páginas no pé.

No celular estreito (até 420px de bloco), o pé mostra só o dado principal de cada tipo, para a leitura manter no mínimo 5 linhas (testado em 320px, com algoritmo ligado e desligado).
Código: `textParts`/`typeFoot` (Início e Buscar), `tabCard` (abas), `cardFor` escolhe o cartão pelo leiaute; `FTABS` traz o leiaute de cada aba no 4º campo.
