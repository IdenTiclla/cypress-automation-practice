class Login{
    getEmailInputField = () => {
        return cy.get("input[name='email']")
    }
    getPasswordInputField = () => {
        return cy.get("input[name='password']")
    }
    getSubmitButton = () => {
        return cy.get("input[type='submit']")
    }

    login = (email, password) => {
        this.getEmailInputField().type(email)
        this.getPasswordInputField().type(password)
        this.getSubmitButton().click()
    }
}

export default Login