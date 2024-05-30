class ProductDetailPage {
    // mobile version
    getMobileHeartButton = () => cy.get("div[data-id='216812'] button[data-wishlist]")
    addToTheWishListOnMobile = () => {
        this.getMobileHeartButton().click()
    }
}

export default ProductDetailPage