describe('Login Portal', () => {
    it('Test 1', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.title().should('eq', 'WebDriver | Login Portal')
    })

    it('Test 2 - Quantity of elements', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.get("form input").should('have.length', 2)
        cy.get("form button").should('have.length', 1)
    })

    it('Test 3 - Placeholders', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.get("input#text").should('have.attr', 'placeholder', 'Username')
        cy.get("input#password").should('have.attr', 'placeholder', 'Password')

        cy.get('button#login-button').contains('Login')
    })
    it('Test 4 - Existance', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.get("input#text").should('exist')
        cy.get("input#password").should('exist')
        cy.get('button#login-button').should('exist')
    })

    it('Test 5 - Visible', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.get("input#text").should('be.visible')
        cy.get("input#password").should('be.visible')
        cy.get('button#login-button').should('be.visible')
    })
    it('Test 6 - Quantity of squares', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.get(".bg-bubbles > li").should('have.length', 10)
    })

    it('Test 7 - Enabled and not disabled', () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
        cy.get("input#text").should('be.enabled').and('not.be.disabled')
        cy.get("input#password").should('be.enabled').and('not.be.disabled')
        cy.get('button#login-button').should('be.enabled').and('not.be.disabled')

    })
})