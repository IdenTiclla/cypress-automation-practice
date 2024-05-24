import Alert from "../e2e/components/Alert"
import RightNavigationBar from "../e2e/components/RightNavigationBar"

class WishListPage {
    constructor() {
        this.rightNavigationComponent = new RightNavigationBar
        this.alertComponent = new Alert
    }
    getProducts = () => cy.get("table.table.table-hover.border > tbody > tr")
}

export default WishListPage