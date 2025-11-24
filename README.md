# Projeto: Series Journal — Fase 2

**Aluno:** Kaliope De Moraes Costa

## Instruções para deploy no GitHub Pages

Este projeto foi configurado para funcionar corretamente no GitHub Pages em:

https://kalimoraes.github.io/projeto_fase_2_frontend/

### Passos para publicar

1. No terminal, instale dependências:
   npm install
2. Gere o build e faça o deploy:
   npm run deploy
3. Aguarde alguns minutos até o GitHub processar e abra a página acima.

**Observação:** a aplicação consome a API serieJournal-api que deve estar rodando localmente em http://localhost:5000 para as operações de CRUD funcionarem.

## Estrutura do projeto

- src/
  - api/seriesService.js (Axios)
  - pages/ (Home, About, SerieCreate, SerieListPage)
  - App.jsx, main.jsx, styles.css

## Testes

Execute:
  npm run test

(Inclui um teste de exemplo para o formulário de cadastro.)
