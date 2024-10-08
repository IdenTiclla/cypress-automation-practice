import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


// login correcto

Given("El usuario esta en la pagina de login", () => {
    cy.visit("https://www.saucedemo.com/v1/")
})

When("El usuario ingresa su nombre de usuario y contrasenia correctos", () => {
    cy.get("input#user-name").type("standard_user")
    cy.get("input#password").type("secret_sauce")
    cy.get("input#login-button").click()

})

Then("El usuario es redirigido a la pagina de inicio", () => {
    cy.url().should('be.eq', 'https://www.saucedemo.com/v1/inventory.html')
})


// login incorrecto
When('El usuario ingresa su nombre de usuario y contrasenia incorrectos', () => {
    cy.get("input#user-name").type("wrong username")
    cy.get("input#password").type("wrong_password")
    cy.get("input#login-button").click()
})



Then('Un mensaje de error es mostrado en la pagina de login', () => {
    cy.get("h3[data-test='error']").invoke('text').should('equal', 'Epic sadface: Username and password do not match any user in this service')
})