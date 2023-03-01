const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  failOnStatusCode: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.saucedemo.com',

    env: {
      user: 'standard_user',
      password: 'secret_souce',
    },
  },
})
