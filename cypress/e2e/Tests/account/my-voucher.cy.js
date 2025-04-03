import HomePage from "../../pages/Home"
import LoginPage from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"
import GiftCertificatePage from "../../pages/GiftCertificatePage"
import RegisterPage from "../../pages/RegisterPage"
import SuccessPage from "../../pages/SuccessPage"

const homepage = new HomePage()
const loginPage = new LoginPage()
const myAccountPage = new MyAccountPage()
const giftCertificatePage = new GiftCertificatePage()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("My Voucher", () => {
  context("1080p resolution", () => {
    beforeEach(() => {
      cy.visit("/")
      cy.get("body").should("be.visible")
      cy.viewport(1920, 1080)
    })

    afterEach(() => {
        cy.clearAllLocalStorage()
        cy.clearCookies()
    })


    it.only("Test for testing the purchase a gift certificate functionality - Validations.", () => {
        homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
        loginPage.login(Cypress.env('email'), Cypress.env('password'))
        myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions('My voucher')
        giftCertificatePage.clickOnContinueButton()
        giftCertificatePage.alertComponent.getAlert().should('include.text', 'Warning: You must agree that the gift certificates are non-refundable!')
  
        giftCertificatePage.getRecipientsNameLabelError().should('have.text', "Recipient's Name must be between 1 and 64 characters!")
        giftCertificatePage.getRecipientsEmailLabelError().should('have.text', "E-Mail Address does not appear to be valid!")
        giftCertificatePage.getGiftCertificateThemeOptionsLabelError().should('have.text', "You must select a theme!")
        giftCertificatePage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')
        giftCertificatePage.getRecipientsNameLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
        giftCertificatePage.getRecipientsEmailLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
        giftCertificatePage.getGiftCertificateThemeOptionsLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
  
      })
  
      it.only("Test for testing the purchase a gift certificate functionality - Email validation", () => {
        homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
        loginPage.login(Cypress.env("email"), Cypress.env("password"))
        myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions("My voucher")
        giftCertificatePage.getRecipientsNameInput().type("Your name")
        giftCertificatePage.getRecipientsEmailInput().type("invalidemail.com")
        giftCertificatePage.getGiftCertificateThemeOptions().eq(0).click()
        giftCertificatePage.getAgreeCheckbox().click()
        giftCertificatePage.getContinueButton().click()
        giftCertificatePage.getRecipientsEmailLabelError().should('include.text', 'E-Mail Address does not appear to be valid!')
        giftCertificatePage.getRecipientsEmailLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
      })
  
      it.only("Test for testing the purchase a gift certificate functionality - Negative amount", () => {
        homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
        loginPage.login(Cypress.env("email"), Cypress.env("password"))
        myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions('My voucher')
        giftCertificatePage.getRecipientsNameInput().type('my name')
        giftCertificatePage.getRecipientsEmailInput().type('randomemail@gmail.com')
        giftCertificatePage.getGiftCertificateThemeOptions().eq(0).click()
        giftCertificatePage.getAmountInput().clear()
        giftCertificatePage.getAmountInput().type('-1')
        giftCertificatePage.getAgreeCheckbox().click()
        giftCertificatePage.getContinueButton().click()
        giftCertificatePage.getAmountInputLabelError().should('include.text', 'Amount must be between $1.00 and $1,000.00!')
        giftCertificatePage.getAmountInputLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
      })
  
      it.only("Test for testing the purchase a gift certificate functionnality - Checking automatic data in form", () => {
        cy.generateRandomFirstname().then(randomFirstname => {
          cy.generateRandomLastname().then(randomLastname => {
            cy.generateRandomPhoneNumber().then(randomPhoneNumber => {
              cy.generateRandomPassword().then(randomPassword => {
                cy.generateRandomEmail().then(randomEmail => {
                  homepage.mainNavigationComponent.clickonMyAccountDropdownOptions("Register")
                  registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                  successPage.mainNavigationComponent.clickonMyAccountDropdownOptions("My voucher")
                  giftCertificatePage.getYourNameInput().should('have.value', `${randomFirstname} ${randomLastname}`)
                  giftCertificatePage.getYourEmailInput().should('have.value', randomEmail)
                })
              })
            })
          })
        })
      })
  
      it.only("Test for testing the purchase a gift certificate functionality - Checking behavior when input correct data.", () => {
        cy.generateRandomFirstname().then(randomFirstname => {
          cy.generateRandomFirstname().then(recipientsName => {
            cy.generateRandomLastname().then(randomLastname => {
              cy.generateRandomPhoneNumber().then(randomPhoneNumber => {
                cy.generateRandomPassword().then(randomPassword => {
                  cy.generateRandomEmail().then(randomEmail => {
                    cy.generateRandomEmail().then(recipientsEmail => {
                      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
                      registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                      successPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
                      successPage.mainNavigationComponent.clickonMyAccountDropdownOptions('My voucher')
                      giftCertificatePage.getRecipientsNameInput().type(recipientsName)
                      giftCertificatePage.getRecipientsEmailInput().type(recipientsEmail)
                      giftCertificatePage.getGiftCertificateThemeOptions().eq(0).click()
                      giftCertificatePage.getMessageInput().type('hello world')
                      giftCertificatePage.getAgreeCheckbox().click()
                      giftCertificatePage.getContinueButton().click()
                      successPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 1)
                    })
                  })
                })
              })
            })
          })
        })
      })
    

    
  })
})