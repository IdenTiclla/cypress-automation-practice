describe("actions test suite", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Actions/index.html")
    })

    it("Test 0 - Basic structure of the page", () => {
        cy.contains("WebdriverUniversity.com (Actions)")
        cy.contains("The Key to Success is to take massive ACTION!")
        cy.contains("Copyright © www.GianniBruno.com")
        
    })
    it.only("Test 1 - Testing drag and drop", () => {
        cy.get("div#droppable > p > b").should('have.text', 'DROP HERE!')     
        cy.get("div#draggable").drag("div#droppable", {force: true})
        cy.get("div#droppable > p > b").should('have.text', 'Dropped!')     
    })
})