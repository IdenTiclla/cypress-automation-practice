class MainHeader {
    getAllCategoriesDropdown = () => cy.get("div#main-header div#search div[class*='search-category']")
    getSearchInputField = () => cy.get("div#main-header div#search input[name='search']")
    getSearchButton = () => cy.get("div#main-header div#search div.search-button button")

    getCompareIconButton = () => cy.get("div#main-header  a[href*='/compare']")
    getWishListIconButton = () => cy.get("a[aria-label='Wishlist']")
    getCartIconButton = () => cy.get("div.cart-icon").first()

    // mobile version
    getMobileSearchInputField = () => cy.get("div#main-navigation div#search input[name='search']")
    getMobileSearchButton = () => cy.get("div#main-navigation div.search-button button")
}

export default MainHeader
