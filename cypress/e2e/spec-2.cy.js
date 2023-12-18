describe('My test suite', () => {
    // https://demoqa.com/
    // beforeEach(() => {
    //     cy.visit('https://www.saucedemo.com/v1/')
    // })
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    it('Web element click', () => {
        cy.visit("https://webdriveruniversity.com/Click-Buttons/index.html")
        cy.get("div#main-header > h1").should('have.text', 'Lets Get Clicking!')
    })
})




