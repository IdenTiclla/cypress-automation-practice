import Home from "../pages/Home"
import ShoppingCartModal from "./components/ShoppingCartModal"
import Login from "../pages/Login"
import RightNavigationBar from "./components/RightNavigationBar"
import RegisterPage from "../pages/RegisterPage"
import Notification from "./components/Notification"

const loginPage = new Login()
const homepage = new Home()
const shoppingCartModal = new ShoppingCartModal()
const rightNavigationBar = new RightNavigationBar()
const registerPage = new RegisterPage()
const notificationComponent = new Notification()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test suite edited with vim', () => {
  
  it('Test case edited with vim', () => {
    cy.visit('https://example.cypress.io')
  })
  
  it('Testing sausage page', () => {
    homepage.visit()
    homepage.getHomeOption().click()
    homepage.getCartIconButton().click()

    shoppingCartModal.closeButton()
    shoppingCartModal.validateMessageForEmptyCart('Your shopping cart is empty!')
    
    homepage.getHomeOption().click()
    
    homepage.getSpecialHotOption().click()

    homepage.getBlogOption().click()

  })

  it('Testing wish list with not logged user', () => {
    homepage.visit()
    homepage.getWishListIconButton().click()
    cy.wait(3000)
    loginPage.getEmailInputField().should('be.visible')
    loginPage.getPasswordInputField().should('be.visible')
    loginPage.getSubmitButton().should('be.visible')
    loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
    cy.wait(3000)
  })

  it('Testing the corousel component', () => {
    homepage.visit()
    homepage.getFirstImageInMainCarousel().should('be.visible')
    homepage.getCarouselNextButton().realHover()
    homepage.getCarouselNextButton().click()
    cy.wait(1000)
    homepage.getSecondImageInMainCarousel().should('be.visible')
    homepage.getCarouselNextButton().realHover()
    cy.wait(1000)
    homepage.getCarouselNextButton().click()
    homepage.getThirdImageInMainCarousel().should('be.visible')

  })
  it('Testing Right navigation component', () => {
    homepage.visit()
    homepage.getMyAccountOption().click()
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

  it("Default test for register page.", () => {
    homepage.visit()
    homepage.getMyAccountOption().click()
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
  it('Testing register errors.', () => {
    homepage.visit()
    homepage.getMyAccountOption().click()
    rightNavigationBar.getRegisterOption().click()
    registerPage.getWarningComponent().should('not.exist')
    registerPage.getContinueButton().click()
    registerPage.getFirstnameErrorText().should('have.text', 'First Name must be between 1 and 32 characters!')
    registerPage.getLastnameIErrorText().should('have.text', 'Last Name must be between 1 and 32 characters!')
    registerPage.getEmailErrorText().should('have.text', 'E-Mail Address does not appear to be valid!')
    registerPage.getTelephoneErrorText().should('have.text', 'Telephone must be between 3 and 32 characters!')
    registerPage.getPasswordErrorText().should('have.text', 'Password must be between 4 and 20 characters!')
    registerPage.getWarningComponent().should('be.visible')
    registerPage.getWarningComponent().should('have.text', ' Warning: You must agree to the Privacy Policy!')
  })

  it('Test for already registered email', () => {
    homepage.visit()
    homepage.getMyAccountOption().click()
    rightNavigationBar.getRegisterOption().click()
    cy.url().should('contain', 'account/register')
    registerPage.getWarningComponent().should('not.exist')
    registerPage.getFirstnameInput().type('Jose')
    registerPage.getLastnameInput().type('Lopez')
    registerPage.getEmailInput().type('jose.lopez@gmail.com')
    registerPage.getTelephoneInput().type('77045789')
    registerPage.getPasswordInput().type('P@ssw0rd')
    registerPage.getPasswordConfirmInput().type('P@ssw0rd')
    registerPage.getYesRadioButton().click()
    registerPage.getPolicyPrivacyCheckbox().click()
    registerPage.getContinueButton().click()
    registerPage.getWarningComponent().should('be.visible')
    registerPage.getWarningComponent().should('have.text', ' Warning: E-Mail Address is already registered!')
  })

  it.only('test for adding an item to the cart', () => {
    homepage.visit()
    homepage.getTopProducts().should('have.length', 10)
    cy.wait(3000)
    homepage.getTopProducts().eq(0).realHover()
    homepage.getTopProducts().eq(0).find('div.product-action').should('be.visible')
    homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('have.length', 4)
    homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('be.be.visible')
    homepage.getTopProducts().eq(0).find('div.product-action').find('button').eq(0).click()
    notificationComponent.getHeaderTitle().should('be.visible')
    notificationComponent.getHeaderTitle().should('contain', '1 item(s) - $170.00')
    notificationComponent.getBodyMessage().should('be.visible')
    notificationComponent.getBodyMessage().should('contain', 'Success: You have added ')
    notificationComponent.getBodyMessage().should('contain', ' to your ')
    notificationComponent.getBodyMessage().should('have.text', 'Success: You have added iMac to your shopping cart!')
    notificationComponent.getCloseButton().should('be.visible')
    notificationComponent.getViewCartButton().should('be.visible')
    notificationComponent.getCheckoutButton().should('be.visible')
  })
  
  
})
