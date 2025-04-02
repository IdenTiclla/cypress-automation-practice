import Home from "../../pages/Home"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ShoppingCartPage from "../../pages/ShoppingCartPage"
import ShoppingCartModal from "../../components/ShoppingCartModal"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"
import WishListPage from "../../pages/WishListPage"

const homepage = new Home()
const productDetailPage = new ProductDetailPage()
const shoppingCartPage = new ShoppingCartPage()
const shoppingCartModal = new ShoppingCartModal()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()
const wishListPage = new WishListPage()

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

  it.only("Test for adding to shopping cart from wish list page", () => {
    cy.log("Loging an user")
    homepage.mainHeaderComponent.getCartIconButton().find("span[class*='cart-item-total']").invoke('text').then(parseFloat).should('eq', 0)
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    cy.log("adding product to the wishlist")
    myAccountPage.mainNavigationComponent.getHomeOption().click()
    homepage.getTopProducts().eq(0).should('be.visible')
    homepage.getTopProducts().eq(0).scrollIntoView().should('be.visible')
    homepage.getTopProducts().eq(0).realHover()
    homepage.getTopProducts().eq(0).find('div.product-action').find('button').eq(1).should('be.visible', { timeout: 5000 })
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
}) 