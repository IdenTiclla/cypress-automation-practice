import Alert from "../e2e/components/Alert"
class RegisterPage {
    constructor() {
        this.alertComponent = new Alert()
    }
    
    getFirstnameInput = () => cy.get("input[name='firstname']")
    getFirstnameErrorText = () => cy.get("input[name='firstname'] + div.text-danger")

    getLastnameInput = () => cy.get("input[name='lastname']")
    getLastnameIErrorText = () => cy.get("input[name='lastname'] + div.text-danger")

    getEmailInput = () => cy.get("input[name='email']")
    getEmailErrorText = () => cy.get("input[name='email'] + div.text-danger")

    getTelephoneInput = () => cy.get("input[name='telephone']")
    getTelephoneErrorText = () => cy.get("input[name='telephone'] + div.text-danger")

    getPasswordInput = () => cy.get("input[name='password']")
    getPasswordErrorText = () => cy.get("input[name='password'] + div.text-danger")
    
    getPasswordConfirmInput = () => cy.get("input[name='confirm']")
    getYesRadioButton = () => cy.get("div.col-sm-10 > div[class*='custom-radio']:nth-of-type(1) input")
    getNoRadioButton = () => cy.get("div.col-sm-10 > div[class*='custom-radio']:nth-of-type(2) input")
    getPolicyPrivacyLinkElement = () => cy.get("a.agree")
    getPolicyPrivacyCheckbox = () => cy.get("div.float-right >div ")
    getContinueButton = () => cy.get("input[value='Continue']")

    registerNewUser = (firstname, lastname, email, telephone, password, password_confirm, newsletter_subscribe, privacy_policy) => {
        this.getFirstnameInput().type(firstname)
        this.getLastnameInput().type(lastname)
        this.getEmailInput().type(email)
        this.getTelephoneInput().type(telephone)
        this.getPasswordInput().type(password)
        this.getPasswordConfirmInput().type(password_confirm)
        if(newsletter_subscribe) {
            this.getYesRadioButton().click({force: true})
        }
        if(privacy_policy) {
            this.getPolicyPrivacyCheckbox().click()
        }
        this.getContinueButton().click()
    }
}

export default RegisterPage