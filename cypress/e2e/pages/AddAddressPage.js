class AddAddressPage {
    getFirstName = () => cy.get("input#input-firstname")
    getLastName = () => cy.get("input#input-lastname")
    getCompany = () => cy.get("input#input-company")
    getAddress1 = () => cy.get("input#input-address-1")
    getAddress2 = () => cy.get("input#input-address-2")
    getCity = () => cy.get("input#input-city")
    getPostCode = () => cy.get("input#input-postcode")
    getCountry = () => cy.get("select#input-country")
    getRegionState = () => cy.get("select#input-zone")
    getDefaultAddressYesCheckbox = () => cy.get("form[action*='address/add'] input[value='1']")
    getDefaultAddressNoCheckbox = () => cy.get("form[action*='address/add'] input[value='0']")

    getBackButton = () => cy.get("div.buttons.clearfix div.float-left > a")
    getContinueButton = () => cy.get("div.buttons.clearfix div.float-right  > input ")


    fillAddressForm = (firstname, lastname, company, address1, address2, city, postCode, country, regionState, defaultAddress) => {
        this.getFirstName().type(firstname)
        this.getLastName().type(lastname)
        this.getCompany().type(company)
        this.getAddress1().type(address1)
        this.getAddress2().type(address2)
        this.getCity().type(city)
        this.getPostCode().type(postCode)
        this.getCountry().select(country)
        this.getRegionState().select(regionState)
        defaultAddress ? this.getDefaultAddressYesCheckbox().click({force: true}) : this.getDefaultAddressNoCheckbox().click({force: true})
    }

    submitForm = () => {
        this.getContinueButton().click()
    }

}

export default AddAddressPage
