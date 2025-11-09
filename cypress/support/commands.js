// ***********************************************
// Comandos customizados do Cypress
// Funções reutilizáveis que podem ser chamadas em qualquer teste
// ***********************************************

/**
 * Comando customizado para fazer login
 * Uso: cy.login('email@example.com', 'password123')
 *
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 */
Cypress.Commands.add("login", (email, password) => {
  // Importa o Page Object de Login
  const LoginPage = require("./pages/loginPage").default;
  const loginPage = new LoginPage();

  // Navega para a página de login
  cy.visit("/login");

  // Preenche e submete o formulário
  loginPage.fillLoginForm(email, password);
  loginPage.clickLoginButton();
});

/**
 * Comando customizado para fazer logout
 * Uso: cy.logout()
 */
Cypress.Commands.add("logout", () => {
  // Clica no botão de logout
  cy.get('a[href="/logout"]').click();
});

/**
 * Comando customizado para criar uma conta completa
 * Uso: cy.createAccount(userData)
 *
 * @param {Object} userData - Objeto com todos os dados do usuário
 */
Cypress.Commands.add("createAccount", (userData) => {
  const HomePage = require("./pages/homePage").default;
  const LoginPage = require("./pages/loginPage").default;
  const SignupPage = require("./pages/signupPage").default;

  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  // Navega para a página inicial
  homePage.visit();

  // Vai para a página de signup
  homePage.clickSignupLogin();

  // Preenche dados de signup
  loginPage.fillSignupForm(userData.name, userData.email);
  loginPage.clickSignupButton();

  // Preenche informações da conta
  signupPage.completeRegistration(userData);
});

/**
 * Comando customizado para deletar conta
 * Uso: cy.deleteAccount()
 */
Cypress.Commands.add("deleteAccount", () => {
  // Clica no botão Delete Account
  cy.get('a[href="/delete_account"]').click();

  // Verifica se a conta foi deletada
  cy.get('h2[data-qa="account-deleted"]').should("be.visible");

  // Clica em Continue
  cy.get('a[data-qa="continue-button"]').click();
});

/**
 * Comando para gerar email único para testes
 * Uso: cy.generateEmail().then(email => { ... })
 *
 * @returns {string} Email único com timestamp
 */
Cypress.Commands.add("generateEmail", () => {
  const timestamp = Date.now();
  return `testuser${timestamp}@example.com`;
});

/**
 * Comando para scroll até um elemento
 * Útil para elementos que ficam no rodapé
 * Uso: cy.scrollToElement(selector)
 *
 * @param {string} selector - Seletor CSS do elemento
 */
Cypress.Commands.add("scrollToElement", (selector) => {
  cy.get(selector).scrollIntoView({ duration: 1000 });
});
