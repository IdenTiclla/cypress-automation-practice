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
}) 