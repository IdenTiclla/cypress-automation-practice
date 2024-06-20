class OrderHistoryPage {
    getOrdersElements = () => cy.get("div#content table tbody tr")
}

export default OrderHistoryPage
