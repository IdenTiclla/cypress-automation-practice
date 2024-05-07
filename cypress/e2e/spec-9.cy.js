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
    it.only('Test 1 - Javascript alert test', () => {
        cy.get('span#button1').click()
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('I am an alert box!');
        })  
    })
})
