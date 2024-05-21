import MainNavigation from "../e2e/components/MainNavigation"
import MainHeader from "../e2e/components/MainHeader"
import RightNavigationBar from "../e2e/components/RightNavigationBar"
import Alert from "../e2e/components/Alert"

class ForgottenPasswordPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.mainHeaderComponent = new MainHeader()
        this.rightNavigationComponent = new RightNavigationBar()
        this.alertComponent = new Alert()
    }
    
    getEmailInputField = () => cy.get("input[name='email'")
    getBackButton = () => cy.get("div.buttons.clearfix div.float-left > a")
    getContinueButton = () => cy.get("div.buttons.clearfix div.float-right button")

    fillEmailAndSubmit = (email) => {
        this.getEmailInputField().type(email)
        this.getContinueButton().click()
    }
}

export default ForgottenPasswordPage
