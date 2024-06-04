import Notification from "../e2e/components/Notification"
class ProductDetailPage {
    constructor() {
        this.notificationComponent = new Notification()
    }
    // desktop version
    getDesktopHeartButton = () => cy.get("div#image-gallery-216811 button[class*='wishlist']")

    // mobile version
    getMobileHeartButton = () => cy.get("div[data-id='216812'] button[data-wishlist]")
    addToTheWishListOnMobile = () => {
        this.getMobileHeartButton().click()
    }
}

export default ProductDetailPage