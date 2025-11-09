/**
 * Test Case 4: Logout User
 *
 * Cenário: Logout de usuário autenticado
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Signup / Login'
 * 4. Verificar 'Login to your account' está visível
 * 5. Inserir email e senha corretos
 * 6. Clicar no botão 'Login'
 * 7. Verificar 'Logged in as username' está visível
 * 8. Clicar no botão 'Logout'
 * 9. Verificar que o usuário é redirecionado para a página de login
 *
 * Observação: Este teste primeiro cria um usuário para depois fazer login e logout
 */

import HomePage from "../support/pages/homePage";
import LoginPage from "../support/pages/loginPage";
import SignupPage from "../support/pages/signupPage";

const testData = require("../fixtures/testData");

describe("Test Case 4: Logout User", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  let userEmail;
  let userPassword = testData.user.password;

  // Cria um usuário antes de executar os testes
  before(() => {
    userEmail = `testuser${Date.now()}@example.com`;

    homePage.visit();
    homePage.clickSignupLogin();
    loginPage.doSignup(testData.user.name, userEmail);
    signupPage.verifyAccountInfoPage();
    signupPage.fillAccountInformation(testData.user.account, userPassword);
    signupPage.fillAddressInformation(testData.user.address);
    signupPage.clickCreateAccount();
    signupPage.verifyAccountCreated();
    signupPage.clickContinue();

    // Faz logout para começar o teste
    homePage.clickLogout();
  });

  beforeEach(() => {
    homePage.visit();
  });

  it("Deve fazer logout com sucesso", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Signup / Login'
    homePage.clickSignupLogin();

    // 3. Verificar 'Login to your account' está visível
    loginPage.verifyLoginPageLoaded();

    // 4. Fazer login
    loginPage.doLogin(userEmail, userPassword);

    // 5. Verificar 'Logged in as username' está visível
    homePage.verifyLoggedInAs(testData.user.name);
    homePage.elements.logoutButton().should("be.visible");

    // 6. Clicar em 'Logout'
    homePage.clickLogout();

    // 7. Verificar que foi redirecionado para a página de login - múltiplas asserções
    cy.url().should("include", "/login");
    loginPage.elements.loginTitle().should("be.visible");
    loginPage.elements.loginButton().should("be.visible");

    // 8. Verificar que o botão de logout não está mais visível
    homePage.elements.logoutButton().should("not.exist");
  });

  // Hook: Executado DEPOIS de todos os testes
  // Limpa os dados criados
  after(() => {
    // Login e delete account para limpar dados
    homePage.visit();
    homePage.clickSignupLogin();
    loginPage.doLogin(userEmail, userPassword);
    homePage.clickDeleteAccount();
    signupPage.clickContinue();
  });
});
