describe('My test suite', () => {
    // https://demoqa.com/
    // beforeEach(() => {
    //     cy.visit('https://www.saucedemo.com/v1/')
    // })


    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Click-Buttons/index.html")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    it ('Test 0 - Page Title', () => {
        cy.title().should('eq', 'WebDriver | Button Clicks')
    })

    it('Test 1 - Page content', () => {
        cy.get("div#main-header > h1").should('have.text', 'Lets Get Clicking!')
        cy.contains("Lets Get Clicking!")
        cy.contains("WebdriverUniversity.com (Button Clicks)")

    })
    it('Test 2 - Three components', () => {
        cy.get('div.col-sm-4.col-lg-4.col-md-4').should('have.length', 3)
        cy.get("span[type='button']").should('have.length', 3)
    })

    it('Test 3 - Testing the first button', () => {
        cy.get('div.modal-content').should('not.be.visible')
        cy.get('span#button1').click()
        cy.get('div.modal-content').should('be.visible')

        cy.get('div.modal-content').contains('Congratulations!')
        cy.get('div.modal-content').contains('Well done for successfully using the click() method!')

        // cy.get('div.modal-content').find('button').click() this is causing an exception
        cy.contains('Close').click()

        cy.get('div.modal-content').should('not.be.visible')        
    })
})




