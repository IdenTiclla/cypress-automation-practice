import Alert from "../components/Alert"
import Notification from "../components/Notification"

class ProductDetailPage {
    constructor() {
        this.notificationComponent = new Notification()
        this.alertComponent = new Alert()
    }
    // desktop version
    getDecreaseButton = () => cy.get("div#entry_216841 button[aria-label*='Decrease']")
    getQuantityInputField = () => cy.get("div#entry_216841 input[name='quantity']")
    getIncreaseButton = () => cy.get("div#entry_216841 button[aria-label*='Increase']")

    getStarsElements = () => cy.get("span.start-form-check   label:nth-last-child(n+2)")
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

    selectAmountOfStars = (position) => {
        this.getStarsElements().then(($elements) => {
            const elementsArray = Cypress._.toArray($elements)
            const invertedArray = elementsArray.reverse()
            invertedArray[position].click()
        })
    }
    increaseQuantity = () => {
        this.getIncreaseButton().click()
    }
    decreaseQuantity = () => {
        this.getDecreaseButton().click()
    }

    // mobile version
    getMobileHeartButton = () => cy.get("div[data-id='216812'] button[data-wishlist]")
    addToTheWishListOnMobile = () => {
        this.getMobileHeartButton().click()
    }
    
}

export default ProductDetailPage