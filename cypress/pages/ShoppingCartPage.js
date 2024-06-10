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

    getCollapseElements = () => cy.get("div#accordion div.card")

    expandOrMinimizeUseCouponCodeCollapse = () => {
        this.getCollapseElements().eq(0).find('h5').click()
    }

    expandOrMinimizeEstimateShippingTaxesCollapse = () => {
        this.getCollapseElements().eq(1).find('h5').click()

    }

    expandOrMinimizeUseGiftCertificateCollapse = () => {
        this.getCollapseElements().eq(2).find('h5').click()
    }

    getContinueButton = () => cy.get("div#content >div > a[href*='common/home']")
    getCheckoutButton = () => cy.get("div#content >div > a[href*='checkout/checkout']")

    removeNthItem = (index) => {
        this.getItems().eq(index).find("button[title='Remove']").click()
    }

    getQuantityNthElement = (index) => {
        return this.getItems().eq(index).find("input").invoke('val').then(text => {
            const quantity = parseFloat(text)
            return quantity
        })
    }

    getPriceUnitNthElement = (index) => {
        return this.getItems().eq(index).find("td:nth-of-type(5)").invoke('text').then(text => {
            const priceUnit = parseFloat(text.replace('$',''))
            return priceUnit
        })
    }

    getPriceTotalNthElement = (index) => {
        return this.getItems().eq(index).find("td:nth-of-type(6)").invoke('text').then(text => {
            const priceUnit = parseFloat(text.replace('$',''))
            return priceUnit
        })
    }
    
    updateNthProductQuantity = (index, quantity) => {
        this.getItems().eq(index).find("input").clear()
        this.getItems().eq(index).find("input").type(quantity)
        this.getItems().eq(index).find("button[title='Update']").click()
    }

    
}

export default ShoppingCartPage
