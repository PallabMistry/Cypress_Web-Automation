const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    reporter:"mochawesome",
    reporterOptions:{
      reportDir:"cypress/reports",
      overwright:false,
      html: true,
      json: true,
      charts: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
