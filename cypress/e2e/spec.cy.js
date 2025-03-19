import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterPage from "./pages/RegisterPage"
import SuccessPage from "./pages/SuccessPage"
import AddressBookPage from "./pages/AddressBookPage"
import AddAddressPage from "./pages/AddAddressPage"
import GiftCertificatePage from "./pages/GiftCertificatePage"

import ShoppingCartPage from "./pages/ShoppingCartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ConfirmOrderPage from "./pages/ConfimOrderPage"
import OrderHistoryPage from "./pages/OrderHistoryPage"
import WishListPage from "./pages/WishListPage"

import ModulesPage from "./pages/ModulesPage"
import WidgetsPage from "./pages/WidgetsPage"
import DesignsPage from "./pages/DesignsPages"

import ForgottenPasswordPage from "./pages/ForgottenPasswordPage"
import MyAccountPage from "./pages/MyAccountPage"
import NewsletterSubscriptionPage from "./pages/NewsletterSubscriptionPage"
import ChangePasswordPage from "./pages/ChangePasswordPage"

import SearchResultPage from "./pages/SearchResultPage"

import ShoppingCartModal from "./components/ShoppingCartModal"
import RightNavigationBar from "./components/RightNavigationBar"
import ProductDetailPage from "./pages/ProductDetailPage"

import ArticlesPage from "./pages/ArticlesPage"
import ArticlePage from "./pages/ArticlePage"

const loginPage = new Login()
const homepage = new Home()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()
const addressBookPage = new AddressBookPage()
const addAddressPage = new AddAddressPage()
const shoppingCartPage = new ShoppingCartPage()
const giftCertificatePage = new GiftCertificatePage()
const checkoutPage = new CheckoutPage()
const confirmOrderPage = new ConfirmOrderPage()
const orderHistoryPage = new OrderHistoryPage()
const wishListPage = new WishListPage()
const shoppingCartModal = new ShoppingCartModal()
const rightNavigationBar = new RightNavigationBar()
const modulesPage = new ModulesPage()
const widgetsPage = new WidgetsPage()
const designsPage = new DesignsPage()
const productDetailPage = new ProductDetailPage()
const searchResultPage = new SearchResultPage()
const forgottenPasswordPage = new ForgottenPasswordPage()
const myAccountPage = new MyAccountPage()
const newsletterSubscriptionPage = new NewsletterSubscriptionPage()
const changePasswordPage = new ChangePasswordPage()

