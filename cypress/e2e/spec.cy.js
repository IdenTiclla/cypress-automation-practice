import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterPage from "./pages/RegisterPage"
import SuccessPage from "./pages/SuccessPage"
import AddressBookPage from "./pages/AddressBookPage"
import AddAddressPage from "./pages/AddAddressPage"
import GiftCertificatePage from "./pages/GiftCertificatePage"


import CheckoutPage from "./pages/CheckoutPage"
import ConfirmOrderPage from "./pages/ConfimOrderPage"
import OrderHistoryPage from "./pages/OrderHistoryPage"

import ModulesPage from "./pages/ModulesPage"
import WidgetsPage from "./pages/WidgetsPage"
import DesignsPage from "./pages/DesignsPages"

import MyAccountPage from "./pages/MyAccountPage"


import RightNavigationBar from "./components/RightNavigationBar"
import ProductDetailPage from "./pages/ProductDetailPage"

const loginPage = new Login()
const homepage = new Home()
const registerPage = new RegisterPage()
const successPage = new SuccessPage()
const addressBookPage = new AddressBookPage()
const addAddressPage = new AddAddressPage()

const giftCertificatePage = new GiftCertificatePage()
const checkoutPage = new CheckoutPage()
const confirmOrderPage = new ConfirmOrderPage()
const orderHistoryPage = new OrderHistoryPage()

const rightNavigationBar = new RightNavigationBar()
const modulesPage = new ModulesPage()
const widgetsPage = new WidgetsPage()
const designsPage = new DesignsPage()
const productDetailPage = new ProductDetailPage()

