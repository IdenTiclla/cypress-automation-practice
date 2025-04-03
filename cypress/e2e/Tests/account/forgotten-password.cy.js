import ForgottenPasswordPage from "../../pages/ForgottenPasswordPage"
import LoginPage from "../../pages/Login"
import HomePage from "../../pages/Home"


const forgottenPasswordPage = new ForgottenPasswordPage()
const loginPage = new LoginPage()
const homepage = new HomePage()


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Forgotten Password tests suite', () => {
    context("1080p", () => {
        beforeEach(() => {
            homepage.visit()
            cy.get('body').should('be.visible')
            cy.viewport(1920, 1080)
        })

        afterEach(() => {
            cy.clearLocalStorage()
            cy.clearCookies()
        })


        it.only("testing forgotten password, email not found", () => {
            homepage.mainNavigationComponent.getMyAccountOption().click()
            cy.url().should('contain', 'account/login')
            homepage.rightNavigationComponent.getLoginOption().should('have.class', 'active')
            homepage.rightNavigationComponent.getForgottenPasswordOption().should('not.have.class', 'active')
            homepage.rightNavigationComponent.clickOnRightNavigationOption('Forgotten Password')
            homepage.rightNavigationComponent.getLoginOption().should('not.have.class', 'active')
            cy.url().should('contain', 'account/forgotten')
            homepage.rightNavigationComponent.getForgottenPasswordOption().should('have.class', 'active')
            // forgottenPasswordPage.fillEmailAndSubmit('email@example.com') already exists xd
            forgottenPasswordPage.fillEmailAndSubmit('trashemail@eg.com')
            forgottenPasswordPage.alertComponent.getAlert().should('be.visible')
            forgottenPasswordPage.alertComponent.getAlert().should('have.text', ' Warning: The E-Mail Address was not found in our records, please try again!')
            forgottenPasswordPage.alertComponent.getAlert().should('have.class', 'alert-danger')
          })



          it.only("Test for testing forgotten password, success", () => {
            homepage.mainNavigationComponent.getMyAccountOption().click()
            homepage.rightNavigationComponent.getLoginOption().should('have.class', 'active')
            homepage.rightNavigationComponent.getForgottenPasswordOption().should('not.have.class', 'active')
            homepage.rightNavigationComponent.clickOnRightNavigationOption('Forgotten Password')
            forgottenPasswordPage.rightNavigationComponent.getForgottenPasswordOption().should('have.class', 'active')
            forgottenPasswordPage.alertComponent.getAlert().should('not.exist')
            forgottenPasswordPage.fillEmailAndSubmit('email@example.com')
            forgottenPasswordPage.alertComponent.getAlert().should('be.visible')
            forgottenPasswordPage.alertComponent.getAlert().should('have.text', ' An email with a confirmation link has been sent your email address.')
            forgottenPasswordPage.alertComponent.getAlert().should('have.class', 'alert-success')
            cy.url().should('contain', 'account/login')
            loginPage.rightNavigationComponent.getLoginOption().should('have.class', 'active')
            loginPage.rightNavigationComponent.getForgottenPasswordOption().should('not.have.class', 'active')
          })
    })
})
