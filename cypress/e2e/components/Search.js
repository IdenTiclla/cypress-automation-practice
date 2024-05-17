class Search {
    getAllCategoriesDropdown = () => cy.get("div#main-header div#search div[class*='search-category']")
    getSearchInputField = () => cy.get("div#main-header div#search input[name='search']")
    getSearchButton = () => cy.get("div#main-header div#search div.search-button button")
}

export default Search
