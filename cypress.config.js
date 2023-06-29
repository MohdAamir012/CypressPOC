const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    return config;
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      this.screenshotOnRunSuccess=true;

      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
}); 