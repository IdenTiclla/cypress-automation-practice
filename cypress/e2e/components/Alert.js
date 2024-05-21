class Alert {
    getAlert = () => cy.get("nav[aria-label='breadcrumb'] + div[class*='alert']")
}

export default Alert