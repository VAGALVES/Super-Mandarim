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
