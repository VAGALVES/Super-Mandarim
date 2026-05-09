# HanVerse VS · Mandarim Visual, Sonoro e Estrutural

## Versão

**MVP 3.0 · Practical City Chinese**

App educacional em HTML, CSS e JavaScript para estudo de mandarim padrão, com base em caracteres simplificados, pinyin e tons.

## Destaques da v3.0

- Continuação da população de caracteres rumo à meta de 3.000;
- Novas combinações de vida prática;
- Vocabulário de hotel, restaurante, compras, pagamentos, documentos, emergência, banco, farmácia e moradia;
- Manutenção do módulo urbano de Shanghai iniciado na v2.9;
- Áudio nos termos e exemplos;
- Animação de escrita com botões de traços clicáveis.

## Como executar

Abra `index.html` no navegador.

## Publicação

Pode ser publicado diretamente em GitHub Pages, Netlify ou Vercel como site estático.


## Instalação como app

- O projeto agora inclui `manifest.webmanifest`, `service-worker.js` e ícones em múltiplos tamanhos.
- Na primeira abertura, um botão **Instalar agora** aparece quando o navegador permitir.
- No iPhone/iPad, use **Compartilhar → Adicionar à Tela de Início**.


## v3.2 · Learning UX

Esta versão adiciona busca inteligente com sugestões, atalhos por radicais, gramática interativa, quiz multimodal e PWA offline com cache seletivo.

### Cache seletivo

O `service-worker.js` separa:
- `hanverse-vs-v3-2-core`: arquivos essenciais do app;
- `hanverse-vs-v3-2-runtime`: assets carregados em execução, incluindo CDN e dados de escrita quando disponíveis.

### Observação

Para o botão de instalação funcionar corretamente, publique em HTTPS, como GitHub Pages, Netlify ou Vercel.


## v3.2.1 · Correção

Correção da função `answerQuiz()` e validação de sintaxe JavaScript antes da próxima rodada de população.


## v3.3 · Expanded Practical Mandarin

Esta versão adiciona 52 novos caracteres únicos e 75 combinações práticas para vida real em mandarim: moradia, trabalho, universidade, tecnologia, saúde, turismo, finanças, supermercado e conectores.

A sintaxe JavaScript foi validada com `node --check`.


## v3.4 · Daily Life Expansion

Esta versão adiciona 41 novos caracteres únicos e 71 combinações práticas para uso cotidiano: clima, documentos, transporte, compras, restaurante, saúde, tecnologia, conectores e cultura chinesa.

A sintaxe JavaScript foi validada com `node --check`.


## v3.5 · Accelerated Expansion

Rodada acelerada com 213 novos caracteres únicos e 128 combinações práticas. A base se aproxima de 1.100 caracteres únicos, preservando pinyin, tons, categorias, exemplos e áudio.

Validação JavaScript: `node --check` OK.


## v3.5.1 · Root Icons

Esta versão remove a dependência da pasta `/icons`.

Agora o `index.html`, o `manifest.webmanifest` e o `service-worker.js` buscam os ícones diretamente na raiz do repositório:

- `./icon-192.png`
- `./icon-512.png`
- `./icon-maskable-192.png`
- `./icon-maskable-512.png`
- `./apple-touch-icon-180.png`

Isso facilita o upload manual pelo celular no GitHub.


## v3.5.2 · Button Fix

Correção defensiva dos botões:

- Copiar Plano;
- Instalar agora;
- Mudar tema.

Também mantém todos os ícones PWA na raiz do repositório, sem pasta `/icons`.


## v3.5.3 · Critical Init Fix

Correção crítica:

- criada a função `copyPlan()`, que estava ausente;
- protegido o `init()` com `try/catch`;
- religados os botões principais fora do `init()`;
- corrigida alternância de tema para `imperial/parchment`;
- mantidos ícones na raiz do repositório.


## v3.5.4 · Theme Definitive Fix

Correção definitiva do botão de tema:

- remove o duplo toggle que fazia o tema mudar e voltar imediatamente;
- usa captura de evento com `stopImmediatePropagation`;
- limpa `onclick` antigo dos botões `#theme` e `#themeFab`;
- aplica `data-theme` e classes de fallback `theme-imperial/theme-parchment`;
- atualiza o cache do service worker para evitar versão antiga presa no celular.


## v3.5.5 · Theme and Calligraphy Fix

Correções principais:

- Tema claro agora muda visualmente a página inteira, não apenas a mensagem.
- Sobrescrita real de variáveis, fundo, cards, textos, botões, inputs e quadro de escrita.
- Seção de caligrafia reorganizada como laboratório guiado.
- Instruções agora aparecem antes da animação.
- Botões de repetir animação e próximo caractere dentro do laboratório.
- Service worker atualizado para invalidar cache antigo.


## v3.5.6 · Counters Fix

Correção dos contadores da home:

- contagem de ideogramas independente do `init()`;
- contagem de combinações considerando todos os datasets adicionados;
- contagem de gramática independente;
- fallback para renderizar grids principais caso algum trecho do `init()` falhe;
- service worker atualizado para invalidar cache antigo.


