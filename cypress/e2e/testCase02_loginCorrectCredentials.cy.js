/**
 * Test Case 2: Login User with correct email and password
 *
 * Cenário: Login de usuário com credenciais corretas
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Signup / Login'
 * 4. Verificar 'Login to your account' está visível
 * 5. Inserir email e senha corretos
 * 6. Clicar no botão 'Login'
 * 7. Verificar 'Logged in as username' está visível
 * 8. Clicar no botão 'Delete Account'
 * 9. Verificar 'ACCOUNT DELETED!' está visível
 *
 * Observação: Este teste primeiro cria um usuário para depois fazer login
 */

import HomePage from "../support/pages/homePage";
import LoginPage from "../support/pages/loginPage";
import SignupPage from "../support/pages/signupPage";

const testData = require("../fixtures/testData");

describe("Test Case 2: Login User with correct email and password", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  // Variáveis para armazenar dados do usuário criado
  let userEmail;
  let userPassword = testData.user.password;

  // Hook: Executado UMA VEZ antes de todos os testes deste arquivo
  // Cria um usuário para ser usado nos testes
  before(() => {
    // Gera email único
    userEmail = `testuser${Date.now()}@example.com`;

    // Cria uma conta para testar o login
    homePage.visit();
    homePage.clickSignupLogin();
    loginPage.doSignup(testData.user.name, userEmail);
    signupPage.verifyAccountInfoPage();
    signupPage.fillAccountInformation(testData.user.account, userPassword);
    signupPage.fillAddressInformation(testData.user.address);
    signupPage.clickCreateAccount();
    signupPage.verifyAccountCreated();
    signupPage.clickContinue();

    // Faz logout para testar o login
    homePage.clickLogout();
  });

  beforeEach(() => {
    homePage.visit();
  });

  it("Deve fazer login com credenciais corretas", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Signup / Login'
    homePage.clickSignupLogin();

    // 3. Verificar 'Login to your account' está visível
    loginPage.verifyLoginPageLoaded();

    // 4. Inserir email e senha corretos e fazer login
    loginPage.doLogin(userEmail, userPassword);

    // 5. Verificar 'Logged in as username' está visível - múltiplas asserções
    homePage.elements.loggedInAsText().should("be.visible");
    homePage.verifyLoggedInAs(testData.user.name);
    homePage.elements.logoutButton().should("be.visible");

    // 6. Clicar em 'Delete Account'
    homePage.clickDeleteAccount();

    // 7. Verificar 'ACCOUNT DELETED!' está visível
    signupPage.verifyAccountDeleted();
    signupPage.clickContinue();
  });
});
