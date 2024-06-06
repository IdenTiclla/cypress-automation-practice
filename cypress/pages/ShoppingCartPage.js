import Alert from "../e2e/components/Alert"
import MainHeader from "../e2e/components/MainHeader"

class ShoppingCartPage {
    constructor() {
        this.mainHeaderComponent = new MainHeader
        this.alertComponent = new Alert()
    }
    getWarningIcon = () => cy.get("div#content > i[class*='warning']")
    getTitle = () => cy.get("div#content > h1")
    getMessage = () => cy.get("div#content > p")
    getItems = () => cy.get("div.table-responsive table.table-bordered tbody tr")
    getContinueButton = () => cy.get("div#content >div > a[href*='common/home']")
    getCheckoutButton = () => cy.get("div#content >div > a[href*='checkout/checkout']")
}

export default ShoppingCartPage
