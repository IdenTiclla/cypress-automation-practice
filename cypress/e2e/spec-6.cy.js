describe("Dropdowns, checkboxes and radio buttons", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })
    it.only("Test 1 - Default values on dropdowns", () => {
        cy.get("#dropdowm-menu-1").should('have.value', 'java')
        cy.get("#dropdowm-menu-2").should('have.value', 'eclipse')
        cy.get("#dropdowm-menu-3").should('have.value', 'html')


        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')
    })
})