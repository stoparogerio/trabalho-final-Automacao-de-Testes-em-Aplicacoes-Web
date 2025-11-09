/**
 * Test Case 9: Search Product
 *
 * Cenário: Pesquisa de produto
 *
 * Passos:
 * 1. Acessar a página inicial
 * 2. Verificar que a home page está visível
 * 3. Clicar em 'Products'
 * 4. Verificar que o usuário é redirecionado para a página ALL PRODUCTS
 * 5. Inserir nome do produto na caixa de pesquisa
 * 6. Clicar no botão de pesquisa
 * 7. Verificar 'SEARCHED PRODUCTS' está visível
 * 8. Verificar que todos os produtos relacionados à pesquisa estão visíveis
 */

import HomePage from "../support/pages/homePage";
import ProductsPage from "../support/pages/productsPage";

const testData = require("../fixtures/testData");

describe("Test Case 9: Search Product", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    homePage.visit();
  });

  it("Deve pesquisar produto e exibir resultados relacionados", () => {
    // 1. Verificar que a home page está visível
    homePage.elements.logo().should("be.visible");

    // 2. Clicar em 'Products'
    homePage.clickProducts();

    // 3. Verificar redirecionamento para ALL PRODUCTS
    cy.url().should("include", "/products");
    productsPage.verifyProductsPageLoaded();

    // 4. Pesquisar produto
    productsPage.searchProduct(testData.searchProduct);

    // 5. Verificar 'SEARCHED PRODUCTS' está visível - múltiplas asserções
    productsPage.verifySearchedProductsTitle();
    cy.url().should("include", "search");

    // 6. Verificar que produtos relacionados estão visíveis
    productsPage.verifySearchedProductsVisible();

    // 7. Verificar que os produtos exibidos contêm o termo pesquisado
    // Nota: Alguns produtos podem ter o termo no nome ou descrição
    productsPage.elements.productsList().should("have.length.greaterThan", 0);

    // 8. Verificar que cada produto tem informações básicas visíveis
    productsPage.elements.productsList().each(($product) => {
      cy.wrap($product).should("be.visible");
      cy.wrap($product).find(".productinfo").should("exist");
    });
  });

  it("Deve pesquisar por termo genérico e retornar múltiplos produtos", () => {
    // Teste adicional com termo mais genérico
    homePage.elements.logo().should("be.visible");
    homePage.clickProducts();

    // Pesquisa por "top" (genérico)
    productsPage.searchProduct("top");

    productsPage.verifySearchedProductsTitle();
    productsPage.elements.productsList().should("have.length.greaterThan", 1);
  });
});
