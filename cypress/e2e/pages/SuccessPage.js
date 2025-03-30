import MainNavigation from "../components/MainNavigation"
import RightNavigationBar from "../components/RightNavigationBar"
import ContentComponent from "../components/ContentComponent"
import MainHeader from "../components/MainHeader"
class SuccessPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.mainHeaderComponent = new MainHeader()
        this.rightNavigationComponent = new RightNavigationBar()
        this.contentComponent = new ContentComponent()
    }

    getHeading = () => cy.get("div#content h1")
}

export default SuccessPage
