import TopCategories from "./TopCategories"
class MainHeader {
    constructor() {
        this.topCategoriesComponent = new TopCategories()
    }
    getCategoriesDropdown = () => cy.get("div#main-header div#search div[class*='search-category']")
    getSearchInputField = () => cy.get("div#main-header div#search input[name='search']")
    getSearchButton = () => cy.get("div#main-header div#search div.search-button button")

    getCompareIconButton = () => cy.get("div#main-header  a[href*='/compare']")
    getWishListIconButton = () => cy.get("a[aria-label='Wishlist']")
    getCartIconButton = () => cy.get("div.cart-icon").first()

    // mobile version
    getMobileCategoriesDropdown = () => cy.get("div#main-navigation div#search  div.dropdown button")
    getMobileCategoriesDropdownOptions = () => cy.get("div#main-navigation div#search  div.dropdown-menu a")
    getMobileSearchInputField = () => cy.get("div#main-navigation div#search input[name='search']")
    getMobileSearchButton = () => cy.get("div#main-navigation div.search-button button")
    getMobileHamburgerIcon = () => cy.get("div#main-header > div:nth-of-type(2) div a").eq(0)
    getMobilePocoMegaStoreIcon = () => cy.get("div#main-header > div:nth-of-type(2) div a").eq(1)
    getMobilePersonIconButton = () => cy.get("div#main-header > div:nth-of-type(2) div a").eq(2)
    getMobileCartIconButton = () => cy.get("div#main-header > div:nth-of-type(2) div a").eq(3)

    selectOptionOnHamburgerOptions = (option) => {
        this.getMobileHamburgerIcon().click()
        this.topCategoriesComponent.clickOnSpecificCategory(option)
    }

    selectCategory = (category) => {
        this.getMobileCategoriesDropdownOptions().contains(category).click()
    }
}

export default MainHeader
