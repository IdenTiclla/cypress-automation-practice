class QuickLinks {
    getTitle = () => cy.get("div[data-position='right'] > h5").eq(0)
    getOptions = () => cy.get("div[data-position='right'] ul li a")
    clickOnSpecificQuickLink = (option) => {
        this.getOptions().contains(option).click()
    }
}

export default QuickLinks
