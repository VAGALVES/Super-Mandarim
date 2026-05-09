# Changelog · HanVerse VS

## v3.6.0 · Light Mode and Combo Anatomy

- Refinado o modo claro preservando o system design original.
- Cards de combinação agora exibem fórmula visual: caractere + caractere = termo.
- Adicionada decomposição de cada caractere dentro das combinações.
- Renderizador `HanVerseRenderComboAnatomy` adicionado.
- Cache atualizado para v3.6.0.


## v3.5.9 · Combos Render Fix

- Corrigida ausência dos cards de combinações abaixo das seções de Cidade Real e Vida Prática.
- Adicionado renderer defensivo para todas as grades de combinação.
- Mantido system design restaurado.
- Cache atualizado para v3.5.9.


## v3.5.8 · System Design Restore

- Removido o override global agressivo do tema que alterava o system design original.
- Adicionado tema claro leve, preservando a identidade visual imperial.
- Corrigido botão X do modal de decomposição.
- Adicionado fechamento por backdrop e tecla ESC.
- Criado `HanVerseThemeStable` e `HanVerseCloseModal`.


## v3.5.7 · Final Theme Fix

- Adicionado override final de tema com alta prioridade.
- Tema claro agora afeta visualmente toda a interface.
- Criado `HanVerseThemeFinal` como controlador único final.
- Cache atualizado para `hanverse-vs-v3-5-7-final-theme`.


## v3.5.6 · Counters Fix

- Corrigidos contadores zerados da home.
- `updateHeroStatsV356()` calcula os números independentemente da sequência principal do `init()`.
- Combinações agora somam `combos`, `urbanSignCombos`, `practicalLifeCombos`, `expandedV33Combos`, `expandedV34Combos` e `acceleratedV35Combos`.
- Adicionado fallback de inicialização para grids principais.
- Cache atualizado para v3.5.6.


## v3.5.5 · Theme and Calligraphy Fix

- Tema claro aplicado de verdade por variáveis globais e classes `theme-imperial/theme-parchment`.
- Corrigido problema em que apenas o toast mudava, mas a página permanecia visualmente igual.
- Caligrafia reorganizada em duas colunas: instruções guiadas + animação.
- Feedback pedagógico reforçado para escrita.
- Cache atualizado para v3.5.5.


## v3.5.4 · Theme Definitive Fix

- Corrigido duplo acionamento do botão de tema.
- Botões `#theme` e `#themeFab` agora são controlados por handler único e definitivo.
- Adicionado fallback por classes `theme-imperial` e `theme-parchment`.
- Service worker atualizado para cache v3.5.4.


## v3.5.3 · Critical Init Fix

- Corrigida ausência da função `copyPlan()`.
- `init()` protegido com `try/catch`, evitando que uma falha interrompa o restante dos scripts.
- Botões Copiar Plano, Instalar Agora e Tema religados por uma camada independente de segurança.
- Alternância de tema corrigida para `imperial/parchment`.
- Ícones continuam na raiz, sem pasta `/icons`.


## v3.5.2 · Button Fix

- Adicionada camada defensiva de JavaScript para religar os botões críticos mesmo se parte do `init()` original falhar.
- Corrigido botão de Copiar Plano com fallback para navegadores sem Clipboard API.
- Corrigido botão Instalar Agora com tratamento para Android/Chrome e iOS.
- Corrigido botão de Tema com alternância direta entre dark/parchment.
- Mantidos ícones PWA na raiz do repositório.


## v3.5.1 · Root Icons

- Manifest atualizado para buscar ícones na raiz.
- Service worker atualizado para cachear ícones na raiz.
- HTML atualizado para buscar `apple-touch-icon`, `favicon` e ícone do banner de instalação na raiz.
- Pasta `/icons` removida do pacote final para facilitar upload pelo celular.


## v3.5 · Accelerated Expansion

- Adição de 213 novos caracteres únicos.
- Adição de 128 novas combinações práticas.
- Expansão acelerada por radicais, com reforço em caracteres comuns, trabalho, cidade, tecnologia, saúde, documentos, conectores e cultura.
- Total aproximado agora: 1183 caracteres únicos.
- Validação de sintaxe JavaScript com `node --check`.

## v3.4 · Daily Life Expansion

- Expansão de clima, documentos, transporte, saúde, tecnologia e cultura.
