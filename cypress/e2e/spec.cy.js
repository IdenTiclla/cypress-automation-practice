import Home from "../pages/Home"
import ShoppingCartModal from "./components/ShoppingCartModal"
import Login from "../pages/Login"
const loginPage = new Login()
const HomePage = new Home()
const shoppingCartModal = new ShoppingCartModal()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test suite edited with vim', () => {
  
  it('Test case edited with vim', () => {
    cy.visit('https://example.cypress.io')
  })
  
  it('Testing sausage page', () => {
    HomePage.visit()
    HomePage.getHomeOption().click()
    HomePage.getCartIconButton().click()

    shoppingCartModal.closeButton()
    shoppingCartModal.validateMessageForEmptyCart('Your shopping cart is empty!')
    
    HomePage.getHomeOption().click()
    
    HomePage.getSpecialHotOption().click()

    HomePage.getBlogOption().click()

  })

  it('Testing wish list with not logged user', () => {
    HomePage.visit()
    HomePage.getWishListIconButton().click()
    cy.wait(3000)
    loginPage.getEmailInputField().should('be.visible')
    loginPage.getPasswordInputField().should('be.visible')
    loginPage.getSubmitButton().should('be.visible')
    loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
    cy.wait(3000)
  })

  it.only('Testing the corousel component', () => {
    HomePage.visit()
    HomePage.getFirstImageInMainCarousel().should('be.visible')
    HomePage.getCarouselNextButton().realHover()
    HomePage.getCarouselNextButton().click()
    cy.wait(1000)
    HomePage.getSecondImageInMainCarousel().should('be.visible')
    HomePage.getCarouselNextButton().realHover()
    cy.wait(1000)
    HomePage.getCarouselNextButton().click()
    HomePage.getThirdImageInMainCarousel().should('be.visible')

  })
})
