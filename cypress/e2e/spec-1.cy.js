describe('Login Portal', () => {
    it('Test 1', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.title().should('eq', 'WebDriver | Login Portal')
    })
})