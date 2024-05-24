import MainHeader from "../e2e/components/MainHeader"

class ShoppingCartPage {
    constructor() {
        this.mainHeaderComponent = new MainHeader
    }
    getWarningIcon = () => cy.get("div#content > i[class*='warning']")
    getTitle = () => cy.get("div#content > h1")
    getMessage = () => cy.get("div#content > p")
    getContinueButton = () => cy.get("div#content >div > a[href*='common/home']")
}

export default ShoppingCartPage
