import Home from "../../pages/Home"
import Checkout from "../../pages/CheckoutPage"
import Register from "../../pages/RegisterPage"
import Success from "../../pages/SuccessPage"
import AddressBook from "../../pages/AddressBookPage"
import AddAddress from "../../pages/AddAddressPage"
import ConfirmOrder from "../../pages/ConfimOrderPage"
import OrderHistory from "../../pages/OrderHistoryPage"

const homepage = new Home()
const checkoutPage = new Checkout()
const registerPage = new Register()
const successPage = new Success()
const addressBookPage = new AddressBook()
const addAddressPage = new AddAddress()
const confirmOrderPage = new ConfirmOrder()
const orderHistoryPage = new OrderHistory()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Quick View Component', () => {
    context("720x400", () => {
        beforeEach(() => {
            homepage.visit()
            cy.get('body').should('be.visible')
            cy.viewport(1280, 720)
        })
        
        afterEach(() => {
            cy.clearLocalStorage()
            cy.clearCookies()
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
      
          it.only("Test for testing the increase quantity functionality on quick view modal component.", () => {
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
      
          it.only("Test for testing the increase and decrease quantity functionality on quick view modal component.", () => {
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
})