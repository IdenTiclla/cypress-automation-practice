import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

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

// third scenario

When('I perform search with the keywords', (dataTable) => {
    const keywords = dataTable.rawTable[0]

    keywords.forEach(keyword => {
        cy.get("textarea[name='q']").type(`${keyword}{enter}`)
        cy.wait(2000)
        cy.visit('https://google.com')
    })
})

Then('The search page is displayed', () => {
    cy.get("textarea[name='q']").should('be.visible')
})