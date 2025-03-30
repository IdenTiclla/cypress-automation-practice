import Home from "../../pages/Home"
import Login from "../../pages/Login"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ShoppingCartPage from "../../pages/ShoppingCartPage"
import ShoppingCartModal from "../../components/ShoppingCartModal"
import CheckoutPage from "../../pages/CheckoutPage"
import ConfirmOrderPage from "../../pages/ConfimOrderPage"
import SuccessPage from "../../pages/SuccessPage"

const homepage = new Home()
const loginPage = new Login()
const productDetailPage = new ProductDetailPage()
const shoppingCartPage = new ShoppingCartPage()
const shoppingCartModal = new ShoppingCartModal()
const checkoutPage = new CheckoutPage()
const confirmOrderPage = new ConfirmOrderPage()
const successPage = new SuccessPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Checkout Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
    
    // Login before each test
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    
    // Add a product to cart
    homepage.mainNavigation.getMegaMenuWithFeaturedItems().click()
    homepage.mainNavigation.getComponentsSubmenuOption().click()
    cy.get('.product-thumb').first().click()
    productDetailPage.getAddToCartButton().click()
    
    // Go to cart page
    homepage.mainHeaderComponent.getCartIconButton().click()
    shoppingCartModal.getViewCartButton().click()
    
    // Proceed to checkout
    shoppingCartPage.getCheckoutButton().click()
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('Verify checkout page displays correct sections', () => {
    // Verify billing details section
    checkoutPage.getBillingDetailsSection().should('be.visible')
    
    // Verify payment method section
    checkoutPage.getPaymentMethodSection().should('be.visible')
    
    // Verify shipping method section
    checkoutPage.getShippingMethodSection().should('be.visible')
  })

  it('Verify placing an order', () => {
    // Select payment method if needed
    checkoutPage.getCashOnDeliveryOption().check()
    
    // Accept terms and conditions
    checkoutPage.getTermsAndConditionsCheckbox().check()
    
    // Confirm order
    checkoutPage.getContinueButton().click()
    
    // On confirm page, place order
    confirmOrderPage.getConfirmOrderButton().click()
    
    // Verify success page
    successPage.getHeading().should('have.text', 'Your order has been placed!')
  })
}) 