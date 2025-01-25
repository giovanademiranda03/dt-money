# DT Money

DT Money é uma aplicação web de controle financeiro. Ela permite cadastrar entradas e saídas financeiras, exibir o saldo total e filtrar transações de forma simples e intuitiva.

## 🔧 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Json Server](https://github.com/typicode/json-server)

## 🔄 Funcionalidades

- Cadastro de transações financeiras (entradas e saídas).
- Listagem de transações com total calculado automaticamente.
- Filtro dinâmico de transações.
- Validação de formulários com `React Hook Form` e `Zod`.
- Mock de API com `Json Server` para gerenciar dados das transações.

## 🛠️ Como Executar o Projeto

### Requisitos

- [Node.js](https://nodejs.org/) instalado na versão 16 ou superior.
- [Git](https://git-scm.com/) para clonar o repositório.
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/giovanademiranda03/dt-money.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd dt-money
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

4. Inicie o servidor JSON:

   ```bash
   npm run dev:server
   ```

   Esse comando inicia o `Json Server` na porta `3333`.

5. Inicie a aplicação:
   ```bash
   npm run dev
   ```
   O projeto estará disponível em `http://localhost:5173`.

## 🚀 Deploy na Vercel

Para fazer o deploy do projeto na [Vercel](https://vercel.com/), é necessário configurar um back-end separado para o `Json Server` ou substituí-lo por uma API serverless. Veja opções no arquivo `server.json` para adaptação.

## 📝 Estrutura de Pastas

A organização do projeto segue o padrão:

```
dt-money
├── public
├── src
│   ├── @types          # Tipagens globais
│   ├── assets          # Arquivos estáticos
│   ├── components      # Componentes reutilizáveis
│   ├── contexts        # Contextos do React
│   ├── hooks           # Hooks personalizados
│   ├── pages           # Páginas da aplicação
│   ├── styles          # Estilizações globais
│   ├── utils           # Funções utilitárias
│   └── App.tsx         # Componente raiz
├── server.json         # Dados do Json Server
├── package.json        # Dependências e scripts
└── vite.config.ts      # Configuração do Vite
```

## 🔧 Scripts Disponíveis

- `dev`: Inicia a aplicação em ambiente de desenvolvimento.
- `dev:server`: Inicia o servidor JSON na porta `3333`.
- `build`: Gera a versão otimizada para produção.
- `preview`: Visualiza a aplicação já buildada.
- `lint`: Verifica o código com ESLint.
- `lint:fix`: Corrige problemas detectados pelo ESLint.
