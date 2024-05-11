class Login{
    visit = () => {
        cy.visit('/')
    }
    getUsernameInputField = () => {
        return cy.get("input[name='username']")
    }
    getPasswordInputField = () => {
        return cy.get("input[type='password']")
    }
    getSubmitButton = () => {
        return cy.get("button[type='submit']")
    }
}

export default Login