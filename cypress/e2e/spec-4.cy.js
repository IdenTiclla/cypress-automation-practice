describe('My test suite 4', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Accordion/index.html")
    })
    
    it("Test 0 - accordions page", () => {
        cy.title().should('eq', 'Accordion Items')
    })

    it("Test 1 - First accordion", () => {
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
    it("Test 3 - Third accordion", () => {
        cy.get("button#automation-accordion").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("button#automation-accordion").click()

        cy.get("button#automation-accordion").should('have.attr', 'class').and('contain', 'active')
        cy.get("div#automation-testing-description p").should('have.text', 'Automation testing has been steadily grown in popularity these past few years thanks to the time/ cost savings and efficiency that it offers. Companies throughout the world have or plan to use automation testing to rapidly speed up their test capabilities. Automation test engineers are in great demand and offer an average salary of £45,000+ (2018). Now is a great time to learn about automation test engineering and this course has been carefully developed to slowly introduce you from the basics, all the way to building advanced frameworks.')
    })
    it.only("Test 4 - Last accordion component", () => {
        cy.contains("LOADING.. PLEASE WAIT..").should('be.visible')
        
        cy.contains('LOADING COMPLETE.',{ timeout: 10000 }).should('be.visible')
        cy.get("button#click-accordion").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("button#click-accordion").click()
        cy.get("button#click-accordion").should('have.attr', 'class').and('contain', 'active')

        cy.get("div#timeout").should('have.text', 'This text has appeared after 5 seconds!')

    })
})