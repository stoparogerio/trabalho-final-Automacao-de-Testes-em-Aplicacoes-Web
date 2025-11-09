/**
 * Page Object para a página de Produtos
 * Contém seletores e métodos relacionados aos produtos
 */

class ProductsPage {
  /**
   * Seletores CSS da página de produtos
   */
  elements = {
    // Título e lista de produtos
    pageTitle: () => cy.get(".title.text-center"),
    allProducts: () => cy.get(".features_items"),
    productsList: () => cy.get(".single-products"),

    // Barra de pesquisa
    searchInput: () => cy.get("#search_product"),
    searchButton: () => cy.get("#submit_search"),

    // Título de produtos pesquisados
    searchedProductsTitle: () => cy.get(".title.text-center"),

    // Botão View Product
    viewProductButton: () => cy.get(".choose > .nav > li > a").first(),

    // Detalhes do produto
    productName: () => cy.get(".product-information > h2"),
    productCategory: () => cy.get(".product-information > p").first(),
    productPrice: () => cy.get(".product-information > span > span"),
    productAvailability: () => cy.get(".product-information > p").eq(1),
    productCondition: () => cy.get(".product-information > p").eq(2),
    productBrand: () => cy.get(".product-information > p").eq(3),
  };

  /**
   * Verifica se a página de produtos foi carregada
   */
  verifyProductsPageLoaded() {
    this.elements
      .pageTitle()
      .should("be.visible")
      .and("have.text", "All Products");
  }

  /**
   * Verifica se a lista de produtos está visível
   */
  verifyProductsListVisible() {
    this.elements.allProducts().should("be.visible");
    this.elements.productsList().should("have.length.greaterThan", 0);
  }

  /**
   * Clica no primeiro botão View Product
   */
  clickFirstViewProduct() {
    this.elements.viewProductButton().click();
  }

  /**
   * Verifica os detalhes do produto
   */
  verifyProductDetails() {
    // Verifica se todos os detalhes estão visíveis
    this.elements.productName().should("be.visible");
    this.elements.productCategory().should("be.visible");
    this.elements.productPrice().should("be.visible");
    this.elements.productAvailability().should("be.visible");
    this.elements.productCondition().should("be.visible");
    this.elements.productBrand().should("be.visible");
  }

  /**
   * Pesquisa por um produto
   * @param {string} productName - Nome do produto a ser pesquisado
   */
  searchProduct(productName) {
    this.elements.searchInput().type(productName);
    this.elements.searchButton().click();
  }

  /**
   * Verifica se o título de produtos pesquisados está visível
   */
  verifySearchedProductsTitle() {
    this.elements
      .searchedProductsTitle()
      .should("be.visible")
      .and("have.text", "Searched Products");
  }

  /**
   * Verifica se os produtos pesquisados estão visíveis
   */
  verifySearchedProductsVisible() {
    this.elements.productsList().should("have.length.greaterThan", 0);
    this.elements.productsList().should("be.visible");
  }
}

export default ProductsPage;
