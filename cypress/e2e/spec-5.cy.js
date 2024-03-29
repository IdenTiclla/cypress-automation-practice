describe('My test suite 4', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Page-Object-Model/index.html")
    })
    it("Test 0 - Default test", () => {
        cy.title().should('eq', 'WebDriver | Page Object Model')
        cy.contains("WebdriverUniversity.com (Page Object Model)")
        cy.get("ul.nav.navbar-nav li").should('have.length', 3)
        cy.get("ul li:nth-of-type(1)").should('have.text', 'Home').and('have.attr', 'class').and('contain', 'active')
        cy.get("ul li:nth-of-type(2)").should('have.text', 'Our Products')
        cy.get("ul li:nth-of-type(3)").should('have.text', 'Contact Us')
        cy.get("div.row > div.col-md-12 div[class='row'] > div").should('have.length', 4)
    })

    it("Test 1 - Testing corousel component", () => {
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.wait(5000)
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.wait(5000)
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
        cy.wait(5000)
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.wait(5000)
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.wait(5000)
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
    })
    it("Test 2 - Testing right button", () => {
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.right").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.right").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
        cy.get("a.right").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.right").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.right").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
    })
    it("Test 3 - Testing left button", () => {
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.left").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
        cy.get("a.left").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.left").click()


        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.left").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
        cy.get("a.left").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.left").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        
    })
    it("Test 4 - Testing left and right button for carousel component", () => {
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get('a.right').click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("a.left").click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
    })
    it.only("Test 5 - Testing left and right buttons for carousel comoponent many tiemes", () => {
        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get('a.right').click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get('a.right').click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('contain', 'active')
        cy.get('a.left').click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get('a.left').click()

        cy.get("div.item:nth-of-type(1)").should('have.attr', 'class').and('contain', 'active')
        cy.get("div.item:nth-of-type(2)").should('have.attr', 'class').and('not.contain', 'active')
        cy.get("div.item:nth-of-type(3)").should('have.attr', 'class').and('not.contain', 'active')
        
    })
})