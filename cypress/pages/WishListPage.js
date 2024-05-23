import RightNavigationBar from "../e2e/components/RightNavigationBar"

class WishListPage {
    constructor() {
        this.rightNavigationComponent = new RightNavigationBar
    }
    getProducts = () => cy.get("table.table.table-hover.border > tbody > tr")
}

export default WishListPage