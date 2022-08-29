# growbase-admin-2
Growbase com fuse 8.0

- npm install
- npm run dev
- app -> configs -> navigationConfig.js
  - Mostra os itens no menu lateral
- app -> configs -> routesConfig
  - Busca as definições das rotas e adiciona de fato
    - Importar config e colocar no array
- app -> configs -> settingsConfig
  - Configurações globais do projeto
- paginas ficam na pasta main
- app -> shared-components
  - Componentes que vão ser usados em mais de um lugar/página
- app -> store (redux com o toolkit)
  -> estado global
- app -> theme-layouts
  - Estilos e estruturas dos elementos dos layouts

- Para criar uma nova página:
  - criar pasta dentro de app -> main
  - criar arquivo da página e arquivo da páginaConfig
  - chamar o arquivo de config no routesConfig
  - se precisar criar menu, alterar NavigationConfig
  - se a página/modulo tiver store
    - criar store...
    - chamar dentro do rootReducer
