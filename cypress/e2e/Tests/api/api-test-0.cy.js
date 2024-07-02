describe("Test for testing an api.", () => {
    it("Test 0 - checking api status code", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
    it.only("Test 1 - Checking headers values.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            expect(response.headers).to.have.property('content-type', "application/json; charset=utf-8")
            expect(response.headers).to.have.property('vary', "Origin, Accept-Encoding")
        })
    })
})