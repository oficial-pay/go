# Quiz TikTok — Versão HTML/CSS/JS Puro

Site estático, sem build, sem dependências. Funciona em qualquer hospedagem (GitHub Pages, Netlify, Vercel, hospedagem PHP, etc).

## Estrutura
```
index.html          → Página principal
styles.css          → Todos os estilos
quiz.js             → Lógica do quiz + dados
assets/products/    → Imagens dos prêmios (10 .jpg)
```

## Como usar
1. Suba a pasta inteira no seu servidor / GitHub Pages.
2. Para configurar o checkout: abra `quiz.js`, procure por `CHECKOUT_URL` (linha ~155) e troque pelo seu link.

## GitHub Pages
1. Crie um repositório no GitHub.
2. Suba todos os arquivos.
3. Settings → Pages → Source: `main` / root → Save.
4. Acesse: `https://seu-usuario.github.io/nome-do-repo/`

## Personalizar
- **Perguntas:** edite o array `QUESTIONS` no `quiz.js`.
- **Produtos:** edite o array `PRODUCTS` no `quiz.js` e troque as imagens em `assets/products/`.
- **Cores:** edite as variáveis `:root` no topo do `styles.css`.
