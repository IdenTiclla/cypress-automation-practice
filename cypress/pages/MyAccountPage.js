import RightNavigationBar from "../e2e/components/RightNavigationBar"
class MyAccountPage {
    constructor() {
        this.rightNavigationComponent = new RightNavigationBar()
    }
    getMyAccountOptions = () => cy.get("div#account-account div#content  > div:nth-of-type(1) div.row div a")
    getMyOrdersOptions = () => cy.get("div#account-account div#content  > div:nth-of-type(2) div.row div a")
    getMyAffiliateAccountOptions = () => cy.get("div#account-account div#content  > div:nth-of-type(3) a")
}

export default MyAccountPage
