import RightNavigationBar from "../e2e/components/RightNavigationBar"

class Login{
    constructor() {
        this.rightNavigationComponent = new RightNavigationBar()
    }
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