import Alert from "../components/Alert"
import Notification from "../components/Notification"
import RightNavigationBar from "../components/RightNavigationBar"

class WishListPage {
    constructor() {
        this.rightNavigationComponent = new RightNavigationBar()
        this.alertComponent = new Alert()
        this.notificationComponent = new Notification()
    }
    getProducts = () => cy.get("table.table.table-hover.border > tbody > tr")
}

export default WishListPage