import Home from "../../pages/Home"
import RegisterPage from "../../pages/RegisterPage"
import LoginPage from "../../pages/Login"
import SuccessPage from "../../pages/SuccessPage"
import MyAccountPage from "../../pages/MyAccountPage"

const homepage = new Home()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()
const loginPage = new LoginPage()
const myAccountPage = new MyAccountPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Registration Tests', () => {
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
  
    it.only("Test for going to the register page from the main nav bar", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
      cy.url().should('contain', 'account/register')
    })
  
    it.only("Test for registering an then loging a new user", () => {
      cy.generateRandomEmail().then((randomEmail) => {
        cy.generateRandomPhoneNumber().then((randomPhoneNumber) => {
          cy.generateRandomFirstname().then(randomFirstname => {
            cy.generateRandomLastname().then(randomLastname => {
              cy.generateRandomPassword().then(randomPassword => {
                homepage.mainNavigationComponent.getMyAccountOption().click()
                loginPage.rightNavigationComponent.clickOnRightNavigationOption('Register')
                cy.url().should('contain', 'account/register')
                registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                cy.contains("Your Account Has Been Created!")
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
                cy.contains("Account Logout")
                cy.url().should('contain', 'account/logout')
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Login')
                cy.url().should('contain', 'account/login')
                loginPage.login(randomEmail, randomPassword)
                cy.url().should('contain', 'account/account')
                myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
              })
            })
          })
        })
      })
    })

  })

  context("Iphone resolution", () => {
    beforeEach(() => {
      cy.visit("/")
      cy.get("body").should("be.visible")
      cy.viewport('iphone-x')
    })

    afterEach(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    })

    it.only("Test for registering a new user on iphone.", () => {
      cy.generateRandomFirstname().then(firstname => {
        cy.generateRandomLastname().then(lastname => {
          cy.generateRandomEmail().then(email => {
            cy.generateRandomPhoneNumber().then(phoneNumber => {
              cy.generateRandomPassword().then(password => {
                homepage.mainHeaderComponent.getMobilePersonIconButton().click()
                homepage.quickLinksComponent.clickOnSpecificQuickLink('My account')
                loginPage.rightNavigationComponent.clickOnRightNavigationOption('Register')
                registerPage.registerNewUser(firstname, lastname, email, phoneNumber, password, password, true, true)
                successPage.contentComponent.getTitle().should('include.text', 'Your Account Has Been Created!')
              })
            })
          })
        })
      })
    })
    
  })
}) 