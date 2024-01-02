describe('My test suite 4', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Accordion/index.html")
    })
    
    it("Test 0 - accordions page", () => {
        cy.title().should('eq', 'Accordion Items')
    })

    it.only("Test 1 - First accordion", () => {
        // cy.get("div#manual-testing-description").should('not.be.visible')

        cy.get("button#manual-testing-accordion").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("button#manual-testing-accordion").click()

        cy.get("button#manual-testing-accordion").should('have.attr', 'class').and('contain', 'active')
        cy.get("div#manual-testing-description").should('be.visible')
    })
})