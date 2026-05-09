# HanVerse VS · Mandarim Visual, Sonoro e Estrutural

App educacional em HTML, CSS e JavaScript para estudo de chinês mandarim, com foco em:

- ideogramas organizados por HSK 1–9;
- pinyin e fonética aplicada para brasileiros;
- tons do mandarim;
- combinações de ideogramas;
- gramática com decomposição;
- áudio em frases e combinações;
- animação de escrita dos ideogramas;
- favoritos e revisão ativa;
- design responsivo com estética inspirada na China.

## Versão

**MVP 2.0 · Base Expandida**

Esta primeira versão pública/testável contém uma base inicial expandida de ideogramas, especialmente com reforço em HSK 1 e HSK 2.

## Como executar

Abra o arquivo `index.html` diretamente no navegador.

Para publicar no Netlify, Vercel ou GitHub Pages, envie o conteúdo desta pasta e defina `index.html` como arquivo principal.

## Estrutura

```txt
hanverse-vs/
├── index.html
├── README.md
└── CHANGELOG.md
```

## Observação sobre animação dos ideogramas

A animação fiel dos traços usa carregamento online de dados dos caracteres quando disponível. Caso os dados não carreguem, o app mantém uma visualização alternativa.

## Próximos passos sugeridos

- Expandir HSK 1 completo;
- Expandir HSK 2 completo;
- Criar arquivos separados para dados, CSS e JavaScript;
- Melhorar performance mobile;
- Criar sistema de progresso real;
- Criar modo treino de escrita interativa.
