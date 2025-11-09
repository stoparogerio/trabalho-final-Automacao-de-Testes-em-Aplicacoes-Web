/**
 * Page Object para a página de Carrinho e Checkout
 * Contém seletores e métodos relacionados ao carrinho e checkout
 */

class CartPage {
  /**
   * Seletores CSS da página de carrinho
   */
  elements = {
    // Carrinho
    cartInfo: () => cy.get("#cart_info"),
    cartProducts: () => cy.get(".cart_description"),
    proceedToCheckoutButton: () => cy.get(".btn.btn-default.check_out"),

    // Modal de registro/login
    registerLoginLink: () => cy.get('.modal-body a[href="/login"]'),

    // Página de Checkout
    addressDetails: () => cy.get("#address_delivery"),
    reviewOrder: () => cy.get("#cart_info"),
    commentTextarea: () => cy.get('textarea[name="message"]'),
    placeOrderButton: () => cy.get('a[href="/payment"]'),

    // Página de Pagamento
    nameOnCard: () => cy.get('input[data-qa="name-on-card"]'),
    cardNumber: () => cy.get('input[data-qa="card-number"]'),
    cvc: () => cy.get('input[data-qa="cvc"]'),
    expiryMonth: () => cy.get('input[data-qa="expiry-month"]'),
    expiryYear: () => cy.get('input[data-qa="expiry-year"]'),
    payAndConfirmButton: () => cy.get('button[data-qa="pay-button"]'),

    // Mensagens de sucesso
    successMessage: () => cy.get(".alert-success"),
    orderPlacedMessage: () => cy.get('h2[data-qa="order-placed"]'),
  };

  /**
   * Verifica se o carrinho está visível
   */
  verifyCartPage() {
    this.elements.cartInfo().should("be.visible");
  }

  /**
   * Clica em Proceed to Checkout
   */
  clickProceedToCheckout() {
    this.elements.proceedToCheckoutButton().click();
  }

  /**
   * Clica no link Register/Login no modal
   */
  clickRegisterLogin() {
    this.elements.registerLoginLink().click();
  }

  /**
   * Verifica detalhes do endereço na página de checkout
   */
  verifyAddressDetails() {
    this.elements.addressDetails().should("be.visible");
  }

  /**
   * Verifica a revisão do pedido
   */
  verifyReviewOrder() {
    this.elements.reviewOrder().should("be.visible");
  }

  /**
   * Adiciona comentário sobre o pedido
   * @param {string} comment - Comentário
   */
  addOrderComment(comment) {
    this.elements.commentTextarea().type(comment);
  }

  /**
   * Clica em Place Order
   */
  clickPlaceOrder() {
    this.elements.placeOrderButton().click();
  }

  /**
   * Preenche informações de pagamento
   * @param {Object} paymentData - Dados do cartão
   */
  fillPaymentDetails(paymentData) {
    this.elements.nameOnCard().type(paymentData.nameOnCard);
    this.elements.cardNumber().type(paymentData.cardNumber);
    this.elements.cvc().type(paymentData.cvc);
    this.elements.expiryMonth().type(paymentData.expiryMonth);
    this.elements.expiryYear().type(paymentData.expiryYear);
  }

  /**
   * Clica em Pay and Confirm Order
   */
  clickPayAndConfirm() {
    this.elements.payAndConfirmButton().click();
  }

  /**
   * Verifica mensagem de pedido realizado com sucesso
   */
  verifyOrderSuccess() {
    this.elements.successMessage().should("be.visible");
    this.elements.orderPlacedMessage().should("be.visible");
  }
}

export default CartPage;
