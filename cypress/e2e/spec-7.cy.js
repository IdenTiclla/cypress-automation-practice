describe("actions test suite", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Actions/index.html")
    })

    it.only("Test 0 - Basic structure of the page", () => {
        cy.contains("WebdriverUniversity.com (Actions)")
        cy.contains("The Key to Success is to take massive ACTION!")
        cy.contains("Copyright © www.GianniBruno.com")
        
        // cy.get("div#draggable").drag("div#droppable", {force: true})        
    })
})