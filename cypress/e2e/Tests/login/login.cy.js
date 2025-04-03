import Home from "../../pages/Home"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"

const homepage = new Home()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login Tests', () => {
  context("1080p resolution", () => {
    beforeEach(() => {
      homepage.visit()
      cy.get('body').should('be.visible')
      cy.viewport(1280, 720)
    })

    afterEach(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    })

    it('Verify successful login with valid credentials', () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      cy.url().should('include', 'account')
    })

    it('Verify validation for empty credentials', () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.getLoginButton().click()
      
      // Add assertions for validation messages
      // These would depend on your page object implementation
      // Example:
      // loginPage.getErrorMessage().should('be.visible')
      // loginPage.getErrorMessage().should('contain', 'Warning: No match for E-Mail Address and/or Password')

      

    })

    it.only("Test for testing the login page default errors", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login('randomemail@gmail.com', 'dummypassword')
      loginPage.alertComponent.getAlert().should('have.text', ' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')
      loginPage.alertComponent.getAlert().should('have.class', 'alert-danger')
      loginPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(248, 215, 218)')
      loginPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')
      loginPage.alertComponent.getAlert().should('have.css', 'border-color', 'rgb(245, 198, 203)')
    })
  })

  context("Iphone resolution", () => {
    beforeEach(() => {
      homepage.visit()
      cy.get('body').should('be.visible')
      cy.viewport('iphone-x')
    })

    afterEach(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    })

    it.only("Test for Login functionality on iphone resolution", () => {
      homepage.mainHeaderComponent.getMobilePersonIconButton().click()
      homepage.quickLinksComponent.clickOnSpecificQuickLink('My account')
      cy.url().should('contain', 'account/login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      cy.url().should('contain', 'account/account')
    })
    
  })
})