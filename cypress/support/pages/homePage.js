/**
 * Page Object para a página inicial (Home Page)
 * Contém seletores e métodos relacionados à página inicial
 */

class HomePage {
  /**
   * Seletores CSS da página inicial
   * Usando CSS Selectors específicos para evitar conflitos
   */
  elements = {
    // Cabeçalho e navegação
    logo: () => cy.get(".logo > a > img"),
    signupLoginButton: () => cy.get('a[href="/login"]'),
    logoutButton: () => cy.get('a[href="/logout"]'),
    deleteAccountButton: () => cy.get('a[href="/delete_account"]'),
    loggedInAsText: () => cy.get("li > a > b"),

    // Menu de navegação
    homeLink: () => cy.get('a[href="/"]').contains("Home"),
    productsLink: () => cy.get('a[href="/products"]'),
    cartLink: () => cy.get('a[href="/view_cart"]'),
    contactUsLink: () => cy.get('a[href="/contact_us"]'),
    testCasesLink: () => cy.get('a[href="/test_cases"]'),

    // Rodapé
    subscriptionTitle: () => cy.get(".single-widget > h2"),
    subscriptionEmail: () => cy.get("#susbscribe_email"),
    subscriptionButton: () => cy.get("#subscribe"),
    successMessage: () => cy.get(".alert-success"),
  };

  /**
   * Visita a página inicial
   */
  visit() {
    cy.visit("/");
    // Verifica se a página foi carregada corretamente
    this.elements.logo().should("be.visible");
  }

  /**
   * Clica no botão Signup/Login
   */
  clickSignupLogin() {
    this.elements.signupLoginButton().click();
  }

  /**
   * Clica no botão Logout
   */
  clickLogout() {
    this.elements.logoutButton().click();
  }

  /**
   * Clica no botão Delete Account
   */
  clickDeleteAccount() {
    this.elements.deleteAccountButton().click();
  }

  /**
   * Verifica se o usuário está logado
   * @param {string} username - Nome do usuário esperado
   */
  verifyLoggedInAs(username) {
    this.elements.loggedInAsText().should("have.text", username);
  }

  /**
   * Clica no link Products
   */
  clickProducts() {
    this.elements.productsLink().click();
  }

  /**
   * Clica no link Contact Us
   */
  clickContactUs() {
    this.elements.contactUsLink().click();
  }

  /**
   * Preenche o campo de email de subscrição
   * @param {string} email - Email para subscrição
   */
  fillSubscriptionEmail(email) {
    this.elements.subscriptionEmail().scrollIntoView().type(email);
  }

  /**
   * Clica no botão de subscrição
   */
  clickSubscriptionButton() {
    this.elements.subscriptionButton().click();
  }

  /**
   * Verifica se a mensagem de sucesso foi exibida
   */
  verifySuccessMessage() {
    this.elements
      .successMessage()
      .should("be.visible")
      .and("contain", "You have been successfully subscribed!");
  }

  /**
   * Verifica se o título de subscrição está visível
   */
  verifySubscriptionTitle() {
    this.elements
      .subscriptionTitle()
      .scrollIntoView()
      .should("be.visible")
      .and("have.text", "Subscription");
  }
}

export default HomePage;
