import Home from "../pages/Home"
import Login from "../pages/Login"
import RegisterPage from "../pages/RegisterPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"

import ModulesPage from "../pages/ModulesPage"
import WidgetsPage from "../pages/WidgetsPage"
import DesignsPage from "../pages/DesignsPages"

import ForgottenPasswordPage from "../pages/ForgottenPasswordPage"
import MyAccountPage from "../pages/MyAccountPage"
import ChangePasswordPage from "../pages/ChangePasswordPage"

import SearchResultPage from "../pages/SearchResultPage"

import ShoppingCartModal from "./components/ShoppingCartModal"
import Notification from "./components/Notification"
import RightNavigationBar from "./components/RightNavigationBar"


const loginPage = new Login()
const homepage = new Home()
const registerPage = new RegisterPage()
const shoppingCartPage = new ShoppingCartPage()
const shoppingCartModal = new ShoppingCartModal()
const rightNavigationBar = new RightNavigationBar()
const notificationComponent = new Notification()
const modulesPage = new ModulesPage()
const widgetsPage = new WidgetsPage()
const designsPage = new DesignsPage()
const searchResultPage = new SearchResultPage()
const forgottenPasswordPage = new ForgottenPasswordPage()
const myAccountPage = new MyAccountPage()
const changePasswordPage = new ChangePasswordPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test suite edited with vim', () => {
  context('720 resolution', () => {
    beforeEach(() => {
      homepage.visit()
      cy.get('body').should('be.visible')
      cy.viewport(1280, 720)
    })
    
    afterEach(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    })
    
    it('Test for the empty shopping cart modal', () => {
      homepage.mainNavigationComponent.getHomeOption().click()
      homepage.mainHeaderComponent.getCartIconButton().click()
  
      shoppingCartModal.closeButton()
      shoppingCartModal.validateMessageForEmptyCart('Your shopping cart is empty!')
      
      homepage.mainNavigationComponent.getHomeOption().click()
      
      homepage.mainNavigationComponent.getSpecialHotOption().click()
  
      homepage.mainNavigationComponent.getBlogOption().click()
  
    })
  
    it("Test for testing login functionality", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.rightNavigationComponent.getOptions().should('have.length', 13)
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      myAccountPage.getMyAccountOptions().should('have.length', 5)
      myAccountPage.getMyOrdersOptions().should('have.length', 6)
      myAccountPage.getMyAffiliateAccountOptions().should('have.length', 1)
      myAccountPage.rightNavigationComponent.getOptions().should('have.length', 14)
    })

    it("Test for logout a user", () => {
      homepage.mainNavigationComponent.getMyAccountOption().trigger("mouseover")
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().should('have.length', 2)
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      myAccountPage.mainNavigationComponent.getMyAccountOption().trigger("mouseover")
      myAccountPage.mainNavigationComponent.getMyAccountDropdownOptions().should('have.length', 6)
      myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
      cy.contains('Account Logout')
      cy.contains("You have been logged off your account. It is now safe to leave the computer.")
      cy.contains("Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.")
      cy.contains("Continue")
      cy.url().should('contain', 'account/logout')
      homepage.rightNavigationComponent.getOptions().should('not.have.class', 'active')
      homepage.mainNavigationComponent.getMyAccountOption().trigger("mouseover")
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().should('have.length', 2)
    })
  
    it('Testing the corousel component', () => {
      cy.log('Checking first image is visisble')
      homepage.getMainCarouselImages().eq(0).should('be.visible')
      homepage.getMainCarouselImages().eq(0).should('have.class', 'active')
      homepage.getCarouselNextButton().realHover()
      // homepage.getCarouselNextButton().trigger('mouseover')
      cy.log('Checking second image is visisble')
      homepage.getCarouselNextButton().click()
      homepage.getMainCarouselImages().eq(1).should('be.visible', {timeout: 5000})
      homepage.getMainCarouselImages().eq(1).should('have.class', 'active')
      homepage.getCarouselNextButton().realHover()
      // homepage.getCarouselNextButton().trigger('mouseover')`
      cy.log('Checking third image is visisble')
      homepage.getCarouselNextButton().click()
      homepage.getMainCarouselImages().eq(2).should('have.class', 'active')
      homepage.getMainCarouselImages().eq(2).should('be.visible', {timeout: 5000})
    })

    it('Testing Right navigation component', () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
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
      homepage.mainNavigationComponent.getMyAccountOption().click()
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
      homepage.mainNavigationComponent.getMyAccountOption().click()
      rightNavigationBar.getRegisterOption().click()

      registerPage.alertComponent.getAlert().should('not.exist')
      registerPage.getContinueButton().click()
      registerPage.getFirstnameErrorText().should('have.text', 'First Name must be between 1 and 32 characters!')
      registerPage.getLastnameIErrorText().should('have.text', 'Last Name must be between 1 and 32 characters!')
      registerPage.getEmailErrorText().should('have.text', 'E-Mail Address does not appear to be valid!')
      registerPage.getTelephoneErrorText().should('have.text', 'Telephone must be between 3 and 32 characters!')
      registerPage.getPasswordErrorText().should('have.text', 'Password must be between 4 and 20 characters!')
      registerPage.alertComponent.getAlert().should('be.visible')
      registerPage.alertComponent.getAlert().should('have.text', ' Warning: You must agree to the Privacy Policy!')
      registerPage.alertComponent.getAlert().should('have.class', 'alert-danger')
    })
  
    it('Test for already registered email', () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      rightNavigationBar.getRegisterOption().click()
      cy.url().should('contain', 'account/register')
      registerPage.alertComponent.getAlert().should('not.exist')
      registerPage.getFirstnameInput().type('Jose')
      registerPage.getLastnameInput().type('Lopez')
      registerPage.getEmailInput().type('jose.lopez@gmail.com')
      registerPage.getTelephoneInput().type('77045789')
      registerPage.getPasswordInput().type('P@ssw0rd')
      registerPage.getPasswordConfirmInput().type('P@ssw0rd')
      registerPage.getYesRadioButton().click()
      registerPage.getPolicyPrivacyCheckbox().click()
      registerPage.getContinueButton().click()
      registerPage.alertComponent.getAlert().should('be.visible')
      registerPage.alertComponent.getAlert().should('have.text', ' Warning: E-Mail Address is already registered!')
      registerPage.alertComponent.getAlert().should('have.class', 'alert-danger')      
    })
  
    it('test for adding an item to the cart', () => {
      homepage.getTopProducts().should('have.length', 10)
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
  
    it("Test for the shopping cart page with no items", () => {
      homepage.mainHeaderComponent.getCartIconButton().click()
      shoppingCartModal.getEditCartButton().click()
      cy.url().should('contain', 'checkout/cart')
      shoppingCartPage.getWarningIcon().should('be.visible')
      shoppingCartPage.getWarningIcon().should('have.class', 'text-warning')
      shoppingCartPage.getTitle().should('be.visible')
      shoppingCartPage.getMessage().should('be.visible')
      shoppingCartPage.getMessage().should('have.text', 'Your shopping cart is empty!')
      shoppingCartPage.getContinueButton().should('be.visible')
    })
  
    it("Test for testing the search functionality with no results", () => {
      homepage.mainHeaderComponent.getAllCategoriesDropdown().should('be.visible')
      homepage.mainHeaderComponent.getSearchInputField().should('have.value', '')
      homepage.mainHeaderComponent.getSearchInputField().should('be.visible')
      homepage.mainHeaderComponent.getSearchInputField().should('have.attr', 'placeholder', 'Search For Products')
      homepage.mainHeaderComponent.getSearchButton().should('be.visible')
      homepage.mainHeaderComponent.getSearchInputField().type("hello world")
      homepage.mainHeaderComponent.getSearchButton().click()
      cy.url().should('contain', 'search=hello+world')
      cy.contains('There is no product that matches the search criteria.')
    })
    
    it('Test for navigating through the design, modules and widgets pages', () => {
      homepage.mainNavigationComponent.getAddOnsDropdownOptions().should('not.be.visible')
      homepage.mainNavigationComponent.getAddOnsOption().trigger('mouseover')
      homepage.mainNavigationComponent.getAddOnsDropdownOptions().should('be.visible')
      homepage.mainNavigationComponent.getAddOnsDropdownOptions().should('have.length', 3)
      homepage.mainNavigationComponent.clickOnAddOnsDropdownOptions('Designs')
      cy.url().should('contain', 'page_id=11')
  
      designsPage.mainNavigationComponent.getAddOnsDropdownOptions().should('not.be.visible')
      designsPage.mainNavigationComponent.getAddOnsOption().trigger('mouseover')
      designsPage.mainNavigationComponent.clickOnAddOnsDropdownOptions('Modules')
      cy.url().should('contain', 'page_id=10')
  
      modulesPage.mainNavigationComponent.getAddOnsDropdownOptions().should('not.be.visible')
      modulesPage.mainNavigationComponent.getAddOnsOption().trigger('mouseover')
      modulesPage.mainNavigationComponent.clickOnAddOnsDropdownOptions('Widgets')
      cy.url().should('contain', 'page_id=9')
  
      widgetsPage.mainNavigationComponent.getHomeOption().click()
      cy.url().should('contain', 'common/home')
    })
  
    it("Test for going to the login page from the main nav bar", () => {
      homepage.mainNavigationComponent.getMyAccountOption().scrollIntoView().should('be.visible').and('exist')
      // homepage.mainNavigationComponent.getMyAccountOption().realHover()
      homepage.mainNavigationComponent.getMyAccountOption().trigger('mouseover')
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().should('exist').and('be.visible')
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      cy.url().should('contain', 'account/login')
    })
  
    it("Test for going to the register page from the main nav bar", () => {
      homepage.mainNavigationComponent.getMyAccountOption().scrollIntoView().should('be.visible').and('exist')
      // homepage.mainNavigationComponent.getMyAccountOption().realHover()
      homepage.mainNavigationComponent.getMyAccountOption().trigger('mouseover')
  
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().should('exist').and('be.visible')
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')    
      cy.url().should('contain', 'account/register')
    })
  
    it("Test for clicking a mega menu option", () => {
      homepage.mainNavigationComponent.getMegaMenuOption().scrollIntoView().should('be.visible').and('exist')
      // homepage.mainNavigationComponent.getMegaMenuOption().realHover()
      homepage.mainNavigationComponent.getMegaMenuOption().trigger('mouseover')
      homepage.mainNavigationComponent.getMegaMenuOptionsDropdown().should('exist').and('be.visible')
      homepage.mainNavigationComponent.clickOnMegaMenuDropdownOptions('Apple')
      cy.url().should('contain', 'manufacturer_id=8')
    })
    
    it('Test for default search with any criteria', () => {
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('have.length', 15)
      searchResultPage.getKeywordsInputField().should('have.text', '')
      searchResultPage.getCategoriesDropdown().should('have.value', '0')
      searchResultPage.getSearchButton().should('have.value', 'Search')
  
      searchResultPage.getSearchInSubcategoriesCheckbox().should('not.be.checked')
      searchResultPage.getSearchInProductDescriptionsCheckbox().should('not.be.checked')
      searchResultPage.getPagination().should('have.length', 7)
    })
  
    it("Testing yellow color filter on search results page", () => {
      homepage.mainHeaderComponent.getSearchInputField().should('have.text', '')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('have.length', 15)
      searchResultPage.filterComponent.getColorsOptions().should('have.length', 8)
      searchResultPage.filterComponent.getColorsOptions().eq(7).click()
      searchResultPage.getProducts().eq(0).scrollIntoView()
      searchResultPage.getProducts().should('have.length', 1)
      cy.contains("Showing 1 to 1 of 1 (1 Pages)")
    })
    
    it("testing forgotten password, email not found", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      cy.url().should('contain', 'account/login')
      homepage.rightNavigationComponent.getLoginOption().should('have.class', 'active')
      homepage.rightNavigationComponent.getForgottenPasswordOption().should('not.have.class', 'active')
      homepage.rightNavigationComponent.clickOnRightNavigationOption('Forgotten Password')
      homepage.rightNavigationComponent.getLoginOption().should('not.have.class', 'active')
      cy.url().should('contain', 'account/forgotten')
      homepage.rightNavigationComponent.getForgottenPasswordOption().should('have.class', 'active')
      // forgottenPasswordPage.fillEmailAndSubmit('email@example.com') already exists xd
      forgottenPasswordPage.fillEmailAndSubmit('trashemail@eg.com')
      forgottenPasswordPage.alertComponent.getAlert().should('be.visible')
      forgottenPasswordPage.alertComponent.getAlert().should('have.text', ' Warning: The E-Mail Address was not found in our records, please try again!')
      forgottenPasswordPage.alertComponent.getAlert().should('have.class', 'alert-danger')
    })
    
    it("Test for testing forgotten password, success", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      homepage.rightNavigationComponent.getLoginOption().should('have.class', 'active')
      homepage.rightNavigationComponent.getForgottenPasswordOption().should('not.have.class', 'active')
      homepage.rightNavigationComponent.clickOnRightNavigationOption('Forgotten Password')
      forgottenPasswordPage.rightNavigationComponent.getForgottenPasswordOption().should('have.class', 'active')
      forgottenPasswordPage.alertComponent.getAlert().should('not.exist')
      forgottenPasswordPage.fillEmailAndSubmit('email@example.com')
      forgottenPasswordPage.alertComponent.getAlert().should('be.visible')
      forgottenPasswordPage.alertComponent.getAlert().should('have.text', ' An email with a confirmation link has been sent your email address.')
      forgottenPasswordPage.alertComponent.getAlert().should('have.class', 'alert-success')
      cy.url().should('contain', 'account/login')
      loginPage.rightNavigationComponent.getLoginOption().should('have.class', 'active')
      loginPage.rightNavigationComponent.getForgottenPasswordOption().should('not.have.class', 'active')
    })

    it("Test for going to my account option without a logged user", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      cy.url().should('contain', 'account/login')
      loginPage.rightNavigationComponent.clickOnRightNavigationOption('My Account')
      cy.url().should('contain', 'account/login')
    })

    it("Test for change password functionality default behavior", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      changePasswordPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
      loginPage.getEmailInputField().should('be.visible')
      loginPage.getPasswordInputField().should('be.visible')
      loginPage.getSubmitButton().should('be.visible')
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
      cy.url().should('contain', 'account/password')
      changePasswordPage.rightNavigationComponent.getOptions().eq(2).should('have.class', 'active')
      // changePasswordPage.submitChangePasswordForm('','') type can't receive empty strings!
      changePasswordPage.getContinueButton().click()
      cy.contains("Password must be between 4 and 20 characters!")
    })

    it("Test for not matching change passwords", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
      changePasswordPage.submitChangePasswordForm('asdf','zxcv')
      cy.contains("Password confirmation does not match password!")
    })

    it("Test for testing change password success", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
      myAccountPage.rightNavigationComponent.getOptions().eq(2).should('have.class', 'active')
      changePasswordPage.submitChangePasswordForm('P@ssw0rd','P@ssw0rd')
      changePasswordPage.alertComponent.getAlert().should('have.class', 'alert-success')
      myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
      myAccountPage.alertComponent.getAlert().should('have.text', ' Success: Your password has been successfully updated.')
    })

    it('adding item to the wishlist without a login user', () => {
      homepage.getTopProducts().eq(0).realHover()
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').eq(1).click()
      notificationComponent.getHeaderTitle().should('contain', 'Login')
      notificationComponent.getLoginButton().should('be.visible')
      notificationComponent.getRegisterButton().should('be.visible')
    })

    it('Testing wish list with not logged user', () => {
      homepage.mainHeaderComponent.getWishListIconButton().click()
      loginPage.getEmailInputField().should('be.visible')
      loginPage.getPasswordInputField().should('be.visible')
      loginPage.getSubmitButton().should('be.visible')
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
    })
  })
})