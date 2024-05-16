class Notification {
    getHeaderTitle = () => cy.get("div.toast-header")
    getCloseButton = () => cy.get("div.toast-header button")
    getBodyMessage = () => cy.get("div.toast-body p")
    getViewCartButton = () => cy.get("div.toast-body div.form-row a[href*='/cart']")
    getCheckoutButton = () => cy.get("div.toast-body div.form-row a[href*='/checkout']")
    getLoginButton = () => cy.get("div.toast-body div.form-row a[href*='/login']")
    getRegisterButton = () => cy.get("div.toast-body div.form-row a[href*='/register']")
}

export default Notification
