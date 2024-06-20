import MainNavigation from "../components/MainNavigation"
import RightNavigationBar from "../components/RightNavigationBar"
import Alert from "../components/Alert"

class MyAccountPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.rightNavigationComponent = new RightNavigationBar()
        this.alertComponent = new Alert()
    }
    getMyAccountOptions = () => cy.get("div#account-account div#content  > div:nth-of-type(1) div.row div a")
    getMyOrdersOptions = () => cy.get("div#account-account div#content  > div:nth-of-type(2) div.row div a")
    getMyAffiliateAccountOptions = () => cy.get("div#account-account div#content  > div:nth-of-type(3) a")
}

export default MyAccountPage
