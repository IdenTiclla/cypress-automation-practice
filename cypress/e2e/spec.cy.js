import Home from "../pages/Home"
import ShoppingCartModal from "./components/ShoppingCartModal"
const HomePage = new Home()
const shoppingCartModal = new ShoppingCartModal()
describe('Test suite edited with vim', () => {
  
  it('Test case edited with vim', () => {
    cy.visit('https://example.cypress.io')
  })
  it.only('Testing sausage page', () => {
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
})
