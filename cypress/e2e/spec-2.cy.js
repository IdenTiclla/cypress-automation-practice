describe('My test suite', () => {

    // 
    // https://demoqa.com/
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it('My test 1', () => {
        cy.title().should('eq', 'Swag Labs')
    })

    it('My test 2', () => {
        // cy.visit('https://www.saucedemo.com/v1/')
        cy.get("input[data-test='username']").type('standard_user')
        cy.get("input[data-test='password']").type('secret_sauce')
        cy.get('input#login-button').click()
    })
})




