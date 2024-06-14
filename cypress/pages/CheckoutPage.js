class CheckoutPage {

    getAccountLoginCheckbox = () => cy.get("input#input-account-login")
    getAccountRegisterCheckbox = () => cy.get("input#input-account-register")
    getAccountGuestCheckoutCheckbox = () => cy.get("input#input-account-guest")


    getTelephoneInputField = () => cy.get("input[name='telephone']")

    getBillingFirstNameInputField = () => cy.get("input[name='firstname']")
    getBillingLastNameInputField = () => cy.get("input[name='lastname']")
    getBillingCompanyInputField = () => cy.get("input[name='lastname']")
    getBillingAddress1InputField = () => cy.get("input[name='address_1']")
    getBillingAddress2InputField = () => cy.get("input[name='address_2']")
    getBillingCityInputField = () => cy.get("input[name='city']")
    getBillingPostCodeInputField = () => cy.get("input[name='postcode']")
    getBillingCountrySelector = () => cy.get("select[name='country_id']")
    getBillingRegionStateSelector = () => cy.get("select[name='zone_id']")

    getCommentTextarea = () => cy.get("textarea#input-comment")
    
    getTermsAndConditionsCheckbox = () => cy.get("input[name='agree']")

    getContinueButton = () => cy.get("button#button-save")
    

    fillBillingAddressSection = (firstName, lastName, company, address1, address2, city, postCode, country, region) => {
        this.getBillingFirstNameInputField().type(firstName)
        this.getBillingLastNameInputField().type(lastName)
        this.getBillingCompanyInputField().type(company)
        this.getBillingAddress1InputField().type(address1)
        this.getBillingAddress2InputField().type(address2)
        this.getBillingCityInputField().type(city)
        this.getBillingPostCodeInputField().type(postCode)
        this.getBillingCountrySelector().select(country)
        this.getBillingRegionStateSelector().select(region)
    }

    addComments = (comment) => {
        this.getCommentTextarea().type(comment)
    }

    checkOrUncheckTermsAndConditions = () => {
        this.getTermsAndConditionsCheckbox().click({force:true})
    }
}

export default CheckoutPage
