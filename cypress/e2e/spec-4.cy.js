describe('My test suite 4', () => {
    it('Test 0', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('div.row > div.row > div.col-md-12').should('have.length', 17)
    })
})