class TopCategories {
    getCategories = () => cy.get("div.flex-column.active ul.navbar-nav.vertical > li")
    clickOnSpecificCategory = (category) => {
        this.getCategories().contains(category).click()
    }
}

export default TopCategories