## v3.5.7 · Final Theme Fix

Correção final do tema:

- camada CSS final com alta especificidade e `!important`;
- troca visual real em body, cards, textos, botões, inputs, menu, stats e caligrafia;
- controlador único final `HanVerseThemeFinal`;
- atualização do cache do service worker para v3.5.7.


## v3.5.8 · System Design Restore

Correções:

- restaura o system design anterior, removendo o override agressivo da v3.5.7;
- corrige o botão X do modal de decomposição;
- corrige clique fora do modal para fechar;
- corrige ESC para fechar modal;
- estabiliza o botão de tema sem deformar o layout;
- atualiza cache do service worker.


## v3.5.9 · Combos Render Fix

Correção:

- restaura os cards de combinações abaixo dos títulos;
- renderiza `comboGrid`, `urbanComboGrid`, `practicalComboGrid`, `expandedV33ComboGrid`, `expandedV34ComboGrid` e `acceleratedV35ComboGrid`;
- preserva o system design restaurado na v3.5.8;
- atualiza o cache do service worker.


## v3.6.0 · Light Mode and Combo Anatomy

Melhorias:

- modo claro refinado sem destruir o system design original;
- contraste melhorado em cards, botões, menu, inputs e textos;
- combinações agora mostram a anatomia da palavra:
  - caractere + caractere = palavra nova;
  - significado de cada parte;
  - lógica pedagógica da formação.


## v3.6.1 · Population Expansion

Nova rodada de população:

- 189 novos caracteres únicos;
- 65 novas combinações com anatomia visual;
- foco em comunicação, cidade, restaurante, documentos, tecnologia, saúde, cultura, família e estudo;
- preserva o system design da v3.6.0.


## v3.6.2 · Tone Training and Theme Button

Melhorias:

- botão de tema reposicionado para não sobrepor o menu mobile;
- botão de tema agora é apenas ícone;
- modo claro refinado;
- seção de tons corrigida com contorno sonoro sintético para diferenciar mā, má, mǎ, mà e ma;
- 45 novos caracteres únicos;
- 49 novas combinações com anatomia visual.


## v3.6.3 · Mobile Navigation and Character Taxonomy

Melhorias:

- removido o botão flutuante inferior de tema;
- mantido apenas o botão superior de tema, em formato de ícone;
- adicionada taxonomia inteligente para ideogramas:
  - busca;
  - filtro por HSK;
  - filtro por categoria;
  - filtro por radical;
  - atalhos rápidos;
  - carregamento progressivo;
- adicionados 48 novos caracteres únicos;
- adicionadas 57 novas combinações.


## v3.6.4 · HSK Interactive Taxonomy

Melhorias:

- painel HSK agora tem contadores por nível;
- cada HSK é clicável e aplica o filtro automaticamente;
- após selecionar um HSK, aparecem campos semânticos internos;
- seletor de HSK mostra HSK 1, HSK 2 etc. com nomes pedagógicos;
- preserva a navegação mobile com carregamento progressivo.


## v3.6.5 · HSK Click Fix

Correção:

- HSKs agora usam delegação de evento;
- cards antigos de HSK também viram filtros clicáveis;
- clique em HSK aplica filtro, atualiza visual ativo e rola para a grade;
- chips semânticos internos também usam delegação;
- select de HSK mantém rótulos explícitos.


## v3.6.6 · HSK Card Layout

Melhoria visual:

- cards HSK no formato:
  - HSK
  - número do nível
  - assunto
  - acumulado de caracteres;
- layout mais limpo para mobile;
- mantém clique e filtros da v3.6.5.


## v3.6.7 · HSK Count Sync

Correção:

- contadores HSK agora usam a mesma base dos filtros;
- cards exibidos e acumulado ficam sincronizados;
- base canônica remove duplicidades por ideograma;
- o contador mostra caracteres únicos;
- filtros HSK e campos semânticos foram unificados.


## v3.6.8 · HSK Authoritative Count

Correção forte:

- o card HSK agora usa a mesma base canônica dos cards renderizados;
- contador, filtro, chips semânticos e cards exibidos usam a mesma função;
- scripts antigos são sobrescritos no final do carregamento;
- contador marcado como `caracteres filtráveis`.


## v3.6.9 · HSK Static Map Fix

Correção definitiva:

- remove/substitui o antigo bloco estático `.hsk-map`;
- cria um único painel HSK oficial dentro da seção de ideogramas;
- contagem HSK passa a bater com os cards filtrados exibidos;
- sem deduplicação artificial no contador, para refletir exatamente o resultado visual.


## v3.7.0 · HSK Locked Renderer

Correção:

- impede que scripts antigos deixem os cards HSK vazios;
- adiciona MutationObserver no painel HSK;
- se um renderer antigo sobrescrever a grade, o app restaura o layout oficial;
- mantém contadores no formato HSK / assunto / acumulado.
