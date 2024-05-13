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
    })
    it.only('Testig first element of the api posts', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        header: {
          'Content-type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        console.log(response)
        console.log(response.body)
        // expect(response.body).to.have.length(1)
        expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        expect(response.body.body).to.eq(`quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`)
        expect(response.body.id).to.eq(1)
        expect(response.body.userId).to.eq(1)
      })
    })
})