import MainNavigation from "../e2e/components/MainNavigation"
import MainHeader from "../e2e/components/MainHeader"
import RightNavigationBar from "../e2e/components/RightNavigationBar"
import Alert from "../e2e/components/Alert"
class ChangePasswordPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.mainHeaderComponent = new MainHeader()
        this.rightNavigationComponent = new RightNavigationBar()
        this.alertComponent = new Alert()
    }
    getPasswordInputField = () => cy.get("input[name='password']")
    getPasswordConfirmInputField = () => cy.get("input[name='confirm']")
    getBackButton = () => cy.get("div.buttons > div a")
    getContinueButton = () => cy.get("div.buttons > div.float-right input")
    submitChangePasswordForm = (password, confirm) => {
        this.getPasswordInputField().type(password)
        this.getPasswordConfirmInputField().type(confirm)
        this.getContinueButton().click()
    }
}

export default ChangePasswordPage
