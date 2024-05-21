import Filter from "../e2e/components/Filter"
class SearchResultPage {
    constructor() {
        this.filterComponent = new Filter()
    }

    getProducts = () => cy.get("div.product-layout.product-grid > div")
    getKeywordsInputField = () => cy.get("div.content-search-criteria input[name='search']")
    getCategoriesDropdown = () => cy.get("div.content-search-criteria select")
    getSearchButton = () => cy.get("div.content-search-criteria input[type='button']")
    getSearchInSubcategoriesCheckbox = () => cy.get("div.content-search-criteria input[type='checkbox'][name='sub_category']")
    getSearchInProductDescriptionsCheckbox = () => cy.get("div.content-search-criteria input[type='checkbox'][name='description']")
    getGridViewButton = () => cy.get("button#grid-view")
    getListViewButton = () => cy.get("button#list-view")
    getPagination = () => cy.get("ul.pagination li")
}

export default SearchResultPage
