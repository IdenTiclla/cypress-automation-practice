import Home from "../../pages/Home"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"
import AddressBookPage from "../../pages/AddressBookPage"
import WishListPage from "../../pages/WishListPage"
import OrderHistoryPage from "../../pages/OrderHistoryPage"
import ChangePasswordPage from "../../pages/ChangePasswordPage"
import NewsletterSubscriptionPage from "../../pages/NewsletterSubscriptionPage"

const homepage = new Home()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()
const addressBookPage = new AddressBookPage()
const wishListPage = new WishListPage()
const orderHistoryPage = new OrderHistoryPage()
const changePasswordPage = new ChangePasswordPage()
const newsletterSubscriptionPage = new NewsletterSubscriptionPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('My Account Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
    
    // Login before each test
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('Verify my account page displays correct sections', () => {
    // Verify account sidebar options
    myAccountPage.getMyAccountSidebarOption().should('exist')
    myAccountPage.getEditAccountSidebarOption().should('exist')
    myAccountPage.getPasswordSidebarOption().should('exist')
    myAccountPage.getAddressBookSidebarOption().should('exist')
    myAccountPage.getWishListSidebarOption().should('exist')
    myAccountPage.getOrderHistorySidebarOption().should('exist')
    
    // Verify main content
    myAccountPage.getPageTitle().should('have.text', 'My Account')
  })

  it('Verify navigation to address book page', () => {
    myAccountPage.getAddressBookSidebarOption().click()
    addressBookPage.getPageTitle().should('have.text', 'Address Book')
  })

  it('Verify navigation to wish list page', () => {
    myAccountPage.getWishListSidebarOption().click()
    wishListPage.getPageTitle().should('have.text', 'My Wish List')
  })

  it('Verify navigation to order history page', () => {
    myAccountPage.getOrderHistorySidebarOption().click()
    orderHistoryPage.getPageTitle().should('have.text', 'Order History')
  })

  it('Verify navigation to change password page', () => {
    myAccountPage.getPasswordSidebarOption().click()
    changePasswordPage.getPageTitle().should('have.text', 'Change Password')
  })

  it.only("Subscribe and unsubscribe to newsleter.", () => {
    // homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
    // loginPage.login(Cypress.env("email"), Cypress.env("password"))

    myAccountPage.getMyAccountOptions().eq(4).click()
    newsletterSubscriptionPage.getNoCheckbox().should('have.attr', 'checked')
    newsletterSubscriptionPage.getYesCheckbox().should('not.have.attr', 'checked')

    newsletterSubscriptionPage.checkYes()
    newsletterSubscriptionPage.getContinueButton().click()

    myAccountPage.alertComponent.getAlert().should('have.text', ' Success: Your newsletter subscription has been successfully updated!')
    myAccountPage.alertComponent.getAlert().should('have.class', 'alert-success')
    myAccountPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(21, 87, 36)')
    myAccountPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(212, 237, 218)')

    myAccountPage.getMyAccountOptions().eq(4).click()
    newsletterSubscriptionPage.getNoCheckbox().should('not.have.attr', 'checked')
    newsletterSubscriptionPage.getYesCheckbox().should('have.attr', 'checked')


    newsletterSubscriptionPage.checkNo()
    newsletterSubscriptionPage.getContinueButton().click()

    myAccountPage.alertComponent.getAlert().should('have.text', ' Success: Your newsletter subscription has been successfully updated!')
    myAccountPage.alertComponent.getAlert().should('have.class', 'alert-success')
    myAccountPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(21, 87, 36)')
    myAccountPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(212, 237, 218)')
  })
}) 