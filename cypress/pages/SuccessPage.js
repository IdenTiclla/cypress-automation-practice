import MainNavigation from "../e2e/components/MainNavigation"
import RightNavigationBar from "../e2e/components/RightNavigationBar"

class SuccessPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.rightNavigationComponent = new RightNavigationBar()

    }
}

export default SuccessPage
