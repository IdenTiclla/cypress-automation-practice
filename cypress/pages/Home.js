class Home {
    visit() {
        cy.visit('/')
    }
    getHomeOption = () => cy.get("ul.horizontal a[href*='common/home']")
    getSpecialHotOption = () => cy.get("ul.horizontal a[href*='product/special']")
    getCartIconButton = () => cy.get("div.cart-icon").first()
}

export default Home