import Alert from "../components/Alert"

class GiftCertificatePage {
    constructor() {
        this.alertComponent = new Alert()
    }
    getRecipientsNameInput = () => cy.get("input[name='to_name']")
    getRecipientsNameLabelError = () => cy.get("input[name='to_name'] + div[class='text-danger']")
    getRecipientsEmailInput = () => cy.get("input[name='to_email']")
    getRecipientsEmailLabelError = () => cy.get("input[name='to_email'] + div[class='text-danger']")
    getYourNameInput = () => cy.get("input[name='from_name']")
    getYourEmailInput = () => cy.get("input[name='from_email']")
    getGiftCertificateThemeOptions = () => cy.get("input[name='voucher_theme_id']")
    getGiftCertificateThemeOptionsLabelError = () => cy.get("div.form-check+ div.text-danger")
    getMessageInput = () => cy.get("textarea[name='message']")
    getAmountInput = () => cy.get("input[name='amount']")
    getAgreeCheckbox = () => cy.get("input[name='agree']")
    getContinueButton = () => cy.get("input[value='Continue']")

    fillForm = (recipient_name, recipient_email, gift_certificate_theme_index, message, amount) => {

    }

    clickOnContinueButton = () => {
        this.getContinueButton().click()
    }
}

export default GiftCertificatePage