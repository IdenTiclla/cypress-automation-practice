import Alert from "../e2e/components/Alert"
import Notification from "../e2e/components/Notification"
import RightNavigationBar from "../e2e/components/RightNavigationBar"

class WishListPage {
    constructor() {
        this.rightNavigationComponent = new RightNavigationBar()
        this.alertComponent = new Alert()
        this.notificationComponent = new Notification()
    }
    getProducts = () => cy.get("table.table.table-hover.border > tbody > tr")
}

export default WishListPage