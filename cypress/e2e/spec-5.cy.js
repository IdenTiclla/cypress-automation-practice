describe('My test suite 4', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Page-Object-Model/index.html")
    })
    it.only("Test 0 - Default test", () => {
        cy.title().should('eq', 'WebDriver | Page Object Model')
        cy.contains("WebdriverUniversity.com (Page Object Model)")
        cy.get("ul.nav.navbar-nav li").should('have.length', 3)
        cy.get("ul li:nth-of-type(1)").should('have.text', 'Home').and('have.attr', 'class').and('contain', 'active')
        cy.get("ul li:nth-of-type(2)").should('have.text', 'Our Products')
        cy.get("ul li:nth-of-type(3)").should('have.text', 'Contact Us')
        cy.get("div.row > div.col-md-12 div[class='row'] > div").should('have.length', 4)
    })

    // div.item:nth-of-type(2)
    
})