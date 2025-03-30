import Home from "../../pages/Home"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"
import AddressBookPage from "../../pages/AddressBookPage"
import WishListPage from "../../pages/WishListPage"
import OrderHistoryPage from "../../pages/OrderHistoryPage"
import ChangePasswordPage from "../../pages/ChangePasswordPage"

const homepage = new Home()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()
const addressBookPage = new AddressBookPage()
const wishListPage = new WishListPage()
const orderHistoryPage = new OrderHistoryPage()
const changePasswordPage = new ChangePasswordPage()

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
}) 