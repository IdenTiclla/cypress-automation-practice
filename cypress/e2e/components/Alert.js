class Alert {
    getAlert = () => cy.get("div[class*='alert-dismissible']")
}

export default Alert