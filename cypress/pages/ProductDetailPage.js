import Alert from "../e2e/components/Alert"
import Notification from "../e2e/components/Notification"
class ProductDetailPage {
    constructor() {
        this.notificationComponent = new Notification()
        this.alertComponent = new Alert()
    }
    // desktop version
    getDesktopHeartButton = () => cy.get("div#image-gallery-216811 button[class*='wishlist']")
    getYourNameInputField = () => cy.get("form#form-review input[name='name']")
    getYourReviewInputField = () => cy.get("form#form-review textarea")
    getWriteReviewButton = () => cy.get("button#button-review")

    writeOnYourNameInputField = (text) => {
        this.getYourNameInputField().type(text)
    }
    writeOnYourReviewInputField = (text) => {
        this.getYourReviewInputField().type(text)
    }

    submitYourReview = () => {
        this.getWriteReviewButton().click()
    }

    // mobile version
    getMobileHeartButton = () => cy.get("div[data-id='216812'] button[data-wishlist]")
    addToTheWishListOnMobile = () => {
        this.getMobileHeartButton().click()
    }
    
}

export default ProductDetailPage