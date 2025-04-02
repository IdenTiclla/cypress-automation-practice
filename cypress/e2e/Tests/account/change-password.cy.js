import Home from "../../pages/Home"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"   
import ChangePasswordPage from "../../pages/ChangePasswordPage"
import RegisterPage from "../../pages/RegisterPage"
import SuccessPage from "../../pages/SuccessPage"

const homepage = new Home()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()
const changePasswordPage = new ChangePasswordPage()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe("Chage password suite", () => {
    context("1080p resolution", () => {
        beforeEach(() => {
            homepage.visit()
            cy.get("body").should("be.visible")
            cy.viewport(1920, 1080)
        })
    
        afterEach(() => {
            cy.clearCookies()
            cy.clearLocalStorage()
        })
    
    
        it.only("Test for not matching change passwords", () => {
            homepage.mainNavigationComponent.getMyAccountOption().click()
            loginPage.login(Cypress.env("email"), Cypress.env("password"))
            myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
            changePasswordPage.submitChangePasswordForm('asdf', 'zxcv')
            cy.contains("Password confirmation does not match password!")
          })
    
    
        it.only("Test for change password functionality default behavior", () => {
            homepage.mainNavigationComponent.getMyAccountOption().click()
            changePasswordPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
            loginPage.getEmailInputField().should('be.visible')
            loginPage.getPasswordInputField().should('be.visible')
            loginPage.getSubmitButton().should('be.visible')
            loginPage.login(Cypress.env("email"), Cypress.env("password"))
            myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
            cy.url().should('contain', 'account/password')
            changePasswordPage.rightNavigationComponent.getOptions().eq(2).should('have.class', 'active')
            changePasswordPage.getContinueButton().click()
            cy.contains("Password must be between 4 and 20 characters!")
          })
    
    
    
        it.only("Test for testing change password success", () => {
            cy.generateRandomEmail().then(email => {
              cy.generateRandomFirstname().then(firstname => {
                cy.generateRandomLastname().then(lastname => {
                  cy.generateRandomPassword().then(password1 => {
                    cy.generateRandomPassword().then(password2 => {
                      cy.generateRandomPhoneNumber().then(phoneNumber => {
                        homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
                        registerPage.registerNewUser(firstname, lastname, email, phoneNumber, password1, password1, true, true)
                        successPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
                        changePasswordPage.submitChangePasswordForm(password2, password2)
                        myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
                        myAccountPage.alertComponent.getAlert().should('have.class', 'alert-success')
                        myAccountPage.alertComponent.getAlert().should('have.text', ' Success: Your password has been successfully updated.')
                        myAccountPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(212, 237, 218)')
                        myAccountPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(21, 87, 36)')
                        myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
                        myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      
                        loginPage.login(email, password1)
                        loginPage.alertComponent.getAlert().should('include.text', 'Warning: No match for E-Mail Address and/or Password.')
                        loginPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(248, 215, 218)')
                        loginPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')
      
                        loginPage.getEmailInputField().clear()
                        loginPage.getPasswordInputField().clear()
      
                        loginPage.login(email, password2)
                        cy.url().should('contain', 'account/account')
                      })
                    })
                  })
                })
              })
            })
      
      
          })
    
    })
    
})