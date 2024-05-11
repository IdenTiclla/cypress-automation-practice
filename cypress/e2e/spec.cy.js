import Home from "../pages/Home"
import ShoppingCartModal from "./components/ShoppingCartModal"
import Login from "../pages/Login"
const loginPage = new Login()
const HomePage = new Home()
const shoppingCartModal = new ShoppingCartModal()
describe('Test suite edited with vim', () => {
  
  it('Test case edited with vim', () => {
    cy.visit('https://example.cypress.io')
  })
  it('Testing sausage page', () => {
    HomePage.visit()
    HomePage.getHomeOption().click()
    cy.wait(3000)
    HomePage.getCartIconButton().click()
    cy.wait(3000)
    // shoppingCartModal.getCloseButton().click()
    // cy.wait(10000)
    shoppingCartModal.closeButton()
    shoppingCartModal.validateMessageForEmptyCart('Your shopping cart is empty!')
  })
  it.only('Testing wish list with not logged user', () => {
    HomePage.visit()
    HomePage.getWishListIconButton().click()
    cy.wait(3000)
    loginPage.getEmailInputField().should('be.visible')
    loginPage.getPasswordInputField().should('be.visible')
    loginPage.getSubmitButton().should('be.visible')
    loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
    cy.wait(3000)
  })
})
