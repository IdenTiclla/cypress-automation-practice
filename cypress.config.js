const { defineConfig } = require("cypress");
require ('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.email = process.env.CYPRESS_email
      config.env.password = process.env.CYPRESS_password
      return config
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
  },
});
