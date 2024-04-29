describe('Test suite for scrolling tests', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Scrolling/index.html")
    }) 
    it('Test 0 - Default test for scroll test page', () => {
        cy.title().should('eq', 'WebDriver | Scrolling')
        cy.contains("WebDriver (Scrolling)")
        cy.contains("Just Scrolling Around!")
    })
    it.only('Test 1 - Test for scroll elements', () => {
        cy.get('div#zone1').scrollIntoView().should('be.visible')

        cy.get("div#zone1").realHover()
        cy.wait(1000)

        cy.get('div#zone2').scrollIntoView().should('be.visible')
        cy.get("div#zone2").realHover()
        cy.wait(1000)
        
        cy.get('div#zone3').scrollIntoView().should('be.visible')
        cy.get("div#zone3").realHover()
        cy.wait(1000)


        cy.get('div#zone4').scrollIntoView().should('be.visible')


        
    })
})