class LoginPage {
    // properties / elements
    get = {
        endpoint: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        usernameInput: () => cy.get("input[name='username']"),
        passwordInput: () => cy.get("input[name='password']"),
        submitButton: () => cy.get("button[type='submit']"),
        forgotLink: () => cy.get("div[class*='login-forgot'] p")
    }
    // functions / methods
    enterUsername = (value) => {
        this.get.usernameInput().type(value)
    }
    enterPassword = (value) => {
        this.get.passwordInput().type(value)
    }
    clickSubmitButton = () => {
        this.get.submitButton().click()
    }
}

export const login = new LoginPage
