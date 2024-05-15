import Home from "../pages/Home"
import ShoppingCartModal from "./components/ShoppingCartModal"
import Login from "../pages/Login"
import RightNavigationBar from "./components/RightNavigationBar"
import RegisterPage from "../pages/RegisterPage"

const loginPage = new Login()
const HomePage = new Home()
const shoppingCartModal = new ShoppingCartModal()
const rightNavigationBar = new RightNavigationBar()
const registerPage = new RegisterPage()

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

  it('Testing the corousel component', () => {
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
  it('Testing Right navigation component', () => {
    HomePage.visit()
    HomePage.getMyAccountOption().click()
    rightNavigationBar.getLoginOption().should('be.visible')
    rightNavigationBar.getRegisterOption().should('be.visible')
    rightNavigationBar.getForgottenPasswordOption().should('be.visible')
    rightNavigationBar.getMyAccountOption().should('be.visible')
    rightNavigationBar.getAddressBookOption().should('be.visible')
    rightNavigationBar.getWishlistBookOption().should('be.visible')
    rightNavigationBar.getOrderHistoryOption().should('be.visible')
    rightNavigationBar.getDownloadsOption().should('be.visible')
    rightNavigationBar.getRecurringPaymentOption().should('be.visible')
    rightNavigationBar.getRewardPointsOption().should('be.visible')
    rightNavigationBar.getReturnsOption().should('be.visible')
    rightNavigationBar.getTransactionOption().should('be.visible')
    rightNavigationBar.getNewsletterOption().should('be.visible')
  })

  it.only("Default test for register page.", () => {
    HomePage.visit()
    HomePage.getMyAccountOption().click()
    rightNavigationBar.getRegisterOption().click()
    registerPage.getFirstnameInput().should('be.visible')
    registerPage.getLastnameInput().should('be.visible')
    registerPage.getEmailInput().should('be.visible')
    registerPage.getTelephoneInput().should('be.visible')
    registerPage.getPasswordInput().should('be.visible')
    registerPage.getPasswordConfirmInput().should('be.visible')
    registerPage.getYesRadioButton().should('be.visible')
    registerPage.getNoRadioButton().should('be.visible')
    registerPage.getPolicyPrivacyCheckbox().should('be.visible')
    registerPage.getPolicyPrivacyLinkElement().should('be.visible')
    registerPage.getContinueButton().should('be.visible')
  })
})
