class RegisterPage {
    getFirstnameInput = () => cy.get("input[name='firstname']")
    getLastnameInput = () => cy.get("input[name='lastname']")
    getEmailInput = () => cy.get("input[name='email']")
    getTelephoneInput = () => cy.get("input[name='telephone']")
    getPasswordInput = () => cy.get("input[name='password']")
    getPasswordConfirmInput = () => cy.get("input[name='confirm']")
    getYesRadioButton = () => cy.get("div.col-sm-10 > div[class*='custom-radio']:nth-of-type(1)")
    getNoRadioButton = () => cy.get("div.col-sm-10 > div[class*='custom-radio']:nth-of-type(2)")
    getPolicyPrivacyLinkElement = () => cy.get("a.agree")
    getPolicyPrivacyCheckbox = () => cy.get("div.float-right >div ")
    getContinueButton = () => cy.get("input[value='Continue']")
}

export default RegisterPage