const myAccountPage = new MyAccountPage()


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
      homepage.mainCarouselComponent.getImages().eq(1).should('be.visible', { timeout: 5000 })
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
      homepage.mainCarouselComponent.getImages().eq(2).should('be.visible', { timeout: 5000 })
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

    it("adding test for checking all categories dropdown options.", () => {
      homepage.mainHeaderComponent.getCategoriesDropdown().click()
      homepage.mainHeaderComponent.getCategoriesDropdownOptions().then(options => {
        const actual = [...options].map(option => option.text)
        expect(actual).to.deep.eq(['All Categories', 'Desktops', 'Laptops', 'Components', 'Tablets', 'Software', 'Phones & PDAs', 'Cameras', 'MP3 Players'])
        expect(actual).to.have.length(9)
      })
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

    

    it("Test for checking the addons navigation options.", () => {
      homepage.mainNavigationComponent.getAddOnsDropdownOptions().find('a').then(options => {
        const actual = [...options].map(option => option.text)
        expect(actual).to.deep.eq(['\n  Modules\n \n', '\n  Designs\n \n', '\n  Widgets\n \n'])
      })
    })

    it("Test for checking my account options with unlogged user.", () => {
      homepage.mainNavigationComponent.getMyAccountDropdownOptions().find('a').then(options => {
        const actual = [...options].map(option => option.text)
        expect(actual).to.deep.eq(['\n  Login\n \n', '\n  Register\n \n'])
        expect(actual).to.have.length(2)
      })
    })

    it("Test for checking my account options with a logged user.", () => {
      homepage.mainNavigationComponent.clickonMyAccountDropdownOptions('Login')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
      myAccountPage.mainNavigationComponent.getMyAccountDropdownOptions().find('a').then(options => {
        const actual = [...options].map(option => option.text)
        expect(actual).to.deep.eq(['\n  Dashboard\n \n', '\n  My order\n \n', '\n  Return\n \n', '\n  Tracking\n \n', '\n  My voucher\n \n', '\n  Logout\n \n'])
        expect(actual).to.have.length(6)
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

    it("Test for checking the mega menu options", () => {
      homepage.mainNavigationComponent.getMegaMenuOptionsDropdown().find('a').then(options => {
        const actual = [...options].map(option => option.text)
        expect(actual).to.deep.eq(['\nApple\n', '\nHTC\n', '\nLG\n', '\nNokia\n', '\nSamsung\n', '\nXiomi\n', '\nApple Macbook\n', '\nAsus\n', '\nHP\n', '\nLenovo\n', '\nHeadphones\n', '\nMemory Card\n', '\nMobile cases\n', '\nPower bank\n', '\nScreenguards\n', '\nSmart Watch\n', '\nSmart band\n', '\nApple Ipad\n', '\nDesktop\n', '\nHard disk\n', '\nMouse & Keyboard\n', '\nPen Drive\n', '\nPrinter\n', '\nBluetooth Speaker\n', '\nDTH\n', '\nHome Audio\n', '\nHome Theatre\n', '\nSoundBar\n'])
      })
    })

    it("Test for clicking a mega menu option", () => {
      homepage.mainNavigationComponent.clickOnMegaMenuDropdownOptions('Apple')
      cy.url().should('contain', 'manufacturer_id=8')
      homepage.mainNavigationComponent.clickOnMegaMenuDropdownOptions('HTC')
      cy.url().should('contain', 'manufacturer_id=5')
    })


    it("Test for going to my account option without a logged user", () => {
      homepage.mainNavigationComponent.getMyAccountOption().click()
      cy.url().should('contain', 'account/login')
      loginPage.rightNavigationComponent.clickOnRightNavigationOption('My Account')
      cy.url().should('contain', 'account/login')
    })

    it("test for checking the top categories options.", () => {
      homepage.mainNavigationComponent.getShopByCategoryOption().click()
      homepage.mainNavigationComponent.topCategoriesComponent.getCategories().find('a').then(options => {
        const actual = [...options].map(option => option.text)
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
      homepage.quickViewModalComponent.getModal().should('be.visible', { timeout: 5000 })
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', { timeout: 5000 })

      // homepage.getTopProducts().eq(1).realHover()
      homepage.getTopProducts().eq(1).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(1))
      homepage.quickViewModalComponent.getModal().should('be.visible', { timeout: 5000 })
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', { timeout: 5000 })


      homepage.getTopProducts().eq(2).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(2))
      homepage.quickViewModalComponent.getModal().should('be.visible', { timeout: 5000 })
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', { timeout: 5000 })

      homepage.getTopProducts().eq(3).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(3))
      homepage.quickViewModalComponent.getModal().should('be.visible', { timeout: 5000 })
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', { timeout: 5000 })

      homepage.getTopProducts().eq(4).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4))
      homepage.quickViewModalComponent.getModal().should('be.visible', { timeout: 5000 })
      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', { timeout: 5000 })
    })

    const checkQuickViewButtons = (productIndex) => {
      homepage.getTopProducts().eq(productIndex).then($el => {
        const isVisible = Cypress.$($el).is(':visible');
        console.log(`product with index: ${productIndex} Is visible: ${isVisible}`)
        if (!isVisible) {
          homepage.getTopProductsNextButton().scrollIntoView()
          homepage.getTopProductsNextButton().trigger('mouseover')
          homepage.getTopProductsNextButton().click()
        }
      })

      homepage.getTopProducts().eq(productIndex).trigger('mouseover', { timeout: 5000 })
      homepage.showQuickViewModal(homepage.getTopProducts().eq(productIndex))
      homepage.quickViewModalComponent.getModal().should('be.visible', { timeout: 5000 })
      homepage.quickViewModalComponent.getAvailability().invoke('text').then((text) => {
        console.log(text)
        if (text === 'Out Of Stock') {
          homepage.quickViewModalComponent.getButtons().eq(0).should('have.attr', 'disabled')
          homepage.quickViewModalComponent.getButtons().eq(1).should('have.attr', 'disabled')
        } else {
          homepage.quickViewModalComponent.getButtons().eq(0).should('not.have.attr', 'disabled')
          homepage.quickViewModalComponent.getButtons().eq(1).should('not.have.attr', 'disabled')
        }
      })

      homepage.quickViewModalComponent.getCloseButton().click()
      homepage.quickViewModalComponent.getModal().should('not.be.visible', { timeout: 5000 })

    }
    it("Test for testing buttons on quick view functionality", () => {
      homepage.getTopProducts().its('length').then(length => {
        for (let i = 0; i < length; i++) {
          checkQuickViewButtons(i)
        }
      })
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
          registerPage.registerNewUser('firstname', 'lastname', email, telephone, 'P@ssw0rd', 'P@ssw0rd', true, true)
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

      for (let i = 0; i < 50; i++) {
        homepage.quickViewModalComponent.increaseQuantity()
      }
      homepage.quickViewModalComponent.getQuantityInput().should('have.value', '51')

    })

    it("Test for testing the decrease quantity functionality on quick view modal component", () => {
      homepage.getTopProducts().eq(4).scrollIntoView()
      homepage.getTopProducts().eq(4).trigger('mouseover')
      homepage.showQuickViewModal(homepage.getTopProducts().eq(4))

      for (let i = 0; i < 50; i++) {
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
  })
})