class ShoppingCartPage {
    getIcon = () => cy.get("div#content > i")
    getTitle = () => cy.get("div#content > h1")
    getMessage = () => cy.get("div#content > p")
    getContinueButton = () => cy.get("div#content >div > a[href*='common/home']")
}

export default ShoppingCartPage
