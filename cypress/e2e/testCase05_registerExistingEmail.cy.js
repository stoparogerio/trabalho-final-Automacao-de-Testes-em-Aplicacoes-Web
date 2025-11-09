/**
 * Test Case 5: Register User with existing email
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'New User Signup!' is visible
 * 6. Enter name and already registered email address
 * 7. Click 'Signup' button
 * 8. Verify error 'Email Address already exist!' is visible
 */

import HomePage from "../support/pages/homePage";
import LoginPage from "../support/pages/loginPage";
import SignupPage from "../support/pages/signupPage";

const testData = require("../fixtures/testData");

describe("Test Case 5: Register User with existing email", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  it("Deve exibir erro ao tentar registrar com email já existente", () => {
    // Gerar email único para este teste
    const existingEmail = `testuser${Date.now()}@example.com`;
    const userName = `User_${Date.now()}`;

    // ===== PARTE 1: CRIAR A PRIMEIRA CONTA =====
    // 1. Navegar para a URL
    homePage.visit();
    cy.wait(1000);

    // 2. Clicar em 'Signup / Login'
    homePage.clickSignupLogin();

    // 3. Fazer signup com o email que será reutilizado
    loginPage.fillSignupForm(userName, existingEmail);
    loginPage.clickSignupButton();

    // 4. Preencher informações da conta
    signupPage.verifyAccountInfoPage();
    signupPage.fillAccountInformation(
      testData.user.account,
      testData.user.password
    );
    signupPage.fillAddressInformation(testData.user.address);
    signupPage.clickCreateAccount();

    // 5. Verificar criação e fazer login
    signupPage.verifyAccountCreated();
    signupPage.clickContinue();

    cy.wait(1500);

    // 6. Fazer logout para tentar criar conta duplicada
    cy.get('a[href="/logout"]', { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.url({ timeout: 10000 }).should("include", "/login");
    cy.wait(1500);

    // ===== PARTE 2: TENTAR CRIAR CONTA COM EMAIL EXISTENTE =====
    // 7. Verificar 'New User Signup!' está visível
    loginPage.verifySignupFormVisible();

    // 8. Tentar fazer signup com email já existente
    loginPage.fillSignupForm("Another User", existingEmail);

    // 9. Clicar em Signup
    loginPage.clickSignupButton();

    // 10. Verificar mensagem de erro - múltiplas asserções
    cy.get(".signup-form form p", { timeout: 15000 })
      .should("be.visible")
      .and("contain", "Email Address already exist!");

    // 11. Verificar que ainda está na página de signup
    loginPage.elements.signupButton().should("be.visible");

    // ===== PARTE 3: LIMPEZA - DELETAR A CONTA =====
    cy.wait(2000);

    // 12. Fazer login com a conta criada
    cy.get('[data-qa="login-email"]', { timeout: 15000 })
      .should("be.visible")
      .clear()
      .type(existingEmail, { delay: 50 });
    cy.get('[data-qa="login-password"]')
      .clear()
      .type(testData.user.password, { delay: 50 });
    cy.wait(500);
    cy.get('[data-qa="login-button"]').click();

    // 13. Aguardar login - timeout maior
    cy.get(".nav.navbar-nav", { timeout: 20000 }).should(
      "contain.text",
      `Logged in as`
    );
    cy.wait(2000);

    // 14. Deletar a conta com verificação prévia
    cy.get('a[href="/delete_account"]', { timeout: 15000 })
      .should("be.visible")
      .should("not.be.disabled")
      .click({ force: true });

    // 15. Verificar deleção com timeout maior
    cy.get('h2[data-qa="account-deleted"]', { timeout: 20000 }).should(
      "be.visible"
    );
    cy.wait(1000);
    cy.get('a[data-qa="continue-button"]').should("be.visible").click();
  });
});
