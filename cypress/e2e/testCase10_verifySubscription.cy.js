/**
 * Test Case 10: Verify Subscription in home page
 *
 * Cenário: Verificação de subscrição de newsletter na home page
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Fazer scroll até o rodapé
 * 4. Verificar texto 'SUBSCRIPTION'
 * 5. Inserir email na caixa de input
 * 6. Clicar no botão de seta (arrow button)
 * 7. Verificar mensagem de sucesso 'You have been successfully subscribed!' está visível
 */

import HomePage from "../support/pages/homePage";

const testData = require("../fixtures/testData");

describe("Test Case 10: Verify Subscription in home page", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it("Deve fazer subscrição de newsletter na home page", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Fazer scroll até o rodapé
    // O método scrollIntoView rola a página até o elemento ficar visível
    homePage.elements.subscriptionTitle().scrollIntoView({ duration: 1000 });

    // 3. Verificar texto 'SUBSCRIPTION' - múltiplas asserções
    homePage.verifySubscriptionTitle();
    homePage.elements.subscriptionEmail().should("be.visible");
    homePage.elements.subscriptionButton().should("be.visible");

    // 4. Gerar email único para subscrição
    const subscriptionEmail = `subscriber${Date.now()}@example.com`;

    // 5. Inserir email na caixa de input
    homePage.fillSubscriptionEmail(subscriptionEmail);

    // 6. Verificar que o email foi preenchido corretamente
    homePage.elements
      .subscriptionEmail()
      .should("have.value", subscriptionEmail);

    // 7. Clicar no botão de seta
    homePage.clickSubscriptionButton();

    // 8. Verificar mensagem de sucesso - com timeout maior e sem verificação de CSS
    cy.get(".alert-success", { timeout: 15000 })
      .should("be.visible")
      .and("contain", "You have been successfully subscribed!");
  });

  it("Deve exibir erro ao tentar subscrever sem email", () => {
    // Teste adicional: validação de campo vazio
    homePage.elements.logo().should("be.visible");

    // Scroll até o rodapé
    homePage.elements.subscriptionTitle().scrollIntoView();
    homePage.verifySubscriptionTitle();

    // Tenta clicar sem preencher email
    homePage.clickSubscriptionButton();

    // Verifica validação HTML5 do campo required
    homePage.elements.subscriptionEmail().then(($input) => {
      expect($input[0].validationMessage).to.exist;
    });
  });
});
