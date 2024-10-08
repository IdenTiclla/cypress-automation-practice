const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin


require ('dotenv').config()

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.email = process.env.CYPRESS_email
      config.env.password = process.env.CYPRESS_password

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
    
      on('file:preprocessor', bundler)
      // preprocesador de cucumber
      await addCucumberPreprocessorPlugin(on, config)

      return config
    },
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // para pruebas tradicionales
      'cypress/e2e/cucumber/**/*.feature', // para pruebas de cucumber
    ],
    stepDefinitions: 'cypress/e2e/cucumber/step_definitions', // definicion de pasos

    // otras configuraciones...
    supportFile: 'cypress/support/e2e.js',
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    chromeWebSecurity: false
  },
});
