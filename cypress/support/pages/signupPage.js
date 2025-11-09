/**
 * Page Object para a página de cadastro (Account Information)
 * Contém seletores e métodos para preencher informações da conta
 */

class SignupPage {
  /**
   * Seletores CSS da página de cadastro
   */
  elements = {
    // Título
    pageTitle: () => cy.get(".login-form > .text-center > b"),

    // Informações da conta
    titleMr: () => cy.get("#id_gender1"),
    titleMrs: () => cy.get("#id_gender2"),
    password: () => cy.get("#password"),

    // Data de nascimento
    dayOfBirth: () => cy.get("#days"),
    monthOfBirth: () => cy.get("#months"),
    yearOfBirth: () => cy.get("#years"),

    // Checkboxes
    newsletterCheckbox: () => cy.get("#newsletter"),
    specialOffersCheckbox: () => cy.get("#optin"),

    // Informações de endereço
    firstName: () => cy.get("#first_name"),
    lastName: () => cy.get("#last_name"),
    company: () => cy.get("#company"),
    address1: () => cy.get("#address1"),
    address2: () => cy.get("#address2"),
    country: () => cy.get("#country"),
    state: () => cy.get("#state"),
    city: () => cy.get("#city"),
    zipcode: () => cy.get("#zipcode"),
    mobileNumber: () => cy.get("#mobile_number"),

    // Botões
    createAccountButton: () => cy.get('button[data-qa="create-account"]'),
    continueButton: () => cy.get('a[data-qa="continue-button"]'),

    // Mensagens
    accountCreatedMessage: () => cy.get('h2[data-qa="account-created"]'),
    accountDeletedMessage: () => cy.get('h2[data-qa="account-deleted"]'),
  };

  /**
   * Verifica se está na página de informações da conta
   */
  verifyAccountInfoPage() {
    this.elements.pageTitle().should("contain", "Enter Account Information");
  }

  /**
   * Preenche informações da conta
   * @param {Object} accountData - Objeto com dados da conta
   * @param {string} password - Senha do usuário (opcional, vem de userData.password)
   */
  fillAccountInformation(accountData, password = null) {
    // Seleciona o título (Mr./Mrs.)
    if (accountData.gender === "Mr") {
      this.elements.titleMr().check();
    } else {
      this.elements.titleMrs().check();
    }

    // Preenche senha - usa o parâmetro password se fornecido, senão tenta accountData.password
    const passwordToUse = password || accountData.password;
    if (passwordToUse) {
      this.elements.password().type(passwordToUse);
    }

    // Seleciona data de nascimento
    this.elements.dayOfBirth().select(accountData.day);
    this.elements.monthOfBirth().select(accountData.month);
    this.elements.yearOfBirth().select(accountData.year);

    // Marca checkboxes opcionais
    if (accountData.newsletter) {
      this.elements.newsletterCheckbox().check();
    }
    if (accountData.specialOffers) {
      this.elements.specialOffersCheckbox().check();
    }
  }

  /**
   * Preenche informações de endereço
   * @param {Object} addressData - Objeto com dados de endereço
   */
  fillAddressInformation(addressData) {
    this.elements.firstName().type(addressData.firstName);
    this.elements.lastName().type(addressData.lastName);
    this.elements.company().type(addressData.company);
    this.elements.address1().type(addressData.address1);
    this.elements.address2().type(addressData.address2);
    this.elements.country().select(addressData.country);
    this.elements.state().type(addressData.state);
    this.elements.city().type(addressData.city);
    this.elements.zipcode().type(addressData.zipcode);
    this.elements.mobileNumber().type(addressData.mobileNumber);
  }

  /**
   * Clica no botão Create Account
   */
  clickCreateAccount() {
    this.elements.createAccountButton().click();
  }

  /**
   * Verifica mensagem de conta criada
   */
  verifyAccountCreated() {
    this.elements
      .accountCreatedMessage()
      .should("be.visible")
      .and("have.text", "Account Created!");
  }

  /**
   * Clica no botão Continue
   */
  clickContinue() {
    this.elements.continueButton().click();
  }

  /**
   * Verifica mensagem de conta deletada
   */
  verifyAccountDeleted() {
    this.elements
      .accountDeletedMessage()
      .should("be.visible")
      .and("have.text", "Account Deleted!");
  }

  /**
   * Preenche todo o formulário de registro
   * @param {Object} userData - Dados completos do usuário (deve conter account, address e password)
   */
  completeRegistration(userData) {
    // Passa a senha separadamente para o método fillAccountInformation
    this.fillAccountInformation(userData.account, userData.password);
    this.fillAddressInformation(userData.address);
    this.clickCreateAccount();
  }
}

export default SignupPage;
