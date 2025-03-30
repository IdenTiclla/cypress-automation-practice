import Home from "../../pages/Home"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ShoppingCartPage from "../../pages/ShoppingCartPage"
import ShoppingCartModal from "../../components/ShoppingCartModal"

const homepage = new Home()
const productDetailPage = new ProductDetailPage()
const shoppingCartPage = new ShoppingCartPage()
const shoppingCartModal = new ShoppingCartModal()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Shopping Cart Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('Verify adding a product to cart from product page', () => {
    // Navigate to a product page
    homepage.mainNavigation.getMegaMenuWithFeaturedItems().click()
    homepage.mainNavigation.getComponentsSubmenuOption().click()
    cy.get('.product-thumb').first().click()
    
    // Add to cart
    productDetailPage.getAddToCartButton().click()
    
    // Verify success message
    productDetailPage.getSuccessMessage().should('be.visible')
    
    // Verify cart icon quantity updated
    homepage.mainHeaderComponent.getCartIconQuantity().should('contain', '1')
  })

  it('Verify cart page displays added products', () => {
    // Add product to cart first
    homepage.mainNavigation.getMegaMenuWithFeaturedItems().click()
    homepage.mainNavigation.getComponentsSubmenuOption().click()
    cy.get('.product-thumb').first().click()
    productDetailPage.getAddToCartButton().click()
    
    // Navigate to cart page
    homepage.mainHeaderComponent.getCartIconButton().click()
    shoppingCartModal.getViewCartButton().click()
    
    // Verify cart page
    shoppingCartPage.getPageTitle().should('have.text', 'Shopping Cart')
    shoppingCartPage.getCartItems().should('have.length', 1)
  })

  it('Verify cart quantity update functionality', () => {
    // Add product to cart first
    homepage.mainNavigation.getMegaMenuWithFeaturedItems().click()
    homepage.mainNavigation.getComponentsSubmenuOption().click()
    cy.get('.product-thumb').first().click()
    productDetailPage.getAddToCartButton().click()
    
    // Navigate to cart page
    homepage.mainHeaderComponent.getCartIconButton().click()
    shoppingCartModal.getViewCartButton().click()
    
    // Update quantity
    shoppingCartPage.getQuantityInput().first().clear().type('2')
    shoppingCartPage.getUpdateButton().first().click()
    
    // Verify success message
    shoppingCartPage.getSuccessMessage().should('be.visible')
    shoppingCartPage.getSuccessMessage().should('contain', 'Success: You have modified your shopping cart!')
    
    // Verify total updated
    // This may depend on your page object implementation
  })

  it('Verify removing product from cart', () => {
    // Add product to cart first
    homepage.mainNavigation.getMegaMenuWithFeaturedItems().click()
    homepage.mainNavigation.getComponentsSubmenuOption().click()
    cy.get('.product-thumb').first().click()
    productDetailPage.getAddToCartButton().click()
    
    // Navigate to cart page
    homepage.mainHeaderComponent.getCartIconButton().click()
    shoppingCartModal.getViewCartButton().click()
    
    // Remove item
    shoppingCartPage.getRemoveButton().first().click()
    
    // Verify cart is empty
    shoppingCartPage.getEmptyCartMessage().should('be.visible')
    shoppingCartPage.getEmptyCartMessage().should('contain', 'Your shopping cart is empty!')
  })
}) 