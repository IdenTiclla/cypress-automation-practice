import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("The user is on the search page", () => {
    cy.visit('https://google.com')
})
When("The user search for cats", () => {
    cy.get("textarea[name='q']").type('cats{enter}')
})
Then("The user see the results page for cats", () => {
    cy.get('title').should('have.text', 'cats - Buscar con Google')
})

When("The user search for {string}", (keyword) => {
    cy.get("textarea[name='q']").type(`${keyword }{enter}`)
})

Then("The user see the results page for dogs" , () => {
    cy.get('title').should('have.text', 'dogs - Buscar con Google')
})