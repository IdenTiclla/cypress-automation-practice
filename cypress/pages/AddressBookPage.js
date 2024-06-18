import Alert from "../e2e/components/Alert"
import MainNavigation from "../e2e/components/MainNavigation"

class AddressBookPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.alertComponent = new Alert()
    }

    getAddresses = () => cy.get("div#account-address table tbody tr")

    getBackButton = () => cy.get("div.buttons.clearfix div.float-left > a")
    getNewAddressButton = () => cy.get("div.buttons.clearfix div.float-right a[href*='address/add']")

}

export default AddressBookPage
