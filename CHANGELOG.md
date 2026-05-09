# Changelog · HanVerse VS

## v3.7.0 · HSK Locked Renderer

- Corrigido problema dos cards HSK vazios.
- Adicionado renderizador travado com MutationObserver.
- O painel HSK oficial agora se auto-restaura caso scripts antigos sobrescrevam a grade.
- Cache atualizado para v3.7.0.


## v3.6.9 · HSK Static Map Fix

- Substituído mapa HSK antigo que continuava aparecendo com contagem errada.
- Painel oficial HSK passa a ser a única fonte visual.
- Contador agora acompanha o mesmo conjunto renderizado no filtro.
- Cache atualizado para v3.6.9.


## v3.6.8 · HSK Authoritative Count

- Corrigida divergência persistente do HSK 9.
- Adicionado contador autoritativo calculado por `byLevel(level).length`.
- Renderização final roda depois dos scripts antigos para impedir sobrescrita.
- Cache atualizado para v3.6.8.


## v3.6.7 · HSK Count Sync

- Corrigida divergência entre contagem HSK e cards filtrados.
- Criada base canônica `HanVerseCanonicalCharacters`.
- Renderização dos cards de ideogramas passa a usar a mesma base dos contadores.
- Cache atualizado para v3.6.7.


## v3.6.6 · HSK Card Layout

- Cards HSK redesenhados no formato HSK [nº] / assunto / acumulado.
- Melhor legibilidade mobile.
- Mantida delegação de clique da v3.6.5.
- Cache atualizado para v3.6.6.


## v3.6.5 · HSK Click Fix

- Corrigido clique dos HSKs por delegação de evento.
- Cards HSK renderizados ou antigos agora aplicam filtro automaticamente.
- Subfiltros semânticos também usam delegação.
- Cache atualizado para v3.6.5.


## v3.6.4 · HSK Interactive Taxonomy

- Adicionado painel HSK interativo com contadores.
- HSK cards agora funcionam como filtros clicáveis.
- Subfiltros por campo semântico aparecem dentro do HSK selecionado.
- Select de HSK normalizado para HSK 1, HSK 2, ..., HSK 9.
- Cache atualizado para v3.6.4.


## v3.6.3 · Mobile Navigation and Character Taxonomy

- Removido botão flutuante inferior de tema.
- Adicionada navegação inteligente dos ideogramas com filtros por HSK, categoria e radical.
- Adicionado carregamento progressivo para evitar página infinita no mobile.
- Adicionados 48 novos caracteres únicos.
- Adicionadas 57 novas combinações.
- Cache atualizado para v3.6.3.


## v3.6.2 · Tone Training and Theme Button

- Corrigido treino de tons: agora existe contorno sonoro sintético diferente para cada tom.
- Adicionado laboratório de tons reais com mā, má, mǎ, mà e ma.
- Botão de tema virou ícone e foi reposicionado para não sobrepor o menu.
- Modo claro refinado.
- Adicionados 45 novos caracteres únicos.
- Adicionadas 49 novas combinações.
- Cache atualizado para v3.6.2.


## v3.6.1 · Population Expansion

- Adicionados 189 novos caracteres únicos.
- Adicionadas 65 novas combinações com anatomia visual.
- Nova seção `extraCombosV361Grid`.
- Contadores atualizados para considerar a nova base de combinações.
- Cache atualizado para v3.6.1.


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
