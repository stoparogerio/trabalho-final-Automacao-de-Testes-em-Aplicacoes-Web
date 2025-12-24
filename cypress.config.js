const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL base da aplicação - evita repetir a URL em cada teste
    baseUrl: "https://automationexercise.com",

    // Configurações de viewport (resolução da tela)
    viewportWidth: 1536,
    viewportHeight: 960,

    // Configurações de timeout - aumentados para operações mais lentas
    defaultCommandTimeout: 30000, // Tempo máximo de espera para comandos (30s)
    pageLoadTimeout: 120000, // Tempo máximo para carregar uma página (120s)
    requestTimeout: 30000, // Tempo máximo para requisições (30s)
    responseTimeout: 30000, // Tempo máximo para respostas (30s)
    execTimeout: 90000, // Tempo máximo para execução de comandos (90s)

    // Retry automático em caso de falha
    retries: {
      runMode: 2, // Retry 2 vezes em modo run
      openMode: 0, // Sem retry em modo interativo
    },

    // Configuração de vídeos - serão salvos automaticamente
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",

    // Configuração de screenshots - captura automática em falhas
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",

    // Desabilita testes de exemplo do Cypress
    experimentalStudio: false,

    setupNodeEvents(on, config) {
      // Configuração do reporter Mochawesome para gerar relatórios HTML
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },

  // Configuração do reporter - gera relatórios bonitos em HTML
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true, // Gráficos nos relatórios
    reportPageTitle: "Relatório de Testes - AutomationExercise",
    embeddedScreenshots: true, // Screenshots incorporadas no relatório
    inlineAssets: true, // Assets inline no HTML
    saveAllAttempts: false,
    reportDir: "cypress/reports", // Pasta onde os relatórios serão salvos
    overwrite: false,
    html: true,
    json: true,
  },
});
