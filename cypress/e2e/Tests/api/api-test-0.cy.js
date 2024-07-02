describe("Test for testing an api.", () => {
    it("Test 0 - checking api status code", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
    it("Test 1 - Checking headers values.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            expect(response.headers).to.have.property('content-type', "application/json; charset=utf-8")
            expect(response.headers).to.have.property('vary', "Origin, Accept-Encoding")
        })
    })
    it("Test 2 - Checking the amount of data on response.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            expect(response.body).to.have.length(500)
            cy.wrap(response.body).should('have.length', 500)
        })
    })
    it("Test 3 - Checking the amount of property of every of an object", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            const firstObject = response.body[0]
            expect(Object.keys(firstObject)).to.have.length(5)
            cy.wrap(Object.keys(firstObject)).should('have.length', 5)
        })
    })
    it.only("Test 4 - Checking object's properties on response.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            const firstObject = response.body[0]
            expect(firstObject).to.have.property("postId")
            expect(firstObject).to.have.property("id")
            expect(firstObject).to.have.property("name")
            expect(firstObject).to.have.property("email")
            expect(firstObject).to.have.property("body")

            cy.wrap(firstObject).should('have.a.property', 'postId')
            cy.wrap(firstObject).should('have.a.property', 'id')
            cy.wrap(firstObject).should('have.a.property', 'name')
            cy.wrap(firstObject).should('have.a.property', 'email')
            cy.wrap(firstObject).should('have.a.property', 'body')
        })
    })
})