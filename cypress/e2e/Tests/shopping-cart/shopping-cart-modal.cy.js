import Home from "../../pages/Home"
import ShoppingCartModal from "../../components/ShoppingCartModal"

const homepage = new Home()
const shoppingCartModal = new ShoppingCartModal()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Shopping Cart Modal Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('Verify empty shopping cart modal', () => {
    homepage.mainNavigationComponent.getHomeOption().click()
    homepage.mainHeaderComponent.getCartIconButton().click()

    shoppingCartModal.closeButton()
    shoppingCartModal.validateMessageForEmptyCart('Your shopping cart is empty!')
  })

  it('Verify navigation works after viewing cart modal', () => {
    homepage.mainNavigationComponent.getHomeOption().click()
    homepage.mainHeaderComponent.getCartIconButton().click()
    shoppingCartModal.closeButton()

    homepage.mainNavigationComponent.getSpecialHotOption().click()
    cy.url().should('include', 'special')

    homepage.mainNavigationComponent.getBlogOption().click()
    cy.url().should('include', 'blog')
  })
}) 