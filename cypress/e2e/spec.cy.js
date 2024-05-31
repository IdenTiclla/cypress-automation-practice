import Home from "../pages/Home"
import Login from "../pages/Login"
import RegisterPage from "../pages/RegisterPage"

import ShoppingCartPage from "../pages/ShoppingCartPage"
import WishListPage from "../pages/WishListPage"

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
import ProductDetailPage from "../pages/ProductDetailPage"


const loginPage = new Login()
const homepage = new Home()
const registerPage = new RegisterPage()
const shoppingCartPage = new ShoppingCartPage()
const wishListPage = new WishListPage()
const shoppingCartModal = new ShoppingCartModal()
const rightNavigationBar = new RightNavigationBar()
const notificationComponent = new Notification()
const modulesPage = new ModulesPage()
const widgetsPage = new WidgetsPage()
const designsPage = new DesignsPage()
const productDetailPage = new ProductDetailPage()
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
      homepage.getMainCarouselImages().eq(1).should('not.be.visible')
      homepage.getMainCarouselImages().eq(1).should('not.have.class', 'active')
      homepage.getMainCarouselImages().eq(2).should('not.have.class', 'active')
      homepage.getMainCarouselImages().eq(2).should('not.be.visible')
      
      // homepage.getCarouselNextButton().trigger('mouseover')
      cy.log('Checking second image is visisble')
      homepage.getCarouselNextButton().realHover()
      homepage.getCarouselNextButton().click()
      homepage.getMainCarouselImages().eq(0).should('not.be.visible')
      homepage.getMainCarouselImages().eq(0).should('not.have.class', 'active')
      homepage.getMainCarouselImages().eq(1).should('be.visible', {timeout: 5000})
      homepage.getMainCarouselImages().eq(1).should('have.class', 'active')
      homepage.getMainCarouselImages().eq(2).should('not.have.class', 'active')
      homepage.getMainCarouselImages().eq(2).should('not.be.visible')
      homepage.getCarouselNextButton().realHover()
      // homepage.getCarouselNextButton().trigger('mouseover')`
      cy.log('Checking third image is visisble')
      homepage.getCarouselNextButton().click()
      homepage.getMainCarouselImages().eq(0).should('not.be.visible')
      homepage.getMainCarouselImages().eq(0).should('not.have.class', 'active')
      homepage.getMainCarouselImages().eq(1).should('not.be.visible')
      homepage.getMainCarouselImages().eq(1).should('not.have.class', 'active')
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
      // registerPage.getYesRadioButton().should('be.visible')
      // registerPage.getNoRadioButton().should('be.visible')
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
      registerPage.registerNewUser('Jose', 'Lopez', 'jose.lopez@gmail.com', '77045789', 'P@ssw0rd','P@ssw0rd', true, true)
      registerPage.alertComponent.getAlert().should('be.visible')
      registerPage.alertComponent.getAlert().should('have.text', ' Warning: E-Mail Address is already registered!')
      registerPage.alertComponent.getAlert().should('have.class', 'alert-danger')      
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
      homepage.mainHeaderComponent.getCategoriesDropdown().should('be.visible')
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
      homepage.mainNavigationComponent.clickOnAddOnsDropdownOptions('Designs')
      cy.url().should('contain', 'page_id=11')
  
      designsPage.mainNavigationComponent.getAddOnsDropdownOptions().should('not.be.visible')
      designsPage.mainNavigationComponent.clickOnAddOnsDropdownOptions('Modules')
      cy.url().should('contain', 'page_id=10')
  
      modulesPage.mainNavigationComponent.getAddOnsDropdownOptions().should('not.be.visible')
      modulesPage.mainNavigationComponent.clickOnAddOnsDropdownOptions('Widgets')
      cy.url().should('contain', 'page_id=9')
  
      widgetsPage.mainNavigationComponent.getHomeOption().click()
      cy.url().should('contain', 'common/home')
    })
  
    it("Test for going to the login page from the main nav bar", () => {
      homepage.mainNavigationComponent.getMyAccountOption().scrollIntoView().should('be.visible').and('exist')
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      cy.url().should('contain', 'account/login')
    })
  
    it("Test for going to the register page from the main nav bar", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')    
      cy.url().should('contain', 'account/register')
    })
  
    it("Test for clicking a mega menu option", () => {
      homepage.mainNavigationComponent.clickOnMegaMenuDropdownOptions('Apple')
      cy.url().should('contain', 'manufacturer_id=8')
      homepage.mainNavigationComponent.clickOnMegaMenuDropdownOptions('HTC')
      cy.url().should('contain', 'manufacturer_id=5')
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

    it('adding item to the wishlist without a logged user', () => {
      homepage.getTopProducts().eq(0).realHover()
      const first_product = homepage.getTopProducts().eq(0)
      homepage.addProductToWishList(first_product)
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Login')
      homepage.notificationComponent.getLoginButton().should('be.visible')
      homepage.notificationComponent.getRegisterButton().should('be.visible')
    })

    it('Testing wish list with not logged user', () => {
      homepage.mainHeaderComponent.getWishListIconButton().click()
      loginPage.getEmailInputField().should('be.visible')
      loginPage.getPasswordInputField().should('be.visible')
      loginPage.getSubmitButton().should('be.visible')
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
    })

    it('test for adding an item to the cart', () => {
      homepage.getTopProducts().should('have.length', 10)
      homepage.getTopProducts().eq(0).realHover()
      homepage.getTopProducts().eq(0).find('div.product-action').should('be.visible')
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('have.length', 4)
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('be.visible')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))
      homepage.notificationComponent.getHeaderTitle().should('be.visible')
      homepage.notificationComponent.getHeaderTitle().should('contain', '1 item(s) - $170.00')
      homepage.notificationComponent.getBodyMessage().should('be.visible')
      homepage.notificationComponent.getBodyMessage().should('contain', 'Success: You have added ')
      homepage.notificationComponent.getBodyMessage().should('contain', ' to your ')
      homepage.notificationComponent.getBodyMessage().should('have.text', 'Success: You have added iMac to your shopping cart!')
      homepage.notificationComponent.getCloseButton().should('be.visible')
      homepage.notificationComponent.getViewCartButton().should('be.visible')
      homepage.notificationComponent.getCheckoutButton().should('be.visible')
    })

    it("Test for testing adding an item to the wishlist with a logged user", () => {
      cy.log("Login a user")
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      
      cy.log("adding product to the wishlist")
      myAccountPage.mainNavigationComponent.getHomeOption().click()
      homepage.getTopProducts().should('have.length', 10)
      homepage.getTopProducts().should('be.visible', {timeout: 5000})
      homepage.getTopProducts().eq(0).scrollIntoView({ easing: 'linear' }).should('be.visible')
      homepage.getTopProducts().eq(0).realHover()
      
      // homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.getTopProducts().eq(0).find('div.product-action').should('be.visible' , {timeout: 5000})
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('be.be.visible', {timeout: 5000})
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('have.length', 4)
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').eq(1).should('be.visible', {timeout: 5000})
      homepage.addProductToWishList(homepage.getTopProducts().eq(0))
      cy.log("Making assertions on notification component.")
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Wish List (1)')
      homepage.notificationComponent.getBodyMessage().should('contain', 'Success: You have added iMac to your wish list!')
      homepage.notificationComponent.getWishListButton().click()
      cy.log("Making assertions on wish list page.")
      wishListPage.getProducts().should('have.length', 1)
      cy.url().should('contain', 'account/wishlist')
      wishListPage.rightNavigationComponent.getOptions(4).should('have.class', 'active')
    })

    it("Test for adding and removing an item from wish list page.", () => {
      cy.log("Loging an user")
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      cy.log("adding product to the wishlist")
      myAccountPage.mainNavigationComponent.getHomeOption().click()
      homepage.getTopProducts().eq(0).should('be.visible')
      homepage.getTopProducts().eq(0).scrollIntoView().should('be.visible')
      homepage.getTopProducts().eq(0).realHover()
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').eq(1).should('be.visible', {timeout: 5000})
      homepage.addProductToWishList(homepage.getTopProducts().eq(0))
      cy.log("Making assertions on notification component.")
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Wish List (1)')
      homepage.notificationComponent.getBodyMessage().should('contain', 'Success: You have added iMac to your wish list!')
      homepage.notificationComponent.getWishListButton().click()
      cy.log("Making assertions on wish list page.")
      wishListPage.getProducts().should('have.length', 1)
      cy.url().should('contain', 'account/wishlist')
      wishListPage.rightNavigationComponent.getOptions(4).should('have.class', 'active')
      cy.log("Removing product from the wishlist.")
      const removeButton = wishListPage.getProducts().eq(0).find("a[href*='remove']")
      removeButton.should('be.visible')
      wishListPage.alertComponent.getAlert().should('not.exist')
      removeButton.click()
      wishListPage.alertComponent.getAlert().should('be.visible')
      wishListPage.alertComponent.getAlert().should('contain', ' Success: You have modified your wish list!')
      wishListPage.alertComponent.getAlert().should('have.class', 'alert-success')
      cy.contains("No results!")
    })

    it("Test for adding to shopping cart from wish list page", () => {
      cy.log("Loging an user")
      homepage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      cy.log("adding product to the wishlist")
      myAccountPage.mainNavigationComponent.getHomeOption().click()
      homepage.getTopProducts().eq(0).should('be.visible')
      homepage.getTopProducts().eq(0).scrollIntoView().should('be.visible')
      homepage.getTopProducts().eq(0).realHover()
      homepage.getTopProducts().eq(0).find('div.product-action').find('button').eq(1).should('be.visible', {timeout: 5000})
      homepage.addProductToWishList(homepage.getTopProducts().eq(0))
      cy.log("Making assertions on notification component.")
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Wish List (1)')
      homepage.notificationComponent.getBodyMessage().should('contain', 'Success: You have added iMac to your wish list!')
      homepage.notificationComponent.getWishListButton().click()
      cy.log("Making assertions on wish list page.")
      wishListPage.getProducts().should('have.length', 1)
      cy.url().should('contain', 'account/wishlist')
      wishListPage.rightNavigationComponent.getOptions(4).should('have.class', 'active')
      cy.log("Removing product from the wishlist.")
      const shoppinCartButton = wishListPage.getProducts().eq(0).find("button")
      shoppinCartButton.should('be.visible')
      wishListPage.alertComponent.getAlert().should('not.exist')
      shoppinCartButton.click()
      wishListPage.notificationComponent.getHeaderTitle().should('contain', 'item(s)')
      wishListPage.notificationComponent.getBodyMessage().should('contain', 'Success')
      wishListPage.notificationComponent.getViewCartButton().should('be.visible')
      wishListPage.notificationComponent.getCheckoutButton().should('be.visible')
      wishListPage.notificationComponent.getViewCartButton().click()
      cy.url().should('contain', 'checkout/cart')
      shoppingCartPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('be.gt', 0)
    })

    it("Test for registering an then loging a new user", () => {
      cy.getRandomEmail().then((randomEmail) => {
        cy.generateRandomPhoneNumber().then((randomPhoneNumber) => {
          const firstname = 'randomfirstname'
          const lastname= 'randomlastname'
          const email = randomEmail
          const telephone = randomPhoneNumber
          const password = 'P@ssw0rd'
          const password_confirm = 'P@ssw0rd'
          const newsletter_subscribe = false
          const privacy_policy = true
          homepage.mainNavigationComponent.getMyAccountOption().click()
          loginPage.rightNavigationComponent.clickOnRightNavigationOption('Register')
          cy.url().should('contain', 'account/register')
          registerPage.registerNewUser(firstname, lastname, email, telephone, password, password_confirm, newsletter_subscribe, privacy_policy)
          cy.contains("Your Account Has Been Created!")
          homepage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
          cy.contains("Account Logout")
          cy.url().should('contain', 'account/logout')
          homepage.rightNavigationComponent.clickOnRightNavigationOption('Login')
          cy.url().should('contain', 'account/login')
          loginPage.login(email, password)
          cy.url().should('contain', 'account/account')
          myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
        })
      })
    })

    it("Test for testing the navigation on top  categories", () => {
      homepage.visit()
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Component')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Cameras')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Phone, Tablets & Ipod')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Software')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('MP3 Players')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Laptops & Notebooks')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Desktops and Monitors')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Printers & Scanners')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Mice and Trackballs')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Fashion and Accessories')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Beauty and Saloon')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Autoparts and Accessories')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Washing machine')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Gaming consoles')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Air conditioner')
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Web Cameras')
    })

    it.only("Test for testing quick view functionality.", () => {
      homepage.visit()
      homepage.quickViewModalComponent.getModal().should('not.exist')
      const first_product = homepage.getTopProducts().eq(0)
      homepage.showQuickViewModal(first_product)
      homepage.quickViewModalComponent.getModal().should('be.visible')
    })
  })
  context('Iphone resolution', () => {
    beforeEach(() => {
      homepage.visit()
      cy.get('body').should('be.visible')
      cy.viewport('iphone-x')
    })
    afterEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
    })
    
    it('First test for iphone viewport => testing the search functionality', () => {
      homepage.visit()
      homepage.mainHeaderComponent.getWishListIconButton().should('not.be.visible')
      homepage.mainHeaderComponent.getMobileSearchInputField().type('hello world')
      homepage.mainHeaderComponent.getMobileSearchButton().click()
      cy.url().should('contain', 'search=hello+world')
      cy.contains('There is no product that matches the search criteria.')
      searchResultPage.getMobileKeywordsInputField().should('have.value', 'hello world')
      searchResultPage.getMobileKeywordsInputField().should('have.attr', 'value', 'hello world')
    })
    
    it("Test for Login functionality on iphone resolution", () => {
      homepage.visit()
      homepage.mainHeaderComponent.getMobilePersonIconButton().click()
      homepage.quickLinksComponent.clickOnSpecificQuickLink('My account')
      cy.url().should('contain', 'account/login')
      loginPage.login("jose.lopez@gmail.com", "P@ssw0rd")
      cy.url().should('contain', 'account/account')
    })

    it("Test for navigating throught the top categories on iphone resolution", () => {
      homepage.visit()
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Components')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Cameras')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Phone, Tablets & Ipod')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Software')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('MP3 Players')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Laptops & Notebooks')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Desktops and Monitors')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Printers & Scanners')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Mice and Trackballs')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Fashion and Accessories')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Beauty and Saloon')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Autoparts and Accessories')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Washing machine')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Gaming consoles')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Air conditioner')
      homepage.mainHeaderComponent.selectOptionOnHamburgerOptions('Web Cameras')
    })
    
    it("Test for testing the category selector on the main header component.", () => {
      homepage.visit()
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().should('not.have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('All Categories')
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('All Categories').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('Desktops')
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('Desktops').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('Laptops')
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('Laptops').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('Components')
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('Components').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('Tablets')
      
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('Tablets').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('Phones & PDAs')
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('Phones & PDAs').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('Cameras')
      
      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('Cameras').should('have.class', 'active')
      homepage.mainHeaderComponent.selectCategory('MP3 Players')

      homepage.mainHeaderComponent.getMobileCategoriesDropdown().click()
      homepage.mainHeaderComponent.getMobileCategoriesDropdownOptions().contains('MP3 Players').should('have.class', 'active')

    })

    it("Test for testing the main carousel component in homepage on mobile version.", () => {
      homepage.visit()
      homepage.getMainCarouselImages().eq(0).should('have.class', 'active')
      homepage.getCarouselPaginationItems().eq(0).should('have.class', 'active')

      homepage.getCarouselNextButton().click({force: true})
      homepage.getMainCarouselImages().eq(1).should('have.class', 'active')
      homepage.getCarouselPaginationItems().eq(1).should('have.class', 'active')

      homepage.getCarouselNextButton().click({force: true})
      homepage.getMainCarouselImages().eq(2).should('have.class', 'active')
      homepage.getCarouselPaginationItems().eq(2).should('have.class', 'active')

      homepage.getCarouselPrevButton().click({force: true})
      homepage.getMainCarouselImages().eq(1).should('have.class', 'active')
      homepage.getCarouselPaginationItems().eq(1).should('have.class', 'active')

      homepage.getCarouselPrevButton().click({force: true})
      homepage.getMainCarouselImages().eq(0).should('have.class', 'active')
      homepage.getCarouselPaginationItems().eq(0).should('have.class', 'active')
    })

    it("adding product to the wishlist without a logged user", () => {
      homepage.visit()
      homepage.getTopProducts().eq(0).click()
      productDetailPage.addToTheWishListOnMobile()
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Login')
      homepage.notificationComponent.getLoginButton().should('be.visible')
      homepage.notificationComponent.getRegisterButton().should('be.visible')
    })

    it("test for selecting specifc top collection option.", () => {
      homepage.visit()
      homepage.getTopCollectionOptions().contains('Popular').should('have.class', 'active')
      homepage.getTopCollectionContent().eq(0).should('have.class', 'active')
      homepage.getTopCollectionContent().eq(0).should('be.visible')
      homepage.selectTopCollectionOption('Popular')

      homepage.selectTopCollectionOption('Latest')
      homepage.getTopCollectionOptions().contains('Latest').should('have.class', 'active')
      homepage.getTopCollectionContent().eq(1).should('have.class', 'active')
      homepage.getTopCollectionContent().eq(1).should('be.visible')

      homepage.selectTopCollectionOption('Best seller')
      homepage.getTopCollectionOptions().contains('Best seller').should('have.class', 'active')
      homepage.getTopCollectionContent().eq(2).should('have.class', 'active')
      homepage.getTopCollectionContent().eq(2).should('be.visible')
    })
  })
})