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
        cy.get("div#myModalClick button[class='btn btn-default']").click()

        cy.get('div.modal-content').should('not.be.visible')        
    })

    it("Test 4 - Testing second button", () => {
        cy.get('div#myModalJSClick div.modal-content').should('not.be.visible')
        cy.get('span#button2').click()
        cy.get('div#myModalJSClick div.modal-content').should('be.visible')


        cy.get('div#myModalJSClick div.modal-content').contains('It’s that Easy!! Well I think it is.....')
        cy.get('div#myModalJSClick div.modal-content').contains('We can use JavaScript code if all else fails! Remember always try to use the WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).')
        // cy.contains("Close").click() This is causing error
        cy.get("div#myModalJSClick  button[class='btn btn-default']").click()
        cy.get("div#myModalJSClick div.modal-content").find("button")
        cy.get('div#myModalJSClick div.modal-content').should('not.be.visible')                

    })
})




