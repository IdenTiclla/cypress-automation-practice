describe("Dropdowns, checkboxes and radio buttons", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })
    it("Test 1 - Default values on dropdowns", () => {
        cy.get("#dropdowm-menu-1").should('have.value', 'java')
        cy.get("#dropdowm-menu-2").should('have.value', 'eclipse')
        cy.get("#dropdowm-menu-3").should('have.value', 'html')
    })
    it("Test 2 - Testing dropdowns one time", () => {
        cy.get("#dropdowm-menu-1").select("c#")
        cy.get("#dropdowm-menu-2").select("maven")
        cy.get("#dropdowm-menu-3").select("javascript")

        cy.get("#dropdowm-menu-1").should('have.value', 'c#')
        cy.get("#dropdowm-menu-2").should('have.value', 'maven')
        cy.get("#dropdowm-menu-3").should('have.value', 'javascript')
    })
    it("Test 3 - Testing dropdowns changing values multiple times", () => {
        cy.get("#dropdowm-menu-1").should('have.value', 'java')
        cy.get("#dropdowm-menu-2").should('have.value', 'eclipse')
        cy.get("#dropdowm-menu-3").should('have.value', 'html')

        cy.get("#dropdowm-menu-1").select("c#")
        cy.get("#dropdowm-menu-2").select("maven")
        cy.get("#dropdowm-menu-3").select("css")

        cy.get("#dropdowm-menu-1").should('have.value', 'c#')
        cy.get("#dropdowm-menu-2").should('have.value', 'maven')
        cy.get("#dropdowm-menu-3").should('have.value', 'css')


        cy.get("#dropdowm-menu-1").select("python")
        cy.get("#dropdowm-menu-2").select("testng")
        cy.get("#dropdowm-menu-3").select("javascript")

        cy.get("#dropdowm-menu-1").should('have.value', 'python')
        cy.get("#dropdowm-menu-2").should('have.value', 'testng')
        cy.get("#dropdowm-menu-3").should('have.value', 'javascript')


        cy.get("#dropdowm-menu-1").select("sql")
        cy.get("#dropdowm-menu-2").select("junit")
        cy.get("#dropdowm-menu-3").select("jquery")

        cy.get("#dropdowm-menu-1").should('have.value', 'sql')
        cy.get("#dropdowm-menu-2").should('have.value', 'junit')
        cy.get("#dropdowm-menu-3").should('have.value', 'jquery')
    })
    it("Test 4 - Testing checkboxes default state", () => {
        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 3)
        cy.get("input[type='checkbox']:checked").should('have.length', 1)


    })
    it("Test 5 - Testing checkboxes unchecking all checkboxes", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)

    })
    it("Test 6- Checking only the first one checkbox", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)


        cy.get("input[value='option-1']").check()
        cy.get("input[value='option-1']").should('be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:checked").should('have.length', 1)


    })
    it("Test 7 - Test for the second checkbox", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)


        cy.get("input[value='option-2']").check()
        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:checked").should('have.length', 1)

    })


    it("Test 8 - Test for the third checkbox", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)


        cy.get("input[value='option-3']").check()
        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:checked").should('have.length', 1)

    })

    it("Test 9 - Adding test for the fourth checkbox", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)


        cy.get("input[value='option-4']").check()
        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('be.checked')

        cy.get("input[type='checkbox']:checked").should('have.length', 1)

    })


    it("Test 10 - Adding test for checking multiple options (first two options)", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)


        cy.get("input[type='checkbox']").check(['option-1', 'option-2'])

        cy.get("input[value='option-1']").should('be.checked')
        cy.get("input[value='option-2']").should('be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')
        cy.get("input[type='checkbox']:checked").should('have.length', 2)

    })
    it("Test 11 - Adding test for checking multiple options (last two options)", () => {
        cy.get("input[value='option-3']").uncheck()

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('not.be.checked')
        cy.get("input[value='option-4']").should('not.be.checked')

        cy.get("input[type='checkbox']:not(:checked)").should('have.length', 4)

        cy.get("input[type='checkbox']").check(['option-3', 'option-4'])

        cy.get("input[value='option-1']").should('not.be.checked')
        cy.get("input[value='option-2']").should('not.be.checked')
        cy.get("input[value='option-3']").should('be.checked')
        cy.get("input[value='option-4']").should('be.checked')

        cy.get("input[type='checkbox']:checked").should('have.length', 2)
    })
    it.only("Test 12 - Testing radio buttons default state", () => {
        cy.get("form#radio-buttons input[type='radio']").should('have.length', 5)
        cy.get("form#radio-buttons input[type='radio']:nth-of-type(1)").should('not.be.checked')
        cy.get("form#radio-buttons input[type='radio']:nth-of-type(2)").should('not.be.checked')
        cy.get("form#radio-buttons input[type='radio']:nth-of-type(3)").should('not.be.checked')
        cy.get("form#radio-buttons input[type='radio']:nth-of-type(4)").should('not.be.checked')
        cy.get("form#radio-buttons input[type='radio']:nth-of-type(5)").should('not.be.checked')
        
        
    })
})
