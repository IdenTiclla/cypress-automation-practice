class Alert {
    getAlert = () => cy.get("div[class*='alert-dismissible']")

    checkAlertIsVisible = () => {
        this.getAlert().should("be.visible")
    }

    checkAlertIsNotVisible = () => {
        this.getAlert().should("not.exist")
    }

    checkAlertMessage = (message) => {
        this.getAlert().should("contain", message)
    }

}

export default Alert