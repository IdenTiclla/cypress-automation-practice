class MainNavigation {
    getHomeOption = () => cy.get("ul.horizontal a[href*='common/home']")
    getSpecialHotOption = () => cy.get("ul.horizontal a[href*='product/special']")
    getBlogOption = () => cy.get("ul.horizontal a[href*='blog/home']")
    getMegaMenuOption = () => cy.get("ul.horizontal li:nth-of-type(4) a[data-toggle='dropdown']")
    getAddOnsOption = () => cy.get("ul.navbar-nav.horizontal > li:nth-of-type(5)")
    getAddOnsDropdownOptions = () => cy.get("ul.horizontal li:nth-of-type(5) a[data-toggle='dropdown'] + ul > li")
    getMyAccountOption = () => cy.get("ul.horizontal li:nth-of-type(6) a[data-toggle='dropdown']")
    getMyAccountDropdownOptions = () => cy.get("ul.horizontal li:nth-of-type(6) a[data-toggle='dropdown'] + ul > li")
    
    clickOnAddOnsDropdownOptions = (option) => {
        this.getAddOnsDropdownOptions().contains(option).click()
    }
    clickonMyAccountDropdownOptions = (option) => {
        this.getMyAccountDropdownOptions().contains(option).click()
    }
}

export default MainNavigation
