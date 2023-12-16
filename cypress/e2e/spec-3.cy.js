describe('My test suite', () => {
    it('My test 1', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.title().should('eq', 'WebDriverUniversity.com')
    })

    it('Test 2', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('div.row > div.row > div.col-md-12').should('have.length', 17)
    })

    it('Test 3', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('eq', 'WebDriver | Contact Us')
    })

    it('Test 4', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[name='first_name']").type('Juan')
        cy.get("input[name='last_name']").type('Lopez')
        cy.get("input[name='email']").type('juan.lopez@gmail.com')
        cy.get("textarea[name='message']").type('Hello world')


        cy.get("input[name='first_name']").should('have.value', 'Juan')
        cy.get("input[name='last_name']").should('have.value','Lopez')
        cy.get("input[name='email']").should('have.value','juan.lopez@gmail.com')
        cy.get("textarea[name='message']").should('have.value','Hello world')

    })
    it('Test 5', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[name='first_name']").type('Juan')
        cy.get("input[name='last_name']").type('Lopez')
        cy.get("input[name='email']").type('juan.lopez@gmail.com')
        cy.get("textarea[name='message']").type('Hello world')

        cy.get("input.contact_button[value='RESET']").click()

        cy.get("input[name='first_name']").should('have.value', '')
        cy.get("input[name='last_name']").should('have.value','')
        cy.get("input[name='email']").should('have.value','')
        cy.get("textarea[name='message']").should('have.value','')
    })

    it('Test 6 - Invalid email', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[name='first_name']").type('Juan')
        cy.get("input[name='last_name']").type('Lopez')
        cy.get("input[name='email']").type('djgbjasdbgkjadsbfjkds')
        cy.get("textarea[name='message']").type('Hello world')

        cy.get("input.contact_button[value='SUBMIT']").click()


        cy.get('body').contains('Error: Invalid email address')

    })


    it('Test 6 - With a valid email', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[name='first_name']").type('Juan')
        cy.get("input[name='last_name']").type('Lopez')
        cy.get("input[name='email']").type('juan.lopez@gmail.com')
        cy.get("textarea[name='message']").type('Hello world')

        cy.get("input.contact_button[value='SUBMIT']").click()
        
        cy.get('div#contact_reply > h1').contains('Thank You for your Message!')

    })
})