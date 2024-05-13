describe('Api testing test suite', () => {
    it('should return a list of users', () => {
        cy.request({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/users',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(10)
        })
    });
})