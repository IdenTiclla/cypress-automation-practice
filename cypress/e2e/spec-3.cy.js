describe('My test suite', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/To-Do-List/index.html")
    })

    it("Checking default", () => {
        cy.get("h1").contains("TO-DO LIST")
        cy.get("input").should("have.attr", 'placeholder', 'Add new todo')
        cy.get("input").should('be.visible')
        cy.get("i.fa.fa-plus").should('be.visible')
    })

    it("Test 0 - Testing todo list  title", () => {
        cy.title().should('eq', 'WebDriver | To Do List')
    })

    it("Test 1 - Default todo list quantity of items", () => {
        cy.get("ul li").should('have.length', 3)
    })
    
    it("Test 2 - Basic input field behavior", () => {
        cy.get("input").should('be.visible')
        cy.get("i.fa.fa-plus").click()
        cy.get("input").should('not.be.visible')
    })
    it.only("Test 3 - Adding a new todo item", () => {
        cy.get("ul li").should('have.length', 3)
        cy.get("input").type("my new todo item{enter}")
        cy.get("ul li").should('have.length', 4)
        cy.get("li:last-child").should('have.text', 'my new todo item')
        // this is a bug there's a additional space on li elements
    })
})