// ***********************************************************
// Este arquivo é processado e carregado automaticamente antes
// dos arquivos de teste. É um ótimo lugar para colocar
// comportamentos globais e configurações que modificam o Cypress.
// ***********************************************************

// Importa comandos customizados
import "./commands";

// Importa o reporter mochawesome para gerar relatórios
import "cypress-mochawesome-reporter/register";

// Desabilita exceções não capturadas que podem fazer os testes falharem
// Útil quando a aplicação testada tem erros de console que não afetam o teste
Cypress.on("uncaught:exception", (err, runnable) => {
  // Retornando false aqui previne que o Cypress falhe o teste
  // por causa de exceções não capturadas
  return false;
});
