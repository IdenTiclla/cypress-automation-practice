describe('Test suite for testing popups and alerts', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html")
    })
    it('Default test case', () => {
        cy.contains("WebdriverUniversity.com (Popups & Alerts)")
        cy.contains("Annoying Popup & Alerts!")

        cy.contains("JavaScript Alert")
        cy.contains("Modal Popup")
        cy.contains("Ajax Loader")
        cy.contains("JavaScript Confirm Box")

        cy.get("div#main-header ~ div[class*='col-sm']").should('have.length', 4)

        cy.get("div#main-header ~ div[class*='col-sm'] span").should('have.length', 4)

    })
    it('Test 1 - Javascript alert test', () => {
        cy.get('span#button1').click()
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('I am an alert box!');
        })  
    })
    it.only('Test 2 - Modal Popup', () => {
        cy.get("div#myModal > div").should('not.be.visible')
        cy.get('span#button2').click()
        cy.get("div#myModal > div").should('be.visible')
        cy.get("div#myModal  div.modal-header h4").should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.get("div#myModal  div.modal-body p").should('have.text', 'We can inject and use JavaScript code if all else fails! Remember always try to use WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).')

        cy.get('#myModal > div > div > div.modal-footer > button').click()
        cy.get("div#myModal > div").should('not.be.visible')

    })
})
