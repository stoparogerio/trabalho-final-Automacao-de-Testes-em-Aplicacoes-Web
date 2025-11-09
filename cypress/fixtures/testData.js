/**
 * Arquivo de fixtures com dados de teste
 * Centraliza dados reutilizáveis nos testes
 */

module.exports = {
  /**
   * Dados de usuário para cadastro
   * Usa timestamp para garantir emails únicos
   */
  user: {
    name: "Test User",
    // Email será gerado dinamicamente nos testes para garantir unicidade
    email: "testuser@example.com", // Email base (deve ser sobrescrito nos testes)
    password: "Test@123",

    account: {
      gender: "Mr",
      day: "15",
      month: "June",
      year: "1990",
      newsletter: true,
      specialOffers: true,
    },

    address: {
      firstName: "Test",
      lastName: "User",
      company: "Test Company",
      address1: "123 Test Street",
      address2: "Apartment 4B",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      zipcode: "90001",
      mobileNumber: "+1234567890",
    },
  },

  /**
   * Dados de login para usuário existente
   */
  existingUser: {
    email: "testuser@example.com",
    password: "Test@123",
  },

  /**
   * Dados inválidos para teste de login
   */
  invalidUser: {
    email: "invalid@example.com",
    password: "wrongpassword",
  },

  /**
   * Dados do formulário de contato
   */
  contactForm: {
    name: "Test User",
    email: "testuser@example.com",
    subject: "Test Subject",
    message: "This is a test message for the contact form automation.",
  },

  /**
   * Nome de produto para pesquisa
   */
  searchProduct: "Blue Top",

  /**
   * Email para subscrição (será gerado dinamicamente nos testes)
   */
  subscriptionEmail: "subscriber@example.com", // Email base

  /**
   * Função helper para gerar email único
   * @returns {string} Email único com timestamp
   */
  generateUniqueEmail: () => `testuser${Date.now()}@example.com`,

  /**
   * Dados de pagamento (fictícios para teste)
   */
  payment: {
    nameOnCard: "Test User",
    cardNumber: "4532015112830366",
    cvc: "123",
    expiryMonth: "12",
    expiryYear: "2025",
  },

  /**
   * Comentário do pedido
   */
  orderComment: "Please deliver between 9 AM and 5 PM",
};
