class ShoppingCartModal {
    getCloseButton = () => cy.get("div#cart-total-drawer a[aria-label='close']")
    getModalMessage = () => cy.get("p.m-0.py-5.text-center")
    getEditCartButton = () => cy.get("div#cart-total-drawer a[href*='/cart']")
    getCheckoutBUtton = () => cy.get("div#cart-total-drawer a[href*='/checkout']")
    closeButton = () => this.getCloseButton().click()
    validateMessageForEmptyCart = (message) => this.getModalMessage().should('have.text', message)
}

export default ShoppingCartModal