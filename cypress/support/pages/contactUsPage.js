/**
 * Page Object para a página de Contato
 * Contém seletores e métodos para o formulário de contato
 */

class ContactUsPage {
  /**
   * Seletores CSS da página de contato
   */
  elements = {
    // Título
    pageTitle: () => cy.get(".contact-form > .title"),
    getInTouchTitle: () => cy.get(".contact-form > h2").first(),

    // Formulário
    nameInput: () => cy.get('input[data-qa="name"]'),
    emailInput: () => cy.get('input[data-qa="email"]'),
    subjectInput: () => cy.get('input[data-qa="subject"]'),
    messageTextarea: () => cy.get('textarea[data-qa="message"]'),
    uploadFileInput: () => cy.get('input[name="upload_file"]'),
    submitButton: () => cy.get('input[data-qa="submit-button"]'),

    // Mensagens
    successMessage: () => cy.get(".status.alert.alert-success"),
    homeButton: () => cy.get(".btn.btn-success"),
  };

  /**
   * Verifica se o título "Get In Touch" está visível
   */
  verifyGetInTouchVisible() {
    this.elements
      .getInTouchTitle()
      .should("be.visible")
      .and("have.text", "Get In Touch");
  }

  /**
   * Preenche o formulário de contato
   * @param {Object} contactData - Dados do formulário
   */
  fillContactForm(contactData) {
    this.elements.nameInput().type(contactData.name);
    this.elements.emailInput().type(contactData.email);
    this.elements.subjectInput().type(contactData.subject);
    this.elements.messageTextarea().type(contactData.message);
  }

  /**
   * Faz upload de um arquivo
   * @param {string} filePath - Caminho do arquivo
   */
  uploadFile(filePath) {
    this.elements.uploadFileInput().selectFile(filePath);
  }

  /**
   * Clica no botão Submit
   */
  clickSubmit() {
    this.elements.submitButton().click();
  }

  /**
   * Aceita o alert de confirmação
   */
  acceptAlert() {
    // Cypress lida automaticamente com alerts, mas podemos escutar
    cy.on("window:confirm", () => true);
  }

  /**
   * Verifica mensagem de sucesso
   */
  verifySuccessMessage() {
    this.elements
      .successMessage()
      .should("be.visible")
      .and(
        "contain",
        "Success! Your details have been submitted successfully."
      );
  }

  /**
   * Clica no botão Home
   */
  clickHome() {
    this.elements.homeButton().click();
  }
}

export default ContactUsPage;