const articlePage = new ArticlePage()
const articlesPage = new ArticlesPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test suite edited with vim', () => {
  context('720 resolution', () => {
    beforeEach(() => {
      homepage.visit()
      cy.get('body').should('be.visible')
      cy.viewport(1280, 720)
      // cy.viewport(1920, 1080)
    })
    
    afterEach(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    })

    it("Test for testing the articles page checking elements default elements.", () => {
      homepage.mainNavigationComponent.getBlogOption().click()
      articlesPage.getMostViewedArticles().should('have.length', 10)
      articlesPage.getLatestArticles().should('have.length', 10)

    })

    it("Test for testing the article page.", () => {
      homepage.mainNavigationComponent.getBlogOption().click()
      articlesPage.getLatestArticles().eq(0).click()
      cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=37')
      articlePage.getArticleTitle().should('be.visible')
      articlePage.getArticleTitle().should('have.text', 'amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus')
    })

    it.only("Test for testing the article author link functionality.", () => {
      homepage.mainNavigationComponent.getBlogOption().click()
      articlesPage.getLatestArticles().eq(0).click()
      articlePage.getAuthorLink().should('be.visible')
      articlePage.getAuthorLink().should('have.text', 'Mark Jecno')
      articlePage.getAuthorLink().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3')
      articlePage.getAuthorLink().click()
      cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3')
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
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.getMyAccountOptions().should('have.length', 5)
      myAccountPage.getMyOrdersOptions().should('have.length', 6)
      myAccountPage.getMyAffiliateAccountOptions().should('have.length', 1)
      myAccountPage.rightNavigationComponent.getOptions().should('have.length', 14)
    })

    it("Test for logout a user", () => {
      homepage.mainNavigationComponent.getMyAccountOption().trigger("mouseover")
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().should('have.length', 2)
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
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
      homepage.mainCarouselComponent.getImages().eq(0).should('be.visible')
      homepage.mainCarouselComponent.getImages().eq(0).should('have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(1).should('not.be.visible')
      homepage.mainCarouselComponent.getImages().eq(1).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(2).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(2).should('not.be.visible')

      // homepage.getCarouselNextButton().trigger('mouseover')
      cy.log('Checking second image is visisble')

      homepage.mainCarouselComponent.getNextButton().realHover()
      homepage.mainCarouselComponent.getNextButton().click()


      homepage.mainCarouselComponent.getImages().eq(0).should('not.be.visible')
      homepage.mainCarouselComponent.getImages().eq(0).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(1).should('be.visible', {timeout: 5000})
      homepage.mainCarouselComponent.getImages().eq(1).should('have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(2).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(2).should('not.be.visible')
    
      // homepage.getCarouselNextButton().trigger('mouseover')`
      cy.log('Checking third image is visisble')
      
      homepage.mainCarouselComponent.getNextButton().realHover()
      homepage.mainCarouselComponent.getNextButton().click()
      
      homepage.mainCarouselComponent.getImages().eq(0).should('not.be.visible')
      homepage.mainCarouselComponent.getImages().eq(0).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(1).should('not.be.visible')
      homepage.mainCarouselComponent.getImages().eq(1).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(2).should('have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(2).should('be.visible', {timeout: 5000})
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

    it('Test for testing the default register errors.', () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')

      registerPage.alertComponent.getAlert().should('not.exist')
      registerPage.getContinueButton().click()

      registerPage.alertComponent.getAlert().should('be.visible')
      registerPage.alertComponent.getAlert().should('have.text', ' Warning: You must agree to the Privacy Policy!')
      registerPage.alertComponent.getAlert().should('have.class', 'alert-danger')
      registerPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(248, 215, 218)')
      registerPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')
      
      registerPage.getFirstnameErrorText().should('have.text', 'First Name must be between 1 and 32 characters!')
      registerPage.getFirstnameErrorText().should('have.css', 'color', 'rgb(220, 53, 69)')
      
      registerPage.getLastnameIErrorText().should('have.text', 'Last Name must be between 1 and 32 characters!')
      registerPage.getLastnameIErrorText().should('have.css', 'color', 'rgb(220, 53, 69)')
      
      registerPage.getEmailErrorText().should('have.text', 'E-Mail Address does not appear to be valid!')
      registerPage.getEmailErrorText().should('have.css', 'color', 'rgb(220, 53, 69)')
      
      registerPage.getTelephoneErrorText().should('have.text', 'Telephone must be between 3 and 32 characters!')
      registerPage.getTelephoneErrorText().should('have.css', 'color', 'rgb(220, 53, 69)')
      
      registerPage.getPasswordErrorText().should('have.text', 'Password must be between 4 and 20 characters!')
      registerPage.getPasswordErrorText().should('have.css', 'color', 'rgb(220, 53, 69)')
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

    it("adding test for checking all categories dropdown options.", () => {
      homepage.mainHeaderComponent.getCategoriesDropdown().click()
      homepage.mainHeaderComponent.getCategoriesDropdownOptions().then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq(['All Categories', 'Desktops', 'Laptops', 'Components', 'Tablets', 'Software', 'Phones & PDAs', 'Cameras', 'MP3 Players'])
        expect(actual).to.have.length(9)
      })
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

    it("Test for testing the search  functionality with results - iphone", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('have.length', 4)
    })
    
    it("Test for testing the search functionality with results - imac", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('imac')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('have.length', 8)
    })
    
    it("Test for testing the autocomplete dropdown component.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getAutoCompleteDropdown().should('be.visible')
      homepage.mainHeaderComponent.getAutoCompleteDropdownOptions().should('have.length', 4)
    })

    it("Test for testing the autocomplete dropdown component visibility.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getAutoCompleteDropdown().should('be.visible')
      homepage.mainHeaderComponent.getAutoCompleteDropdownOptions().should('have.length', 4)
      homepage.mainHeaderComponent.getSearchInputField().clear()
      homepage.mainHeaderComponent.getAutoCompleteDropdown().should('not.be.visible')
    })

    it("Test for testing the autocomplete dropdown component items with imac keyword.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('imac')
      homepage.mainHeaderComponent.getAutoCompleteDropdown().should('be.visible')
      homepage.mainHeaderComponent.getAutoCompleteDropdownOptions().should('have.length', 5)
    })

    it("Test for testing quick view from search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().eq(0).scrollIntoView()
      searchResultPage.getProducts().eq(0).trigger('mouseover')
      searchResultPage.showQuickViewModal(searchResultPage.getProducts().eq(0))
      searchResultPage.quickViewModalComponent.getModal().should('be.visible')
      searchResultPage.quickViewModalComponent.getCloseButton().click()
      searchResultPage.quickViewModalComponent.getModal().should('not.be.visible')
    })

    it("Test for checking the addons navigation options.", () => {
      homepage.mainNavigationComponent.getAddOnsDropdownOptions().find('a').then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq(['\n  Modules\n \n', '\n  Designs\n \n', '\n  Widgets\n \n'])
      })
    })

    it("Test for checking my account options with unlogged user.", () => {
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().find('a').then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq(['\n  Login\n \n', '\n  Register\n \n'])
        expect(actual).to.have.length(2)
      })
    })
    
    it("Test for checking my account options with a logged user.", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.mainNavigationComponent.getMyAccountDropdownOptions().find('a').then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq(['\n  Dashboard\n \n', '\n  My order\n \n', '\n  Return\n \n', '\n  Tracking\n \n', '\n  My voucher\n \n', '\n  Logout\n \n'])
        expect(actual).to.have.length(6)
      })
    })

    it("Test for testing the purchase a gift certificate functionality - Validations.", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login(Cypress.env('email'), Cypress.env('password'))
      myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions('My voucher')
      giftCertificatePage.clickOnContinueButton()
      giftCertificatePage.alertComponent.getAlert().should('include.text', 'Warning: You must agree that the gift certificates are non-refundable!')

      giftCertificatePage.getRecipientsNameLabelError().should('have.text', "Recipient's Name must be between 1 and 64 characters!")
      giftCertificatePage.getRecipientsEmailLabelError().should('have.text', "E-Mail Address does not appear to be valid!")
      giftCertificatePage.getGiftCertificateThemeOptionsLabelError().should('have.text', "You must select a theme!")
      giftCertificatePage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')
      giftCertificatePage.getRecipientsNameLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
      giftCertificatePage.getRecipientsEmailLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
      giftCertificatePage.getGiftCertificateThemeOptionsLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')

    })

    it("Test for testing the purchase a gift certificate functionality - Email validation", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions("My voucher")
      giftCertificatePage.getRecipientsNameInput().type("Your name")
      giftCertificatePage.getRecipientsEmailInput().type("invalidemail.com")
      giftCertificatePage.getGiftCertificateThemeOptions().eq(0).click()
      giftCertificatePage.getAgreeCheckbox().click()
      giftCertificatePage.getContinueButton().click()
      giftCertificatePage.getRecipientsEmailLabelError().should('include.text', 'E-Mail Address does not appear to be valid!')
      giftCertificatePage.getRecipientsEmailLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
    })

    it("Test for testing the purchase a gift certificate functionality - Negative amount", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions('My voucher')
      giftCertificatePage.getRecipientsNameInput().type('my name')
      giftCertificatePage.getRecipientsEmailInput().type('randomemail@gmail.com')
      giftCertificatePage.getGiftCertificateThemeOptions().eq(0).click()
      giftCertificatePage.getAmountInput().clear()
      giftCertificatePage.getAmountInput().type('-1')
      giftCertificatePage.getAgreeCheckbox().click()
      giftCertificatePage.getContinueButton().click()
      giftCertificatePage.getAmountInputLabelError().should('include.text', 'Amount must be between $1.00 and $1,000.00!')
      giftCertificatePage.getAmountInputLabelError().should('have.css', 'color', 'rgb(220, 53, 69)')
    })

    it("Test for testing the purchase a gift certificate functionnality - Checking automatic data in form" , () => {
      cy.generateRandomFirstname().then (randomFirstname=> {
        cy.generateRandomLastname().then(randomLastname => {
          cy.generateRandomPhoneNumber().then(randomPhoneNumber => {
            cy.generateRandomPassword().then(randomPassword => {
              cy.generateRandomEmail().then(randomEmail => {
                homepage.mainNavigationComponent.clickonMyAccountDropdownOptions("Register")
                registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                successPage.mainNavigationComponent.clickonMyAccountDropdownOptions("My voucher")
                giftCertificatePage.getYourNameInput().should('have.value', `${randomFirstname} ${randomLastname}`)
                giftCertificatePage.getYourEmailInput().should('have.value', randomEmail)
              })
            })
          })
        })
      })
    })

    it("Test for testing the purchase a gift certificate functionality - Checking behavior when input correct data.", () => {
      cy.generateRandomFirstname().then(randomFirstname => {
        cy.generateRandomFirstname().then(recipientsName => {
          cy.generateRandomLastname().then(randomLastname => {
            cy.generateRandomPhoneNumber().then(randomPhoneNumber => {
              cy.generateRandomPassword().then(randomPassword => {
                cy.generateRandomEmail().then(randomEmail => {
                  cy.generateRandomEmail().then(recipientsEmail => {
                    homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
                    registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                    successPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
                    successPage.mainNavigationComponent.clickonMyAccountDropdownOptions('My voucher')
                    giftCertificatePage.getRecipientsNameInput().type(recipientsName)
                    giftCertificatePage.getRecipientsEmailInput().type(recipientsEmail)
                    giftCertificatePage.getGiftCertificateThemeOptions().eq(0).click()
                    giftCertificatePage.getMessageInput().type('hello world')
                    giftCertificatePage.getAgreeCheckbox().click()
                    giftCertificatePage.getContinueButton().click()
                    successPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 1)
                  })
                })
              })
            })
          })
        })
      })
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

    it("Test for checking the mega menu options", () => {
      homepage.mainNavigationComponent.getMegaMenuOptionsDropdown().find('a').then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq(['\nApple\n', '\nHTC\n', '\nLG\n', '\nNokia\n', '\nSamsung\n', '\nXiomi\n', '\nApple Macbook\n', '\nAsus\n', '\nHP\n', '\nLenovo\n', '\nHeadphones\n', '\nMemory Card\n', '\nMobile cases\n', '\nPower bank\n', '\nScreenguards\n', '\nSmart Watch\n', '\nSmart band\n', '\nApple Ipad\n', '\nDesktop\n', '\nHard disk\n', '\nMouse & Keyboard\n', '\nPen Drive\n', '\nPrinter\n', '\nBluetooth Speaker\n', '\nDTH\n', '\nHome Audio\n', '\nHome Theatre\n', '\nSoundBar\n'])        
      })
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
    
    it("Test for testing the pagination component.", () => {
      homepage.mainNavigationComponent.clickOnSpecificTopCategory('Components')
      searchResultPage.getPagination().contains('1').parent().should('have.class', 'active')
      searchResultPage.getPagination().contains('2').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('3').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('4').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('5').parent().should('not.have.class', 'active')

      searchResultPage.navigateToPage('2')
      searchResultPage.getPagination().contains('1').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('2').parent().should('have.class', 'active')
      searchResultPage.getPagination().contains('3').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('4').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('5').parent().should('not.have.class', 'active')
    
      searchResultPage.navigateToPage('3')
      searchResultPage.getPagination().contains('1').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('2').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('3').parent().should('have.class', 'active')
      searchResultPage.getPagination().contains('4').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('5').parent().should('not.have.class', 'active')
      
      searchResultPage.navigateToPage('4')
      searchResultPage.getPagination().contains('1').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('2').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('3').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('4').parent().should('have.class', 'active')
      searchResultPage.getPagination().contains('5').parent().should('not.have.class', 'active')

      searchResultPage.navigateToPage('5')
      searchResultPage.getPagination().contains('1').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('2').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('3').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('4').parent().should('not.have.class', 'active')
      searchResultPage.getPagination().contains('5').parent().should('have.class', 'active')
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

    it("Test for the list view mode on search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('exist')
      searchResultPage.getListViewButton().click()
      searchResultPage.getProducts().should('not.exist')
      searchResultPage.getProductsListView().should('have.length', 4)
    })

    it("Test for quick view from search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('exist')
      searchResultPage.getListViewButton().click()
      searchResultPage.quickViewModalComponent.getModal().should('not.exist')
      searchResultPage.showQuickViewModal(searchResultPage.getProductsListView().eq(0))
      searchResultPage.quickViewModalComponent.getModal().should('exist')
      searchResultPage.quickViewModalComponent.getModal().should('be.visible')
    })
    
    it("Test for checking the show quantity selector options", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getShowSelector().find('option').should('have.length', 5)
      searchResultPage.getShowSelector().find('option').then(options => {
        const actual = [...options].map(option => option.text)
        expect(actual).to.deep.eq(['15', '25', '50', '75', '100'])
      })
    })

    it("Test for testing the sort by functionality on search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getSortBySelector().find('option').should('have.length', 12)
      searchResultPage.getSortBySelector().find('option').then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq(['Default', 'Best sellers', 'Popular', 'Newest', 'Name (A - Z)', 'Name (Z - A)', 'Price (Low > High)', 'Price (High > Low)', 'Rating (Highest)', 'Rating (Lowest)', 'Model (A - Z)', 'Model (Z - A)'])
      })
    })

    it("Test for the show quantity selector when selecting options.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type('iphone')
      homepage.mainHeaderComponent.getSearchButton().click()
      searchResultPage.getProducts().should('exist')
      searchResultPage.getListViewButton().click()
      searchResultPage.quickViewModalComponent.getModal().should('not.exist')
      searchResultPage.getShowSelector().select('15')
      searchResultPage.getShowSelector().find('option:selected').should('have.text', '15')
      searchResultPage.getShowSelector().should('have.value', 'https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=15')
      searchResultPage.getShowSelector().select('25')
      searchResultPage.getShowSelector().find('option:selected').should('have.text', '25')
      searchResultPage.getShowSelector().should('have.value', 'https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=25')
      searchResultPage.getShowSelector().select('50')
      searchResultPage.getShowSelector().find('option:selected').should('have.text', '50')
      searchResultPage.getShowSelector().should('have.value', 'https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=50')
      searchResultPage.getShowSelector().select('75')
      searchResultPage.getShowSelector().find('option:selected').should('have.text', '75')
      searchResultPage.getShowSelector().should('have.value', 'https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=75')
      searchResultPage.getShowSelector().select('100')
      searchResultPage.getShowSelector().find('option:selected').should('have.text', '100')
      searchResultPage.getShowSelector().should('have.value', 'https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=100')
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
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
      cy.url().should('contain', 'account/password')
      changePasswordPage.rightNavigationComponent.getOptions().eq(2).should('have.class', 'active')
      changePasswordPage.getContinueButton().click()
      cy.contains("Password must be between 4 and 20 characters!")
    })

    it("Test for not matching change passwords", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
      changePasswordPage.submitChangePasswordForm('asdf','zxcv')
      cy.contains("Password confirmation does not match password!")
    })

    it("Test for testing change password success", () => {
      cy.generateRandomEmail().then(email => {
        cy.generateRandomFirstname().then(firstname => {
          cy.generateRandomLastname().then(lastname => {
            cy.generateRandomPassword().then(password1 => {
              cy.generateRandomPassword().then(password2 => {
                cy.generateRandomPhoneNumber().then(phoneNumber => {
                  homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
                  registerPage.registerNewUser(firstname, lastname, email, phoneNumber, password1, password1, true, true)
                  successPage.rightNavigationComponent.clickOnRightNavigationOption('Password')
                  changePasswordPage.submitChangePasswordForm(password2, password2)
                  myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
                  myAccountPage.alertComponent.getAlert().should('have.class', 'alert-success')
                  myAccountPage.alertComponent.getAlert().should('have.text', ' Success: Your password has been successfully updated.')
                  myAccountPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(212, 237, 218)')
                  myAccountPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(21, 87, 36)')
                  myAccountPage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
                  myAccountPage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')

                  loginPage.login(email, password1)
                  loginPage.alertComponent.getAlert().should('include.text', 'Warning: No match for E-Mail Address and/or Password.')
                  loginPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(248, 215, 218)')
                  loginPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')

                  loginPage.getEmailInputField().clear()
                  loginPage.getPasswordInputField().clear()

                  loginPage.login(email, password2)
                  cy.url().should('contain', 'account/account')
                })
              })
            })
          })
        })
      })

      
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
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
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
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
    
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
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      
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
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
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
      cy.generateRandomEmail().then((randomEmail) => {
        cy.generateRandomPhoneNumber().then((randomPhoneNumber) => {
          cy.generateRandomFirstname().then(randomFirstname => {
            cy.generateRandomLastname().then(randomLastname => {
              cy.generateRandomPassword().then(randomPassword => {
                homepage.mainNavigationComponent.getMyAccountOption().click()
                loginPage.rightNavigationComponent.clickOnRightNavigationOption('Register')
                cy.url().should('contain', 'account/register')
                registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                cy.contains("Your Account Has Been Created!")
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
                cy.contains("Account Logout")
                cy.url().should('contain', 'account/logout')
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Login')
                cy.url().should('contain', 'account/login')
                loginPage.login(randomEmail, randomPassword)
                cy.url().should('contain', 'account/account')
                myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')
              })
            })
          })
        })
      })
    })

    it("test for checking the top categories options.", () => {
      homepage.mainNavigationComponent.getShopByCategoryOption().click()
      homepage.mainNavigationComponent.topCategoriesComponent.getCategories().find('a').then(options => {
        const actual = [... options].map(option => option.text)
        expect(actual).to.deep.eq([' \n  Components\n \n', ' \n  Cameras\n \n', ' \n  Phone, Tablets & Ipod\n \n', ' \n  Software\n \n', ' \n  MP3 Players\n \n', ' \n  Laptops & Notebooks\n \n', ' \n  Desktops and Monitors\n \n', ' \n  Printers & Scanners\n \n', ' \n  Mice and Trackballs\n \n', ' \n  Fashion and Accessories\n \n', ' \n  Beauty and Saloon\n \n', ' \n  Autoparts and Accessories\n \n', ' \n  Washing machine\n \n', ' \n  Gaming consoles\n \n', ' \n  Air conditioner\n \n', ' \n  Web Cameras\n \n'])
      })
    })

    it("Test for testing the navigation on top  categories", () => {
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

    it("Test for testing quick view functionality.", () => {
      homepage.quickViewModalComponent.getModal().should('not.exist')
      const first_product = homepage.getTopProducts().eq(0)
      homepage.showQuickViewModal(first_product)
      homepage.quickViewModalComponent.getModal().should('be.visible')
    })

    it("Testing the quick view functionality on many products on top products section", () => {
      homepage.quickViewModalComponent.getModal().should('not.exist')
      // homepage.getTopProducts().eq(0).realHover()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(0))
      homepage.quickViewModalComponent.getModal().should('be.visible', {timeout: 5000})
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', {timeout: 5000})

      // homepage.getTopProducts().eq(1).realHover()
      homepage.getTopProducts().eq(1).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(1))
      homepage.quickViewModalComponent.getModal().should('be.visible', {timeout: 5000})
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', {timeout: 5000})


      homepage.getTopProducts().eq(2).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(2))
      homepage.quickViewModalComponent.getModal().should('be.visible', {timeout: 5000})
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', {timeout: 5000})

      homepage.getTopProducts().eq(3).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(3))
      homepage.quickViewModalComponent.getModal().should('be.visible', {timeout: 5000})
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', {timeout: 5000})

      homepage.getTopProducts().eq(4).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
      homepage.quickViewModalComponent.getModal().should('be.visible', {timeout: 5000})
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', {timeout: 5000})
    })

    const checkQuickViewButtons = (productIndex) => {
      homepage.getTopProducts().eq(productIndex).then($el => {
        const isVisible = Cypress.$($el).is(':visible');
        console.log(`product with index: ${productIndex} Is visible: ${isVisible}`)
        if(!isVisible) {
          homepage.getTopProductsNextButton().scrollIntoView()
          homepage.getTopProductsNextButton().trigger('mouseover')
          homepage.getTopProductsNextButton().click()
        }
      })
      
      homepage.getTopProducts().eq(productIndex).trigger('mouseover', {timeout: 5000})
      homepage.showQuickViewModal(homepage.getTopProducts().eq(productIndex))
      homepage.quickViewModalComponent.getModal().should('be.visible', {timeout: 5000})
      homepage.quickViewModalComponent.getAvailability().invoke('text').then((text) => {
        console.log(text)
        if(text === 'Out Of Stock') {
          homepage.quickViewModalComponent.getButtons().eq(0).should('have.attr', 'disabled')
          homepage.quickViewModalComponent.getButtons().eq(1).should('have.attr', 'disabled')
        } else {
          homepage.quickViewModalComponent.getButtons().eq(0).should('not.have.attr', 'disabled')
          homepage.quickViewModalComponent.getButtons().eq(1).should('not.have.attr', 'disabled')
        }
      })
      
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', {timeout: 5000})

    }
    it("Test for testing buttons on quick view functionality", () => {
      homepage.getTopProducts().its('length').then(length => {        
        for (let i = 0; i < length; i++) {
          checkQuickViewButtons(i)
        }
      })
    })

    it("test for adding to wishlist with not logged user from product detail page.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).click()
      productDetailPage.notificationComponent.getNotification().should('not.be.visible')
      productDetailPage.getDesktopHeartButton().click()
      productDetailPage.notificationComponent.getNotification().should('be.visible')
      productDetailPage.notificationComponent.getHeaderTitle().should('contain', 'Login')
      productDetailPage.notificationComponent.getLoginButton().should('be.visible')
      productDetailPage.notificationComponent.getRegisterButton().should('be.visible')
      productDetailPage.notificationComponent.getCloseButton().click()
      productDetailPage.notificationComponent.getCloseButton().click()  
      productDetailPage.notificationComponent.getNotification().should('not.be.visible')
    })

    it("Test for writting a review on product detail page default error.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).click()
      productDetailPage.submitYourReview()
      productDetailPage.alertComponent.getAlert().should('contain', "Warning: Please select a review rating!")
    })
    it("Test for writting an  review but not providing review name.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).click()
      productDetailPage.selectAmountOfStars(0)
      productDetailPage.writeOnYourReviewInputField("hello world this is amazing")
      productDetailPage.submitYourReview()
      productDetailPage.alertComponent.getAlert().should('contain', " Warning: Review Name must be between 3 and 25 characters!")
    })

    it("Test for writting empty review selecting stars and providing name.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).click()
      productDetailPage.selectAmountOfStars(0)
      productDetailPage.writeOnYourNameInputField("Jhoan")
      productDetailPage.submitYourReview()
      productDetailPage.alertComponent.getAlert().should('contain', "Warning: Review Text must be between 25 and 1000 characters!")
    })

    it("Test for Increasing quantity on product detail page.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).click()
      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '2')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '3')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '4')
      
      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '5')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '6')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '7')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '8')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '9')

      productDetailPage.increaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '10')
    })

    it("Test for decreasing quantity on product details page.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).click()

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')

      productDetailPage.decreaseQuantity()
      productDetailPage.getQuantityInputField().should('have.value', '1')
    })

    it("Test for checkout functionality with not available products", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))
  
      homepage.notificationComponent.getViewCartButton().click()  
      shoppingCartPage.alertComponent.getAlert().should('contain', 'Products marked with *** are not available in the desired quantity or not in stock!')
      shoppingCartPage.getItems().should('have.length', 1)
    })
  
    it("Test or removing items on checkout cart page", () => {
      cy.log("Adding first top product to the card.")
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))
  
      homepage.mainHeaderComponent.getCartIconButton().click()
      homepage.shoppingCartModalComponent.getCheckoutBUtton().click()
  
      cy.log("Removing item.")
      shoppingCartPage.removeNthItem(0)
  
      cy.log("Performing assertions.")
      cy.url().should('contain', 'checkout/cart')
      shoppingCartPage.getWarningIcon().should('be.visible')
      shoppingCartPage.getWarningIcon().should('have.class', 'text-warning')
      shoppingCartPage.getTitle().should('be.visible')
      shoppingCartPage.getMessage().should('be.visible')
      shoppingCartPage.getMessage().should('have.text', 'Your shopping cart is empty!')
      shoppingCartPage.getContinueButton().should('be.visible')
    })

    const checkPriceNthItem = (index) => {
      shoppingCartPage.getPriceUnitNthElement(index).then(priceUnit => {
        shoppingCartPage.getQuantityNthElement(index).then(quantity => {
          shoppingCartPage.getPriceTotalNthElement(index).then(totalPrice => {
            expect(priceUnit * quantity).to.eq(totalPrice)
          })
        })
      })
    }

    it("Test for updating product quantity on checkout cart page.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))
      homepage.notificationComponent.getCheckoutButton().click()
      cy.url().should('contain', 'checkout/cart')
      
      checkPriceNthItem(0)
      
      
      cy.log("updating product quantity on checkout cart page.")
      shoppingCartPage.updateNthProductQuantity(0, 2)

      checkPriceNthItem(0)
    })
    const checkQuantityAccordingToCartIcon = () => {
      shoppingCartPage.getItems().its('length').then(length => {
        let counter = 0
        Cypress._.times(length, (i) => {
          shoppingCartPage.getQuantityNthElement(i).then(quantity => {
            console.log(`quantity: ${quantity}`);
            counter += parseInt(quantity, 10); // Ensure the quantity is parsed as an integer
          });
        });
    
        // Ensure the logging happens after the iteration is complete
        cy.wrap(null).then(() => {
          console.log(`quantity counter = ${counter}`);
          // You can also make assertions on the counter here if needed
          // expect(counter).to.equal(expectedValue);
          shoppingCartPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', counter)
        });
      })
    }

    it("Test for testing the quantity of products on cart.", () => {
      shoppingCartPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
      
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))


      homepage.visit()

      homepage.getTopProducts().eq(2).scrollIntoView()
      homepage.getTopProducts().eq(2).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(2))

      homepage.visit()

      homepage.getTopProducts().eq(3).scrollIntoView()
      homepage.getTopProducts().eq(3).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(3))

      homepage.notificationComponent.getCheckoutButton().click()

      checkQuantityAccordingToCartIcon()

    })

    it("Test for the continue shopping button", () => {

      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))

      homepage.notificationComponent.getCheckoutButton().click()
      cy.url().should('contain', 'checkout/cart')
      shoppingCartPage.getContinueButton().click()
      cy.url().should('contain', 'common/home')
    })

    it("Test for testing the collapse components on cart page.", () => {
      homepage.getTopProducts().eq(0).scrollIntoView()
      homepage.getTopProducts().eq(0).trigger('mouseover')
      homepage.addProductToCart(homepage.getTopProducts().eq(0))

      homepage.notificationComponent.getViewCartButton().click()

      shoppingCartPage.expandOrMinimizeUseCouponCodeCollapse()
      shoppingCartPage.getCollapseElements().eq(0).find('div#collapse-coupon').should('have.class', 'show')
      shoppingCartPage.getCollapseElements().eq(1).find('div#collapse-shipping').should('not.have.class', 'show')
      shoppingCartPage.getCollapseElements().eq(2).find('div#collapse-voucher').should('not.have.class', 'show')
      
      shoppingCartPage.expandOrMinimizeEstimateShippingTaxesCollapse()
      shoppingCartPage.getCollapseElements().eq(0).find('div#collapse-coupon').should('not.have.class', 'show')
      shoppingCartPage.getCollapseElements().eq(1).find('div#collapse-shipping').should('have.class', 'show')
      shoppingCartPage.getCollapseElements().eq(2).find('div#collapse-voucher').should('not.have.class', 'show')
      shoppingCartPage.expandOrMinimizeUseGiftCertificateCollapse()
      shoppingCartPage.getCollapseElements().eq(0).find('div#collapse-coupon').should('not.have.class', 'show')
      shoppingCartPage.getCollapseElements().eq(1).find('div#collapse-shipping').should('not.have.class', 'show')
      shoppingCartPage.getCollapseElements().eq(2).find('div#collapse-voucher').should('have.class', 'show')
      
    })

    it("Test for opening an account and performing an order.", () => {
      cy.generateRandomEmail().then((randomEmail) => {
        cy.generateRandomPhoneNumber().then((randomPhoneNumber) => {
          cy.generateRandomFirstname().then(randomFirstname => {
            cy.generateRandomLastname().then(randomLastname => {
              cy.generateRandomPassword().then(randomPassword => {
                homepage.mainNavigationComponent.getMyAccountOption().click()
                loginPage.rightNavigationComponent.clickOnRightNavigationOption('Register')
                cy.url().should('contain', 'account/register')
                registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                cy.contains("Your Account Has Been Created!")
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Logout')
                cy.contains("Account Logout")
                cy.url().should('contain', 'account/logout')
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Login')
                cy.url().should('contain', 'account/login')
                loginPage.login(randomEmail, randomPassword)
                cy.url().should('contain', 'account/account')
                myAccountPage.rightNavigationComponent.getOptions().eq(0).should('have.class', 'active')

                homepage.visit()
                homepage.getTopProducts().eq(4).scrollIntoView()
                homepage.getTopProducts().eq(4).trigger('mouseover')
                homepage.addProductToCart(homepage.getTopProducts().eq(4))

                homepage.notificationComponent.getCheckoutButton().click()
                checkoutPage.getTelephoneInputField().should('not.have.value', '')
                checkoutPage.getTelephoneInputField().should('have.value', randomPhoneNumber)

                checkoutPage.fillBillingAddressSection('my firstname', 'my lastname', 'company 1', 'Av wisconsin 1', 'Av wisconsin 2', 'my city', '5775', 'Uganda', 'Moyo')
                checkoutPage.addComments("hello world")
                checkoutPage.checkOrUncheckTermsAndConditions()

                checkoutPage.getContinueButton().click()
                cy.url().should('contain', 'checkout/confirm')

                cy.contains('my firstname')
                cy.contains('my lastname')
                cy.contains('company 1')
                cy.contains('Av wisconsin 1')
                cy.contains('Av wisconsin 2')
                cy.contains('my city')
                cy.contains('5775')
                cy.contains('Uganda')
                cy.contains('Moyo')

                cy.log("Confirm order")
                confirmOrderPage.getConfirmOrderButton().click()
                cy.url().should('contain', 'checkout/success')
                cy.contains(" Your order has been placed!")

                cy.log('Verifying the order history')
                homepage.visit()
                homepage.mainNavigationComponent.getMyAccountOption().click()
                homepage.rightNavigationComponent.clickOnRightNavigationOption('Order History')

                cy.url().should('contain', 'account/order')
                orderHistoryPage.getOrdersElements().should('have.length', 1)
              })
            })
          })
        })
      })
    })

    it("Test for testing the login page default errors", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login('randomemail@gmail.com', 'dummypassword')
      loginPage.alertComponent.getAlert().should('have.text', ' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.')
      loginPage.alertComponent.getAlert().should('have.class', 'alert-danger')
      loginPage.alertComponent.getAlert().should('have.css', 'background-color', 'rgb(248, 215, 218)')
      loginPage.alertComponent.getAlert().should('have.css', 'color', 'rgb(114, 28, 36)')
      loginPage.alertComponent.getAlert().should('have.css', 'border-color', 'rgb(245, 198, 203)')
    })

    it("Subscribe and unsubscribe to newsleter.", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      
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

    it("Test buy now functionality from quick view without a logged user.", () => {
      checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
      homepage.getTopProducts().eq(4).scrollIntoView()
      homepage.getTopProducts().eq(4).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4))

      homepage.quickViewModalComponent.getButtons().eq(1).click()
      cy.url().should('contain', 'checkout/checkout')

      checkoutPage.getAccountLoginCheckbox().should('not.be.checked')
      checkoutPage.getAccountRegisterCheckbox().should('be.checked')
      checkoutPage.getAccountGuestCheckoutCheckbox().should('not.be.checked')
      checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 1)
    })

    it("Test buy now functionality from quick view with a logged user.", () => {
      cy.generateRandomPhoneNumber().then(telephone => {
        cy.generateRandomEmail().then(email => {
          homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
          registerPage.registerNewUser('firstname','lastname', email,telephone, 'P@ssw0rd','P@ssw0rd', true, true)
          homepage.visit()
          checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
          homepage.getTopProducts().eq(4).scrollIntoView()
          homepage.getTopProducts().eq(4).trigger('mouseover')
          homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
          homepage.quickViewModalComponent.getButtons().eq(1).click()
          cy.url().should('contain', 'checkout/checkout')

          checkoutPage.getAccountLoginCheckbox().should('not.exist')
          checkoutPage.getAccountRegisterCheckbox().should('not.exist')
          checkoutPage.getAccountGuestCheckoutCheckbox().should('not.exist')

          checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 1)

        })
      })
    })

    it("Test for testing the buy now functionality from quick view with logged user and with address.", () => {
      cy.generateRandomEmail().then(email => {
        cy.generateRandomPhoneNumber().then(phoneNumber => {
          cy.log('Registering a new user account')
          homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
          registerPage.registerNewUser('My firstname', 'lastname', email, phoneNumber, 'P@ssw0rd', 'P@ssw0rd', true, true)
          cy.log('Checking redirection to success page.')
          cy.url().should('include', 'account/success')
          successPage.rightNavigationComponent.clickOnRightNavigationOption('Address Book')
          cy.url().should('include', 'account/address')
          cy.log('adding a new address')
          addressBookPage.getNewAddressButton().click()
          cy.url().should('include', '/address/add')
          addAddressPage.fillAddressForm('my firstname', 'my lastname', 'my company', 'my address 1', 'my address 2', 'some city', '75007', 'Taiwan', 'Chia-i', true)
          addAddressPage.submitForm()
          cy.log('Performing some assertions after adding first address')
          addressBookPage.alertComponent.getAlert().should('have.text', ' Your address has been successfully added')
          addressBookPage.getAddresses().should('have.length', 1)

          cy.log('Using the buy now functionality')

          homepage.visit()
          checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
          homepage.getTopProducts().eq(4).scrollIntoView()
          homepage.getTopProducts().eq(4).trigger('mouseover')
          homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
          homepage.quickViewModalComponent.getButtons().eq(1).click()
          cy.url().should('contain', 'checkout/checkout')
          
          checkoutPage.getTelephoneInputField().should('have.value', phoneNumber)
          checkoutPage.getAccountLoginCheckbox().should('not.exist')
          checkoutPage.getAccountRegisterCheckbox().should('not.exist')
          checkoutPage.getAccountGuestCheckoutCheckbox().should('not.exist')

          checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 1)

          checkoutPage.getBillingIwantToUseAnExistingAddressCheckbox().should('be.checked')
          checkoutPage.getExistingAdressesSelector().find('option').should('have.length', 1)
          checkoutPage.getBillingIwantToUseAnewAddress().should('not.be.checked')
          
        })
      })
    })


    it("Test for testing the buy now functionality from quick view with new user, add address, new address", () => {
      cy.generateRandomFirstname().then(randomFirstname => {
        cy.generateRandomLastname().then(randomLastname => {
          cy.generateRandomEmail().then(randomEmail => {
            cy.generateRandomPhoneNumber().then(randomPhoneNumber => {
              cy.generateRandomPassword().then(randomPassword => {
                homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
                registerPage.registerNewUser(randomFirstname, randomLastname, randomEmail, randomPhoneNumber, randomPassword, randomPassword, true, true)
                
                successPage.rightNavigationComponent.clickOnRightNavigationOption('Address Book')
                cy.url().should('include', 'account/address')
                cy.log('adding a new address')
                addressBookPage.getNewAddressButton().click()
                cy.url().should('include', '/address/add')
                addAddressPage.fillAddressForm(randomFirstname, randomLastname, 'my company', 'my address 1', 'my address 2', 'some city', '75007', 'Taiwan', 'Chia-i', true)
                addAddressPage.submitForm()
                cy.log('Performing some assertions after adding first address')
                addressBookPage.alertComponent.getAlert().should('have.text', ' Your address has been successfully added')
                addressBookPage.getAddresses().should('have.length', 1)
                

                addressBookPage.mainNavigationComponent.getHomeOption().click()
                
                homepage.getTopProducts().eq(4).scrollIntoView()
                homepage.getTopProducts().eq(4).trigger('mouseover')
                homepage.showQuickViewModal(homepage.getTopProducts().eq(4))

                homepage.quickViewModalComponent.getButtons().eq(1).click()

                checkoutPage.checkIwantToUseAnewAddress()
                checkoutPage.fillBillingAddressSection(randomFirstname, randomLastname, 'my company 02', 'my address 3', 'my address 4', 'some city', '75002', 'Taiwan', 'Chia-i')
                
                checkoutPage.addComments('Some comments')
                checkoutPage.checkOrUncheckTermsAndConditions()
                checkoutPage.getContinueButton().click()

                confirmOrderPage.getConfirmOrderButton().click()
                cy.contains("Continue").click()
                homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('My order')
                orderHistoryPage.getOrdersElements().should('have.length', 1)
              })
            })
          })
        })
      })
    })

    it("Test for testing the buy now functionality from quick view with logged user and multiple addresses", () => {
      cy.generateRandomEmail().then(email => {
        cy.generateRandomPhoneNumber().then(phoneNumber => {
          cy.log('Registering a new user account')
          homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Register')
          registerPage.registerNewUser('My firstname', 'lastname', email, phoneNumber, 'P@ssw0rd', 'P@ssw0rd', true, true)
          cy.log('Checking redirection to success page.')
          cy.url().should('include', 'account/success')
          successPage.rightNavigationComponent.clickOnRightNavigationOption('Address Book')
          cy.url().should('include', 'account/address')
          cy.log('adding a new address')
          addressBookPage.getNewAddressButton().click()
          cy.url().should('include', '/address/add')
          addAddressPage.fillAddressForm('my firstname', 'my lastname', 'my company', 'my address 1', 'my address 2', 'some city', '75007', 'Taiwan', 'Chia-i', true)
          addAddressPage.submitForm()
          cy.log('Performing some assertions after adding first address')
          addressBookPage.alertComponent.getAlert().should('have.text', ' Your address has been successfully added')
          addressBookPage.getAddresses().should('have.length', 1)

          addressBookPage.getNewAddressButton().click()
          cy.url().should('include', '/address/add')
          addAddressPage.fillAddressForm('my firstname 2', 'my lastname 2', 'my company 2', 'my address 3', 'my address 4', 'some city', '57002', 'Taiwan', 'Chia-i', true)
          addAddressPage.submitForm()
          cy.log('Performing some assertions after adding first address')
          addressBookPage.alertComponent.getAlert().should('have.text', ' Your address has been successfully added')
          addressBookPage.getAddresses().should('have.length', 2)

          cy.log('Using the buy now functionality')

          homepage.visit()
          checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
          homepage.getTopProducts().eq(4).scrollIntoView()
          homepage.getTopProducts().eq(4).trigger('mouseover')
          homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
          homepage.quickViewModalComponent.getButtons().eq(1).click()
          cy.url().should('contain', 'checkout/checkout')
          
          checkoutPage.getTelephoneInputField().should('have.value', phoneNumber)
          checkoutPage.getAccountLoginCheckbox().should('not.exist')
          checkoutPage.getAccountRegisterCheckbox().should('not.exist')
          checkoutPage.getAccountGuestCheckoutCheckbox().should('not.exist')

          checkoutPage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 1)

          checkoutPage.getBillingIwantToUseAnExistingAddressCheckbox().should('be.checked')
          checkoutPage.getExistingAdressesSelector().find('option').should('have.length', 2)
          checkoutPage.getBillingIwantToUseAnewAddress().should('not.be.checked')
          

        })
      })
    })

    it("Test for testing the increase quantity functionality on quick view modal component.", () => {
      homepage.getTopProducts().eq(4).scrollIntoView()
      homepage.getTopProducts().eq(4).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
  
      for(let i = 0; i < 50; i++) {
        homepage.quickViewModalComponent.increaseQuantity()
      }
      homepage.quickViewModalComponent.getQuantityInput().should('have.value', '51')
      
    })

    it("Test for testing the decrease quantity functionality on quick view modal component", () => {
      homepage.getTopProducts().eq(4).scrollIntoView()
      homepage.getTopProducts().eq(4).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
  
      for(let i = 0; i < 50; i++) {
        homepage.quickViewModalComponent.decreaseQuantity()
      }
      homepage.quickViewModalComponent.getQuantityInput().should('have.value', '1')
    })

    it("Test for testing the increase and decrease quantity functionality on quick view modal component.", () => {
      homepage.getTopProducts().eq(4).scrollIntoView();
      homepage.getTopProducts().eq(4).trigger('mouseover');
      cy.log('Showing quick view modal');
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4));
      homepage.quickViewModalComponent.getModal().should('be.visible');
      cy.log('Quick view modal is visible');
    
      for (let i = 1; i < 10; i++) {
        cy.log(`Incrementing quantity to ${i}`);
        homepage.quickViewModalComponent.getQuantityInput().should('have.value', `${i}`);
        homepage.quickViewModalComponent.increaseQuantity();
      }
    
      for (let j = 10; j > 0; j--) {
        cy.log(`Decrementing quantity to ${j}`);
        homepage.quickViewModalComponent.getQuantityInput().should('have.value', `${j}`);
        homepage.quickViewModalComponent.decreaseQuantity();
      }
    });
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
      homepage.mainHeaderComponent.getWishListIconButton().should('not.be.visible')
      homepage.mainHeaderComponent.getMobileSearchInputField().type('hello world')
      homepage.mainHeaderComponent.getMobileSearchButton().click()
      cy.url().should('contain', 'search=hello+world')
      cy.contains('There is no product that matches the search criteria.')
      searchResultPage.getMobileKeywordsInputField().should('have.value', 'hello world')
      searchResultPage.getMobileKeywordsInputField().should('have.attr', 'value', 'hello world')
    })
    
    it("Test for Login functionality on iphone resolution", () => {
      homepage.mainHeaderComponent.getMobilePersonIconButton().click()
      homepage.quickLinksComponent.clickOnSpecificQuickLink('My account')
      cy.url().should('contain', 'account/login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      cy.url().should('contain', 'account/account')
    })

    it("Test for navigating throught the top categories on iphone resolution", () => {
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
      homepage.mainCarouselComponent.getPaginationItems().should('have.length', 3)
      // homepage.getMainCarouselImages().eq(0).should('have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(0).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(0).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(1).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(2).should('not.have.class', 'active')
      
      homepage.mainCarouselComponent.clickOnNextButton()
      // homepage.getMainCarouselImages().eq(1).should('have.class', 'active')
      homepage.mainCarouselComponent.getImages().eq(1).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(0).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(1).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(2).should('not.have.class', 'active')

      
      homepage.mainCarouselComponent.clickOnNextButton()
      homepage.mainCarouselComponent.getImages().eq(2).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(0).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(1).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(2).should('have.class', 'active')

      homepage.mainCarouselComponent.clickOnPrevButton()
      homepage.mainCarouselComponent.getImages().eq(1).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(0).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(1).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(2).should('not.have.class', 'active')

      homepage.mainCarouselComponent.clickOnPrevButton()
      homepage.mainCarouselComponent.getImages().eq(0).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(0).should('have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(1).should('not.have.class', 'active')
      homepage.mainCarouselComponent.getPaginationItems().eq(2).should('not.have.class', 'active')
    })

    it("adding product to the wishlist without a logged user", () => {
      homepage.getTopProducts().eq(0).click()
      productDetailPage.addToTheWishListOnMobile()
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Login')
      homepage.notificationComponent.getLoginButton().should('be.visible')
      homepage.notificationComponent.getRegisterButton().should('be.visible')
    })

    it("test for selecting specifc top collection option.", () => {
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

    it("Test for registering a new user on iphone.", () => {
      cy.generateRandomFirstname().then(firstname => {
        cy.generateRandomLastname().then(lastname => {
          cy.generateRandomEmail().then(email => {
            cy.generateRandomPhoneNumber().then(phoneNumber => {
              cy.generateRandomPassword().then(password => {
                homepage.mainHeaderComponent.getMobilePersonIconButton().click()
                homepage.quickLinksComponent.clickOnSpecificQuickLink('My account')
                loginPage.rightNavigationComponent.clickOnRightNavigationOption('Register')
                registerPage.registerNewUser(firstname, lastname, email, phoneNumber, password, password, true, true)
                successPage.contentComponent.getTitle().should('include.text', 'Your Account Has Been Created!')
              })
            })
          })
        })
      })
    })
  })
})