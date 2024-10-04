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
          expect(response.body).to.be.an('array')
          expect(response.body).to.have.length(10)
          const users = response.body
          users.forEach(user => {
            expect(user).to.have.property('id')
            expect(user).to.have.property('name')
            expect(user).to.have.property('username')
            expect(user).to.have.property('email')
            expect(user).to.have.property('address')
            expect(user.address).to.have.property('street')
            expect(user.address).to.have.property('suite')
            expect(user.address).to.have.property('city')
            expect(user.address).to.have.property('zipcode')
            expect(user.address).to.have.property('geo')
            expect(user.address.geo).to.have.property('lat')
            expect(user.address.geo).to.have.property('lng')
            expect(user).to.have.property('phone')
            expect(user).to.have.property('website')
            expect(user).to.have.property('company')
            expect(user.company).to.have.property('name')
            expect(user.company).to.have.property('catchPhrase')
            expect(user.company).to.have.property('bs')
          });
        })
    })
    it('Testig first element of the api posts', () => {
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

        expect(response.body).to.be.an('object')

        expect(response.body).to.have.property('title')
        expect(response.body).to.have.property('body')
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('userId')

        expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        expect(response.body.body).to.eq(`quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`)
        expect(response.body.id).to.eq(1)
        expect(response.body.userId).to.eq(1)
      })
    })
    
    it('Adding test for the api posts', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        header: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response)
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.length(100)
      })
    })
    it('Test - Checking albums properties', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/albums',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).eq(200)
        expect(response.body).to.be.an('array')
        const albums = response.body
        albums.map(album => {
          expect(album).to.have.property('title')
          expect(album).to.have.property('id')
          expect(album).to.have.property('userId')
        })
        console.log(response)
      })
    })
    it.only("Test - checking the todos route", () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos',
        header: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response)
        const todos = response.body
        expect(todos).to.have.length(200)
        console.log(todos)
        todos.map(todo => {
          expect(todo).to.have.property('userId')
          expect(todo).to.have.property('id')
          expect(todo).to.have.property('title')
          expect(todo).to.have.property('completed')
        })
      })
    })
})