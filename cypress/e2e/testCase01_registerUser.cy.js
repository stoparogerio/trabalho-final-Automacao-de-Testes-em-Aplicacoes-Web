/**
 * Test Case 1: Register User
 *
 * Cenário: Registro de novo usuário na aplicação
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Signup / Login'
 * 4. Verificar 'New User Signup!' está visível
 * 5. Inserir nome e email
 * 6. Clicar no botão 'Signup'
 * 7. Verificar 'ENTER ACCOUNT INFORMATION' está visível
 * 8. Preencher detalhes: Title, Name, Email, Password, Date of birth
 * 9. Selecionar checkbox 'Sign up for our newsletter!'
 * 10. Selecionar checkbox 'Receive special offers from our partners!'
 * 11. Preencher detalhes: First name, Last name, Company, Address, Country, State, City, Zipcode, Mobile Number
 * 12. Clicar no botão 'Create Account'
 * 13. Verificar 'ACCOUNT CREATED!' está visível
 * 14. Clicar no botão 'Continue'
 * 15. Verificar 'Logged in as username' está visível
 * 16. Clicar no botão 'Delete Account'
 * 17. Verificar 'ACCOUNT DELETED!' está visível e clicar no botão 'Continue'
 */

// Importa os Page Objects necessários
import HomePage from "../support/pages/homePage";
import LoginPage from "../support/pages/loginPage";
import SignupPage from "../support/pages/signupPage";

// Importa dados de teste
const testData = require("../fixtures/testData");

describe("Test Case 1: Register User", () => {
  // Instancia os Page Objects
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  // Hook: Executado ANTES de cada teste
  // Útil para configurações que se repetem
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    homePage.visit();
  });

  it("Deve registrar um novo usuário com sucesso", () => {
    // Gera email único para evitar conflitos
    const uniqueEmail = `testuser${Date.now()}@example.com`;

    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Signup / Login'
    homePage.clickSignupLogin();

    // 3. Verificar 'New User Signup!' está visível
    loginPage.verifySignupFormVisible();

    // 4. Inserir nome e email e clicar em Signup
    loginPage.doSignup(testData.user.name, uniqueEmail);

    // 5. Verificar 'ENTER ACCOUNT INFORMATION' está visível
    signupPage.verifyAccountInfoPage();

    // 6. Preencher informações da conta
    signupPage.fillAccountInformation(
      testData.user.account,
      testData.user.password
    );

    // 7. Preencher informações de endereço
    signupPage.fillAddressInformation(testData.user.address);

    // 8. Clicar em 'Create Account'
    signupPage.clickCreateAccount();

    // 9. Verificar 'ACCOUNT CREATED!' - múltiplas asserções
    signupPage.verifyAccountCreated();
    signupPage.elements.continueButton().should("be.visible");

    // 10. Clicar em Continue
    signupPage.clickContinue();

    // 11. Verificar 'Logged in as username' está visível
    homePage.verifyLoggedInAs(testData.user.name);

    // 12. Clicar em 'Delete Account'
    homePage.clickDeleteAccount();

    // 13. Verificar 'ACCOUNT DELETED!' e clicar em Continue
    signupPage.verifyAccountDeleted();
    signupPage.clickContinue();
  });
});
