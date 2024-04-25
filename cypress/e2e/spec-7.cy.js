describe("actions test suite", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Actions/index.html")
    })

    it("Test 0 - Basic structure of the page", () => {
        cy.contains("WebdriverUniversity.com (Actions)")
        cy.contains("The Key to Success is to take massive ACTION!")
        cy.contains("Copyright © www.GianniBruno.com")
        
    })
    it("Test 1 - Testing drag and drop", () => {
        cy.get("div#droppable > p > b").should('have.text', 'DROP HERE!')     
        cy.get("div#draggable").drag("div#droppable", {force: true})
        cy.get("div#droppable > p > b").should('have.text', 'Dropped!')     
    })

    it("Test 2 - Test for double click scenario", () => {
        cy.get("div#double-click").should('not.have.class', 'double')
        
        cy.get("div#double-click h2").should('have.text', 'Double Click Me!')

        cy.get("div#double-click").dblclick()

        cy.get("div#double-click").should('have.class', 'double')

    })

    it("Test 4 - Test for hover state on dropdowns", () => {
        cy.get('div.thumbnail > div.dropdown:nth-of-type(1) > div a').should('not.be.visible')
        cy.get("div.thumbnail > div.dropdown:nth-of-type(1)").realHover()
        cy.get('div.thumbnail > div.dropdown:nth-of-type(1) > div a').should('be.visible')
        cy.get('div.thumbnail > div.dropdown:nth-of-type(1) > div a').should('have.length', 1)
        cy.wait(1000)

        cy.get('div.thumbnail > div.dropdown:nth-of-type(2) > div a').should('not.be.visible')
        cy.get("div.thumbnail > div.dropdown:nth-of-type(2)").realHover()
        cy.get('div.thumbnail > div.dropdown:nth-of-type(2) > div a').should('be.visible')
        cy.get('div.thumbnail > div.dropdown:nth-of-type(2) > div a').should('have.length', 1)
        cy.wait(1000)

        cy.get('div.thumbnail > div.dropdown:nth-of-type(3) > div a').should('not.be.visible')
        cy.get("div.thumbnail > div.dropdown:nth-of-type(3)").realHover()
        cy.get('div.thumbnail > div.dropdown:nth-of-type(3) > div a').should('be.visible')
        cy.get('div.thumbnail > div.dropdown:nth-of-type(3) > div a').should('have.length', 2)
        cy.wait(1000)
    })
    it.only("test 5 - Click and hold test", () => {
        cy.get("div#click-box > p").should('have.text', 'Click and Hold!')
        cy.get("div#click-box").trigger("mousedown")
        cy.get("div#click-box").should('have.text', 'Well done! keep holding that click now.....')
    })
})