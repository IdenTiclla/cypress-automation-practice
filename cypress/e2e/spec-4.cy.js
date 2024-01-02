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

        cy.get("div#manual-testing-description p").should('have.text', 'Manual testing has for some time been the most popular way to test code. For this method, the tester plays an important role of end user and verifies that all the features of the application work correctly. Manual testing however is on the decline. Companies and developers have realised the efficiency, accuracy and cost savings that is possible by adopting the use of automation testing.')
    })
    it("Test 2 - Second accordion", () => {
        cy.get("button#cucumber-accordion").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("button#cucumber-accordion").click()

        cy.get("button#cucumber-accordion").should('have.attr', 'class').and('contain', 'active')
        cy.get("button#cucumber-accordion").should('be.visible')

        cy.get("div#cucumber-testing-description p").should('have.text', 'Cucumber (BDD) simplifies the requirement capturing process. Requirements can be captured, broken down and simplified effortlessly; making the captured requirements readable to anyone within the organisation and in turn providing the required details and backbone to develop accurate test cases also known as ‘Feature Files’.')
    })
})