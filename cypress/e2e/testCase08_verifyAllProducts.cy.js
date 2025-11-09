/**
 * Test Case 8: Verify All Products and product detail page
 *
 * Cenário: Verificação da página de produtos e detalhes de produto
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Products'
 * 4. Verificar que o usuário é redirecionado para a página ALL PRODUCTS
 * 5. Verificar que a lista de produtos está visível
 * 6. Clicar em 'View Product' do primeiro produto
 * 7. O usuário é redirecionado para a página de detalhes do produto
 * 8. Verificar que os detalhes estão visíveis: product name, category, price, availability, condition, brand
 */

import HomePage from "../support/pages/homePage";
import ProductsPage from "../support/pages/productsPage";

describe("Test Case 8: Verify All Products and product detail page", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    homePage.visit();
  });

  it("Deve exibir todos os produtos e os detalhes do produto", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Products'
    homePage.clickProducts();

    // 3. Verificar redirecionamento para ALL PRODUCTS - múltiplas asserções
    cy.url().should("include", "/products");
    productsPage.verifyProductsPageLoaded();

    // 4. Verificar que a lista de produtos está visível
    productsPage.verifyProductsListVisible();

    // 5. Verificar quantidade de produtos (deve ter mais de 1)
    productsPage.elements.productsList().should("have.length.greaterThan", 1);

    // 6. Clicar em 'View Product' do primeiro produto
    productsPage.clickFirstViewProduct();

    // 7. Verificar redirecionamento para página de detalhes
    cy.url().should("include", "/product_details/");

    // 8. Verificar que os detalhes do produto estão visíveis - múltiplas asserções
    productsPage.verifyProductDetails();

    // Verificações adicionais de detalhes específicos
    productsPage.elements.productName().should("not.be.empty");
    productsPage.elements.productPrice().should("contain", "Rs.");
    productsPage.elements.productCategory().should("contain", "Category:");
    productsPage.elements
      .productAvailability()
      .should("contain", "Availability:");
    productsPage.elements.productCondition().should("contain", "Condition:");
    productsPage.elements.productBrand().should("contain", "Brand:");
  });
});
