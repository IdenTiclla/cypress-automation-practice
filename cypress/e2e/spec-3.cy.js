describe('My test suite', () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/To-Do-List/index.html")
    })

    it("Checking default", () => {
        cy.get("h1").contains("TO-DO LIST")
        cy.get("input").as('todo-input')
        cy.get("@todo-input").should("have.attr", 'placeholder', 'Add new todo')
        cy.get("@todo-input").should('be.visible')
        cy.get("i.fa.fa-plus").should('be.visible')
    })

    it("Test 0 - Testing todo list  title", () => {
        cy.title().should('eq', 'WebDriver | To Do List')
    })

    it("Test 1 - Default todo list quantity of items", () => {
        cy.get("ul li").should('have.length', 3)
    })
    
    it("Test 2 - Basic input field behavior", () => {
        cy.get("input").as('todo-input')
        cy.get("@todo-input").should('be.visible')
        cy.get("i.fa.fa-plus").click()
        cy.get("@todo-input").should('not.be.visible')
    })
    it("Test 3 - Adding a new todo item", () => {
        cy.get("ul li").as('list-items')
        cy.get("@list-items").should('have.length', 3)
        cy.get("input").type("my new todo item{enter}")
        cy.get("@list-items").should('have.length', 4)
        cy.get("li:last-child").should('have.text', 'my new todo item')
        // this is a bug there's a additional space on li elements
    })
    it("Test 4 - Complete last todo", () => {
        cy.get("ul li").as('list-items')
        cy.get("@list-items").should('have.length', 3)
        
        cy.get("li:last-of-type").trigger("mouseover")
        cy.get("li:last-of-type").invoke("show").click()

        cy.get("li:last-of-type").should('have.attr', 'class', 'completed')

    })
    it("Test 5 - Complete all todo", () => {
        cy.get("ul li").as("list-items")
        cy.get("@list-items").should('have.length', 3)

        cy.get("li:nth-of-type(1)").click()
        cy.get("li:nth-of-type(2)").click()
        cy.get("li:nth-of-type(3)").click()

        cy.get("li[class='completed']").as("completed-todos")
        cy.get("@completed-todos").should('have.length', 3)
    })

    it("Test 6 - Testing complete functionality", () => {
        cy.get("ul li").as("list-items")
        cy.get("li[class='completed']").should('not.exist')
        
        cy.get("li:nth-of-type(1)").click()
        cy.get("li[class='completed']").as("completed-todos")
        cy.get("@completed-todos").should('have.length', 1)
        cy.get("li:nth-of-type(2)").click()
        cy.get("@completed-todos").should('have.length', 2)
        cy.get("li:nth-of-type(3)").click()
        cy.get("@completed-todos").should('have.length', 3)


        cy.get("li:nth-of-type(1)").click()
        cy.get("@completed-todos").should('have.length', 2)
        
        cy.get("li:nth-of-type(2)").click()
        cy.get("@completed-todos").should('have.length', 1)
        
        cy.get("li:nth-of-type(3)").click()
        cy.get("li[class='completed']").should('not.exist')

    })

    it.only("Test 7 - Delete first todo", () => {
        cy.get("ul li").as("list-items")
        cy.get("@list-items").should("have.length", 3)
        cy.get("li:nth-of-type(1)").realHover()
        cy.wait(1000)

        cy.get("li:nth-of-type(1) span i").click()
        cy.wait(1000)

        cy.get("@list-items").should("have.length", 2)
    })
    // cy.get("li:last-of-type span").invoke('show').click() for delete an todo

})