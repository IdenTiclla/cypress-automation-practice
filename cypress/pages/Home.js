class Home {
    visit() {
        cy.visit('/')
    }
    getHomeOption = () => cy.get("ul.horizontal a[href*='common/home']")
    getSpecialHotOption = () => cy.get("ul.horizontal a[href*='product/special']")
    getWishListIconButton = () => cy.get("a[aria-label='Wishlist']")
    getCartIconButton = () => cy.get("div.cart-icon").first()
}

export default Home