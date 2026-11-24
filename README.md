# App instalável (ícone próprio, abre em janela própria)

Página estática que abre o ARIAM PU Control (`https://ariam-pu.streamlit.app/?embed=true`) em tela cheia, com manifesto,
ícones e service worker, para instalar no Android, no iPhone/iPad e no Windows.

## Publicação

Copiar o conteúdo desta pasta para um repositório **público** com o GitHub Pages ativo
(Settings → Pages → Deploy from a branch → `main` / `/ (root)`).

Nada aqui é sigiloso: só a página de abertura e os ícones. Os dados continuam protegidos pelo login do app.

## Instalar

- **Android (celular e tablet):** abrir o endereço do GitHub Pages no Chrome → menu ⋮ → **Instalar app**.
- **iPhone e iPad:** abrir no Safari → Compartilhar → **Adicionar à Tela de Início**.
- **Windows:** abrir no Chrome ou no Edge → ícone de instalar na barra de endereço, ou menu → **Instalar ARIAM PU Control**.

## Limite conhecido

No iPhone e no iPad, o Safari bloqueia cookies de sites abertos dentro de outro site. Por isso, o envio de arquivos
(fotos da inspeção, planilhas) pode falhar dentro do app instalado e precisar ser feito pelo navegador. Para liberar,
seria preciso desligar a proteção XSRF do Streamlit (`server.enableXsrfProtection = false`). Essa é uma decisão de
segurança do administrador.
