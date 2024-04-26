import { login } from "../../support/POM/Login.Page";

describe('user logins', () => {
    beforeEach(() => {
        cy.visit(login.get.endpoint)
    })

    it('validate login successfully', () => {
        login.enterUsername("Admin")
        login.enterPassword("admin123")
        login.clickSubmitButton()

        cy.url().should('contain', 'dashboard')
    })
})