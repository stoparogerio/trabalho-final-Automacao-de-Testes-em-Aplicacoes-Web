# 🚀 Automação Web - AutomationExercise.com

## 📋 Sobre o Projeto

**Autor:** Rogério Alberto Stopa  
**Cargo:** Analista de Testes de Software / QA Engineer  
**Localização:** Brasil

Projeto desenvolvido como prática final de automação web utilizando Cypress para testar a aplicação [AutomationExercise.com](https://automationexercise.com/).

Este projeto implementa testes end-to-end (E2E) automatizados para validar funcionalidades críticas da aplicação, incluindo cadastro de usuários, login, busca de produtos, carrinho de compras e checkout.

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** v13.6.0 - Framework de automação de testes E2E
- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Mochawesome](https://www.npmjs.com/package/mochawesome)** - Gerador de relatórios HTML
- **[cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)** - Plugin de integração Cypress + Mochawesome
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD para execução automatizada dos testes

## 📁 Estrutura do Projeto

```
trabalhoFinal/
├── .github/
│   └── workflows/
│       └── ci.yaml                 # Configuração do GitHub Actions
├── cypress/
│   ├── e2e/                        # Arquivos de teste
│   │   ├── testCase01_registerUser.cy.js
│   │   ├── testCase02_loginCorrectCredentials.cy.js
│   │   ├── testCase03_loginIncorrectCredentials.cy.js
│   │   ├── testCase04_logoutUser.cy.js
│   │   ├── testCase05_registerExistingEmail.cy.js
│   │   ├── testCase06_contactUsForm.cy.js
│   │   ├── testCase08_verifyAllProducts.cy.js
│   │   ├── testCase09_searchProduct.cy.js
│   │   ├── testCase10_verifySubscription.cy.js
│   │   └── testCase15_placeOrderRegisterBeforeCheckout.cy.js
│   ├── fixtures/                   # Dados de teste
│   │   ├── example.json
│   │   └── testData.js
│   ├── support/                    # Arquivos de suporte
│   │   ├── pages/                  # Page Objects
│   │   │   ├── homePage.js
│   │   │   ├── loginPage.js
│   │   │   ├── signupPage.js
│   │   │   ├── productsPage.js
│   │   │   ├── contactUsPage.js
│   │   │   └── cartPage.js
│   │   ├── commands.js             # Comandos customizados
│   │   └── e2e.js                  # Configurações globais
│   ├── reports/                    # Relatórios gerados (criado automaticamente)
│   ├── screenshots/                # Screenshots de falhas (criado automaticamente)
│   └── videos/                     # Vídeos das execuções (criado automaticamente)
├── cypress.config.js               # Configuração do Cypress
├── package.json                    # Dependências do projeto
├── .gitignore                      # Arquivos ignorados pelo Git
└── README.md                       # Este arquivo
```

## 🎯 Cenários de Teste Implementados

1. **Test Case 1:** Register User - Cadastro de novo usuário
2. **Test Case 2:** Login User with correct email and password - Login com credenciais corretas
3. **Test Case 3:** Login User with incorrect email and password - Login com credenciais incorretas
4. **Test Case 4:** Logout User - Logout do sistema
5. **Test Case 5:** Register User with existing email - Tentativa de cadastro com email existente
6. **Test Case 6:** Contact Us Form - Envio de formulário de contato
7. **Test Case 8:** Verify All Products and product detail page - Validação da página de produtos
8. **Test Case 9:** Search Product - Busca de produtos
9. **Test Case 10:** Verify Subscription in home page - Subscrição de newsletter
10. **Test Case 15:** Place Order: Register before Checkout - Realizar pedido após cadastro

## 💻 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** versão 18.x ou superior - [Download Node.js](https://nodejs.org/)
- **Git** (opcional, para clonar o repositório) - [Download Git](https://git-scm.com/)
- **Editor de código** (recomendado: VS Code) - [Download VS Code](https://code.visualstudio.com/)

### Verificar instalação do Node.js

Abra o PowerShell ou CMD e execute:

```powershell
node --version
npm --version
```

Se os comandos retornarem as versões instaladas, está tudo pronto!

## 🔧 Instalação e Configuração

### Passo 1: Clonar ou baixar o projeto

**Opção A: Clonar via Git**

```powershell
git clone <url-do-repositorio>
cd "trabalhoFinal"
```

**Opção B: Download manual**

1. Baixe o projeto como ZIP
2. Extraia para a pasta desejada
3. Abra o PowerShell na pasta do projeto

### Passo 2: Navegar até a pasta do projeto

```powershell
# Exemplo de caminho no Windows
cd "c:\Users\Stopa\documents\PGATS\Automacao de Testes em Aplicacoes Web Apostila\trabalhoFinal"
```

### Passo 3: Instalar as dependências

```powershell
npm install
```

Este comando irá:

- Ler o arquivo `package.json`
- Baixar e instalar o Cypress e todas as dependências
- Criar a pasta `node_modules`

⏱️ **Tempo estimado:** 2-5 minutos (dependendo da conexão)

### Passo 4: Verificar instalação do Cypress

```powershell
npx cypress --version
```

## 🚀 Executando os Testes

### Modo Interativo (Interface Gráfica)

Abre o Cypress Test Runner, onde você pode ver os testes sendo executados em tempo real:

```powershell
npm run cy:open
```

**ou**

```powershell
npx cypress open
```

**Como usar:**

1. Selecione "E2E Testing"
2. Escolha o navegador (Chrome, Edge, Firefox)
3. Clique no teste que deseja executar

### Modo Headless (Linha de Comando)

Executa todos os testes sem abrir o navegador (mais rápido):

```powershell
npm run cy:run
```

**ou**

```powershell
npx cypress run
```

**ou explicitamente headless:**

```powershell
npm run cy:run:headless
```

### Modo Headed (Linha de Comando com Navegador Visível)

Executa os testes via linha de comando, mas mostra o navegador:

```powershell
npm run test:headed
```

### Executar teste específico

```powershell
# Executar apenas o teste de registro de usuário
npx cypress run --spec "cypress/e2e/testCase01_registerUser.cy.js"

# Executar apenas testes de login
npx cypress run --spec "cypress/e2e/testCase02*.cy.js"
```

### Executar em navegador específico

```powershell
# Chrome
npx cypress run --browser chrome

# Edge
npx cypress run --browser edge

# Firefox
npx cypress run --browser firefox
```

## 📊 Relatórios

Os relatórios são gerados automaticamente após a execução dos testes.

### Localização dos Relatórios

- **Relatórios HTML:** `cypress/reports/html/index.html`
- **Screenshots (em caso de falha):** `cypress/screenshots/`
- **Vídeos das execuções:** `cypress/videos/`

### Visualizar Relatórios

Após executar os testes, abra o arquivo HTML no navegador:

```powershell
# Windows - PowerShell
Start-Process "cypress\reports\html\index.html"
```

**ou navegue manualmente:**

1. Vá até a pasta `cypress/reports/html/`
2. Clique duas vezes no arquivo `index.html`

### Limpar Relatórios Antigos

```powershell
npm run clean:reports
```

## 🎨 Boas Práticas Implementadas

### 1. **Page Object Model (POM)**

Todos os seletores e ações estão organizados em Page Objects (`cypress/support/pages/`), facilitando manutenção e reutilização.

### 2. **CSS Selectors Específicos**

Uso de seletores CSS únicos e atributos `data-qa` para garantir estabilidade dos testes.

### 3. **Hooks (beforeEach, before, after)**

Ações repetitivas (como visitar a página) são movidas para hooks, evitando duplicação de código.

### 4. **Múltiplas Asserções**

Cada teste valida múltiplos aspectos (visibilidade, texto, cor, URL, etc.) para maior cobertura.

### 5. **Comandos Customizados**

Funções reutilizáveis em `cypress/support/commands.js` (login, logout, criar conta, etc.).

### 6. **Dados Centralizados**

Dados de teste em `cypress/fixtures/testData.js` para fácil manutenção.

### 7. **Comentários Explicativos**

Todo o código possui comentários detalhados para facilitar aprendizado e manutenção.

## 🔄 CI/CD com GitHub Actions

### Como funciona

O arquivo `.github/workflows/ci.yaml` configura a execução automatizada dos testes no GitHub.

### Executar via GitHub Actions

1. Faça push do código para o GitHub
2. Vá até a aba **Actions** no repositório
3. Selecione o workflow **Web E2E Tests**
4. Clique em **Run workflow**
5. Aguarde a execução
6. Baixe os artefatos (relatórios) gerados

### Artefatos Gerados

Após a execução no GitHub Actions:

- Relatórios HTML
- Screenshots de falhas
- Vídeos das execuções

Eles ficam disponíveis para download na página do workflow.

## 🐛 Troubleshooting

### Erro: "cypress: comando não encontrado"

**Solução:** Execute `npm install` novamente ou use `npx cypress` em vez de `cypress`.

### Erro: "Cannot find module"

**Solução:** Delete a pasta `node_modules` e execute `npm install` novamente.

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### Testes falhando por timeout

**Solução:** Aumente o timeout no arquivo `cypress.config.js`:

```javascript
defaultCommandTimeout: 15000, // 15 segundos
pageLoadTimeout: 90000, // 90 segundos
```

### Screenshots/Vídeos não sendo gerados

**Solução:** Verifique as permissões das pastas e certifique-se de que `video: true` está configurado em `cypress.config.js`.

## 📚 Recursos Adicionais

- [Documentação Oficial do Cypress](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Site de Teste: AutomationExercise](https://automationexercise.com/)
- [Test Cases do Site](https://automationexercise.com/test_cases)

## 📝 Scripts NPM Disponíveis

| Comando                   | Descrição                                      |
| ------------------------- | ---------------------------------------------- |
| `npm run cy:open`         | Abre o Cypress Test Runner (modo interativo)   |
| `npm run cy:run`          | Executa testes em modo headless                |
| `npm run cy:run:headless` | Executa testes explicitamente em modo headless |
| `npm test`                | Alias para `cy:run`                            |
| `npm run test:headed`     | Executa testes com navegador visível           |
| `npm run clean:reports`   | Limpa relatórios, screenshots e vídeos         |

## 👤 Contato

**Rogério Alberto Stopa**  
Analista de Testes de Software / QA Engineer  
Brasil

---

⭐ **Se este projeto foi útil, considere dar uma estrela no repositório!**

📖 **Desenvolvido como material educacional para aprendizado de automação de testes web.**
