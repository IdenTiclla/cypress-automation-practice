class RightNavigationBar {
    getLoginOption = () => cy.get("aside#column-right a[href*='/login']")
    getRegisterOption = () => cy.get("aside#column-right a[href*='/register']")
    getForgottenPasswordOption = () => cy.get("aside#column-right a[href*='/forgotten']")
    getMyAccountOption = () => cy.get("aside#column-right a[href*='/account']")
    getAddressBookOption = () => cy.get("aside#column-right a[href*='/address']")
    
    getWishlistBookOption = () => cy.get("aside#column-right a[href*='/wishlist']")
    getOrderHistoryOption = () => cy.get("aside#column-right a[href*='/address']")
    getDownloadsOption = () => cy.get("aside#column-right a[href*='/download']")
    getRecurringPaymentOption = () => cy.get("aside#column-right a[href*='/recurring']")
    getRewardPointsOption = () => cy.get("aside#column-right a[href*='/reward']")
    getReturnsOption = () => cy.get("aside#column-right a[href*='/return']")
    getTransactionOption = () => cy.get("aside#column-right a[href*='/transaction']")
    getNewsletterOption = () => cy.get("aside#column-right a[href*='/newsletter']")

}

export default RightNavigationBar