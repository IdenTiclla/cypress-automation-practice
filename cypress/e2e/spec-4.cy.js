describe('My test suite 4', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Accordion/index.html")
    })
    
    it.only("Test 0 - accordions page", () => {
        cy.title().should('eq', 'Accordion Items')
    })
})