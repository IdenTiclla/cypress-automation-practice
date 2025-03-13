import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Home from '../../pages/Home'
import RegisterPage from '../../pages/RegisterPage'
import SuccessPage from '../../pages/SuccessPage'

const homepage = new Home()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()

// Register a new user

Given("I open the register page", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
})

When("I fill the register form with random data", () => {
    cy.generateRandomFirstname().then (randomFirstname=> {
        cy.generateRandomLastname().then(randomLastname => {
          cy.generateRandomPhoneNumber().then(randomPhoneNumber => {
            cy.generateRandomPassword().then(randomPassword => {
              cy.generateRandomEmail().then(randomEmail => {
                registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
              })
            })
          })
        })
      })
})


Then("I should be redirected to success page", () => {
    cy.url().should('be.eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/success')
})