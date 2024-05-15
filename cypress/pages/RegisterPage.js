class RegisterPage {
    getWarningComponent = () => cy.get("nav[aria-label='breadcrumb'] + div[class*='alert-danger']")

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
    getYesRadioButton = () => cy.get("div.col-sm-10 > div[class*='custom-radio']:nth-of-type(1)")
    getNoRadioButton = () => cy.get("div.col-sm-10 > div[class*='custom-radio']:nth-of-type(2)")
    getPolicyPrivacyLinkElement = () => cy.get("a.agree")
    getPolicyPrivacyCheckbox = () => cy.get("div.float-right >div ")
    getContinueButton = () => cy.get("input[value='Continue']")
}

export default RegisterPage