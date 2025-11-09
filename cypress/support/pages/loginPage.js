/**
 * Page Object para a página de Login/Signup
 * Contém seletores e métodos para login e cadastro de usuários
 */

class LoginPage {
  /**
   * Seletores CSS da página de login/signup
   */
  elements = {
    // Seção de Signup
    signupTitle: () => cy.get(".signup-form > h2"),
    signupName: () => cy.get('input[data-qa="signup-name"]'),
    signupEmail: () => cy.get('input[data-qa="signup-email"]'),
    signupButton: () => cy.get('button[data-qa="signup-button"]'),

    // Seção de Login
    loginTitle: () => cy.get(".login-form > h2"),
    loginEmail: () => cy.get('input[data-qa="login-email"]'),
    loginPassword: () => cy.get('input[data-qa="login-password"]'),
    loginButton: () => cy.get('button[data-qa="login-button"]'),

    // Mensagens de erro
    errorMessage: () => cy.get(".login-form > form > p"),
  };

  /**
   * Verifica se a página de login foi carregada
   */
  verifyLoginPageLoaded() {
    this.elements
      .loginTitle()
      .should("be.visible")
      .and("have.text", "Login to your account");
  }

  /**
   * Verifica se o formulário de signup está visível
   */
  verifySignupFormVisible() {
    this.elements
      .signupTitle()
      .should("be.visible")
      .and("have.text", "New User Signup!");
  }

  /**
   * Preenche o formulário de signup
   * @param {string} name - Nome do usuário
   * @param {string} email - Email do usuário
   */
  fillSignupForm(name, email) {
    this.elements.signupName().type(name);
    this.elements.signupEmail().type(email);
  }

  /**
   * Clica no botão de signup
   */
  clickSignupButton() {
    this.elements.signupButton().click();
  }

  /**
   * Preenche o formulário de login
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   */
  fillLoginForm(email, password) {
    this.elements.loginEmail().type(email);
    this.elements.loginPassword().type(password);
  }

  /**
   * Clica no botão de login
   */
  clickLoginButton() {
    this.elements.loginButton().click();
  }

  /**
   * Verifica mensagem de erro
   * @param {string} message - Mensagem esperada
   */
  verifyErrorMessage(message) {
    this.elements.errorMessage().should("be.visible").and("contain", message);
  }

  /**
   * Realiza login completo (preenche e submete)
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   */
  doLogin(email, password) {
    this.fillLoginForm(email, password);
    this.clickLoginButton();
  }

  /**
   * Realiza signup completo (preenche e submete)
   * @param {string} name - Nome do usuário
   * @param {string} email - Email do usuário
   */
  doSignup(name, email) {
    this.fillSignupForm(name, email);
    this.clickSignupButton();
  }
}

export default LoginPage;
