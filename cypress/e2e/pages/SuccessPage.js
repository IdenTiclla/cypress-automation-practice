import MainNavigation from "../components/MainNavigation"
import RightNavigationBar from "../components/RightNavigationBar"
import ContentComponent from "../components/ContentComponent"
class SuccessPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.rightNavigationComponent = new RightNavigationBar()
        this.contentComponent = new ContentComponent()
    }
}

export default SuccessPage
