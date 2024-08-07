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
    it("Test 4 - Checking object's properties on response.", () => {
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

    it("Test 5 - Checking object's properties values on response", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            const firstObject = response.body[0]
            console.log(firstObject)
            expect(firstObject).to.have.property('id', 1)
            expect(firstObject).to.have.property('postId', 1)
            expect(firstObject).to.have.property('name', "id labore ex et quam laborum")
            expect(firstObject).to.have.property('email', "Eliseo@gardner.biz")
            const expectedBody = `laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`
            expect(firstObject).to.have.property('body', expectedBody)
            expect(firstObject).to.have.property('body', `laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`)

            expect(firstObject.id).to.deep.eq(1)
            expect(firstObject.postId).to.deep.eq(1)
            expect(firstObject.name).to.deep.eq('id labore ex et quam laborum')
            expect(firstObject.email).to.deep.eq('Eliseo@gardner.biz')
            expect(firstObject.body).to.deep.eq(`laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`)

            cy.wrap(firstObject).should('have.a.property','id', 1)
            cy.wrap(firstObject).should('have.a.property','postId', 1)
            cy.wrap(firstObject).should('have.a.property','name', 'id labore ex et quam laborum')
            cy.wrap(firstObject).should('have.a.property','email', 'Eliseo@gardner.biz')
            cy.wrap(firstObject).should('have.a.property','body', `laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`)

        })
    })
    it("Test 6 - Checking all object's properties values on response.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            const comments = response.body
            comments.map(comment => {
                expect(comment).to.have.property('id')  
                expect(comment).to.have.property('postId')
                expect(comment).to.have.property('name')
                expect(comment).to.have.property('email')
                expect(comment).to.have.property('body')
            })
        })
    })

    it("Test 7 - Checking elements type.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(response => {
            const data = response.body
            expect(data).to.be.an('array')
            expect(data[0].id).to.be.an('number')
            expect(data[0].postId).to.be.an('number')
            expect(data[0].name).to.be.an('string')
            expect(data[0].email).to.be.an('string')
            expect(data[0].body).to.be.an('string')
        })
    })
    it("Test 8 - Checking comments for getting specific id with id = 1", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments/1'
        }).then(response => {
            const data = response.body
            expect(data).to.be.an('object')
            expect(data).to.not.be.an('array')
            expect(Object.keys(data)).to.have.length(5)
            expect(data.postId).to.be.an('number')
            expect(data.id).to.be.an('number')
            expect(data.name).to.be.an('string')
            expect(data.email).to.be.an('string')
            expect(data.body).to.be.an('string')
        })
    })
    it("Test 9 - Requesting 2 routes and.", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(commentsResponse => {
            cy.request({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).then(postsResponse => {
                const comments = commentsResponse.body
                const posts = postsResponse.body
                // console.log(comments)
                // console.log(posts)
                const joinedData = posts.map(post => {
                    return {
                        post: post,
                        comments: comments.filter(comment => comment.postId === post.id)
                    }
                })
                console.log(joinedData)
                console.log(typeof(joinedData))
                expect(joinedData).to.be.an('array')
                expect(joinedData[0].post).to.be.an('object')
                expect(joinedData[0].comments).to.be.an('array')
                expect(joinedData[0].comments).to.have.length(5)
            })
        })
    })
    it.only("Test 10 - Requesting posts route", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(postsResponse => {
            const posts = postsResponse.body
            expect(posts).to.be.an('array')
            expect(posts).to.have.length(100)
            posts.map(post => {
                expect(post).to.be.an('object')
                expect(post).to.have.property('body')
                expect(post).to.have.property('id')
                expect(post).to.have.property('title')
                expect(post).to.have.property('userId')

                expect(post.body).to.be.an('string')
                expect(post.id).to.be.an('number')
                expect(post.title).to.be.an('string')
                expect(post.userId).to.be.an('number')
            })
        })
    })

})