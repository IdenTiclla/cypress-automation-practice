class QuickViewModal {
    getModal = () => cy.get("div#product-quick-view")
    getHeartButton = () => cy.get("div#product-quick-view button[class*='wishlist']")
    getCloseButton = () => cy.get("div.modal-content button[class*='close']")
    getAvailability = () => cy.get("ul.list-unstyled.m-0 li span.badge")
    getButtons = () => cy.get("div#entry_212962 button[class*='btn-block']")

    getQuantityInput = () => cy.get("div#product-quick-view input[type='number']")
    
    getDecreaseButton = () => cy.get("button[aria-label='Decrease quantity']")
    getIncreaseButton = () => cy.get("button[aria-label='Increase quantity']")

    increaseQuantity = () => {
        this.getIncreaseButton().click()
    }
    
    decreaseQuantity = () => {
        this.getDecreaseButton().click()
    }
}

export default QuickViewModal