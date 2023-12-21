describe('My test suite', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/To-Do-List/index.html")
    })

    it.only("Checking default", () => {
        cy.get("h1").contains("TO-DO LIST")
        cy.get("input").should("have.attr", 'placeholder', 'Add new todo')
        cy.get("i.fa.fa-plus").should('be.visible')
    })

    it("Test 0 - Testing todo list  title", () => {
        cy.title().should('eq', 'WebDriver | To Do List')
    })

    it("Test 1 - Default todo list quantity of items", () => {
        cy.get("ul li").should('have.length', 3)
    })
    
    
})