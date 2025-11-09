/**
 * Test Case 6: Contact Us Form
 *
 * Cenário: Preenchimento e envio do formulário de contato
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Contact Us'
 * 4. Verificar 'GET IN TOUCH' está visível
 * 5. Inserir name, email, subject e message
 * 6. Fazer upload de arquivo
 * 7. Clicar no botão 'Submit'
 * 8. Clicar OK no alert
 * 9. Verificar mensagem de sucesso 'Success! Your details have been submitted successfully.' está visível
 * 10. Clicar no botão 'Home'
 * 11. Verificar que foi redirecionado para a home page com sucesso
 */

import HomePage from "../support/pages/homePage";
import ContactUsPage from "../support/pages/contactUsPage";

const testData = require("../fixtures/testData");

describe("Test Case 6: Contact Us Form", () => {
  const homePage = new HomePage();
  const contactUsPage = new ContactUsPage();

  beforeEach(() => {
    homePage.visit();
  });

  it("Deve enviar o formulário de contato com sucesso", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Contact Us'
    homePage.clickContactUs();

    // 3. Verificar 'GET IN TOUCH' está visível
    contactUsPage.verifyGetInTouchVisible();

    // 4. Preencher o formulário de contato
    contactUsPage.fillContactForm(testData.contactForm);

    // 5. Upload de arquivo
    // Cria um arquivo temporário para upload
    const fileName = "test-file.txt";
    const fileContent = "This is a test file for upload";

    // Cypress permite criar arquivo dinamicamente para upload
    cy.writeFile(`cypress/fixtures/${fileName}`, fileContent);

    // Aguarda para garantir que o arquivo foi criado
    cy.wait(1000);

    contactUsPage.uploadFile(`cypress/fixtures/${fileName}`);

    // 6. Verificar que o arquivo foi anexado
    contactUsPage.elements.uploadFileInput().should("exist");

    // 7. Configurar listener para o alert ANTES de clicar no botão
    cy.on("window:confirm", () => true);

    // 8. Clicar em Submit
    contactUsPage.clickSubmit();

    // 9. Verificar mensagem de sucesso - com seletor mais específico e timeout maior
    cy.get(".status.alert-success", { timeout: 20000 }).should("be.visible");

    // Verificar texto da mensagem
    cy.contains("Success! Your details have been submitted successfully.", {
      timeout: 5000,
    }).should("be.visible");

    // 10. Verificar e clicar no botão Home
    cy.get("#form-section a.btn.btn-success", { timeout: 10000 })
      .should("be.visible")
      .click();

    // 11. Verificar que foi redirecionado para a home page
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    homePage.elements.logo().should("be.visible");
  });
});
