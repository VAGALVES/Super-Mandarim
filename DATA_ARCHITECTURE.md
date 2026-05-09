# HanVerse VS · Data Architecture v3.8.3

Esta versão foi ajustada para uso pelo celular: os arquivos JSON ficam todos na **raiz do repositório**, sem pasta `data/`.

## Estrutura

```txt
index.html
characters-hsk-1.json
characters-hsk-2.json
characters-hsk-3.json
characters-hsk-4.json
characters-hsk-5.json
characters-hsk-6.json
characters-hsk-7.json
characters-hsk-8.json
characters-hsk-9.json
combinations.json
manifest-data.json
```

## Por que isso foi feito

No GitHub pelo celular, criar/subir pastas pode ser ruim ou bloqueado dependendo da tela/app. Com tudo na raiz, você pode subir os arquivos individualmente com mais facilidade.

## Como popular daqui para frente

Adicionar novos objetos diretamente nos arquivos:

- `characters-hsk-1.json`
- `characters-hsk-2.json`
- `characters-hsk-3.json`
- `characters-hsk-4.json`
- `characters-hsk-5.json`
- `characters-hsk-6.json`
- `characters-hsk-7.json`
- `characters-hsk-8.json`
- `characters-hsk-9.json`
- `combinations.json`

## Observação

Abrindo via `file://`, alguns navegadores bloqueiam `fetch()` de JSON local. Em GitHub Pages, Netlify, Vercel ou servidor local, os JSON carregam normalmente. O app mantém fallback interno para não quebrar.
