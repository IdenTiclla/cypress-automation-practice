import Home from "../../pages/Home"
import RegisterPage from "../../pages/RegisterPage"
import SuccessPage from "../../pages/SuccessPage"

const homepage = new Home()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Registration Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('Verify registration form elements are displayed', () => {
    homepage.mainNavigationComponent.getMyAccountOption().trigger('mouseover')
    homepage.mainNavigationComponent.getRegisterOption().click()
    
    // Verify form elements
    registerPage.getFirstnameInput().should('be.visible')
    registerPage.getLastnameInput().should('be.visible')
    registerPage.getEmailInput().should('be.visible')
    registerPage.getTelephoneInput().should('be.visible')
    registerPage.getPasswordInput().should('be.visible')
    registerPage.getPasswordConfirmInput().should('be.visible')
    registerPage.getPolicyPrivacyCheckbox().should('exist')
    registerPage.getContinueButton().should('be.visible')
    registerPage.getNoRadioButton().should('exist')
    registerPage.getYesRadioButton().should('exist')
  })

  it('Verify successful registration with valid data', () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`
    
    homepage.mainNavigationComponent.getMyAccountOption().trigger('mouseover')
    homepage.mainNavigationComponent.getRegisterOption().click()
    
    registerPage.getFirstnameInput().type('Test')
    registerPage.getLastnameInput().type('User')
    registerPage.getEmailInput().type(randomEmail)
    registerPage.getTelephoneInput().type('1234567890')
    registerPage.getPasswordInput().type('password123')
    registerPage.getPasswordConfirmInput().type('password123')
    registerPage.getPolicyPrivacyCheckbox().click()
    registerPage.getContinueButton().click()
    
    // Verify successful registration
    successPage.getHeading().should('contain', 'Your Account Has Been Created')
  })
}) 