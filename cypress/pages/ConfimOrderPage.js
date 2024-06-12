class ConfirmOrderPage {
    getEditButton = () => cy.get("div.buttons a[href*='checkout/checkout']")
    getConfirmOrderButton = () => cy.get("button#button-confirm")
}

export default ConfirmOrderPage
