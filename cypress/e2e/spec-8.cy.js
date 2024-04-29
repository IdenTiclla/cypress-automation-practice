describe('Test suite for scrolling tests', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Scrolling/index.html")
    }) 
    it('Test 0 - Default test for scroll test page', () => {
        cy.title().should('eq', 'WebDriver | Scrolling')
        cy.contains("WebDriver (Scrolling)")
        cy.contains("Just Scrolling Around!")
    })
})