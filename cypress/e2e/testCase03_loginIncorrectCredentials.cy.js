/**
 * Test Case 3: Login User with incorrect email and password
 *
 * Cenário: Tentativa de login com credenciais incorretas
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Signup / Login'
 * 4. Verificar 'Login to your account' está visível
 * 5. Inserir email e senha incorretos
 * 6. Clicar no botão 'Login'
 * 7. Verificar mensagem de erro 'Your email or password is incorrect!' está visível
 */

import HomePage from "../support/pages/homePage";
import LoginPage from "../support/pages/loginPage";

const testData = require("../fixtures/testData");

describe("Test Case 3: Login User with incorrect email and password", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    homePage.visit();
  });

  it("Deve exibir mensagem de erro ao tentar login com credenciais inválidas", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Signup / Login'
    homePage.clickSignupLogin();

    // 3. Verificar 'Login to your account' está visível
    loginPage.verifyLoginPageLoaded();

    // 4. Inserir email e senha incorretos
    loginPage.doLogin(
      testData.invalidUser.email,
      testData.invalidUser.password
    );

    // 5. Verificar mensagem de erro - múltiplas asserções
    loginPage.verifyErrorMessage("Your email or password is incorrect!");
    loginPage.elements.errorMessage().should("be.visible");
    loginPage.elements
      .errorMessage()
      .should("have.css", "color", "rgb(255, 0, 0)"); // Verifica cor vermelha

    // 6. Verificar que ainda está na página de login
    loginPage.elements.loginButton().should("be.visible");
  });
});
