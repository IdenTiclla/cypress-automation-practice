import MainNavigation from "../components/MainNavigation"
import MainHeader from "../components/MainHeader"
import RightNavigationBar from "../components/RightNavigationBar"
import Alert from "../components/Alert"
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
