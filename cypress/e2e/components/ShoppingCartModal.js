class ShoppingCartModal {
    getCloseButton = () => cy.get("div#cart-total-drawer a[aria-label='close']")
    getModalMessage = () => cy.get("p.m-0.py-5.text-center")
    getEditCartButton = () => cy.get("div#cart-total-drawer a[href*='/cart']")
    getCheckoutBUtton = () => cy.get("div#cart-total-drawer a[href*='/checkout']")
    getViewCartButton = () => cy.get("div#cart-total-drawer a.btn-light").contains("View Cart")
    closeButton = () => this.getCloseButton().click({ force: true })
    validateMessageForEmptyCart = (message) => this.getModalMessage().should('have.text', message)
}

export default ShoppingCartModal