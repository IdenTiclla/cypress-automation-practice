class NewsletterSubscriptionPage {
    getYesCheckbox = () => cy.get("input[type='radio' ][value='1']")
    getNoCheckbox = () => cy.get("input[type='radio' ][value='0']")

    getBackButton = () => cy.get("div.buttons a[href*='account/account'")
    getContinueButton = () => cy.get("input[value='Continue']")

    checkYes = () => {
        this.getYesCheckbox().click({force: true})
    }

    checkNo = () => {
        this.getNoCheckbox().click({force: true})
    }
}

export default NewsletterSubscriptionPage
