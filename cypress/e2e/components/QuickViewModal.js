class QuickViewModal {
    getModal = () => cy.get("div#product-quick-view")
    getHeartButton = () => cy.get("div#product-quick-view button[class*='wishlist']")
    getCloseButton = () => cy.get("div.modal-content button[class*='close']")
}

export default QuickViewModal