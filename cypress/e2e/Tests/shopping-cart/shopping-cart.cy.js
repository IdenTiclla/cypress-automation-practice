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

  it.only("Test for testing the collapse components on cart page.", () => {
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


  it.only("Test for the continue shopping button", () => {

    homepage.getTopProducts().eq(0).scrollIntoView()
    homepage.getTopProducts().eq(0).trigger('mouseover')
    homepage.addProductToCart(homepage.getTopProducts().eq(0))

    homepage.notificationComponent.getCheckoutButton().click()
    cy.url().should('contain', 'checkout/cart')
    shoppingCartPage.getContinueButton().click()
    cy.url().should('contain', 'common/home')
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

  it.only("Test for testing the quantity of products on cart.", () => {
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


  const checkPriceNthItem = (index) => {
    shoppingCartPage.getPriceUnitNthElement(index).then(priceUnit => {
      shoppingCartPage.getQuantityNthElement(index).then(quantity => {
        shoppingCartPage.getPriceTotalNthElement(index).then(totalPrice => {
          expect(priceUnit * quantity).to.eq(totalPrice)
        })
      })
    })
  }

  it.only("Test for updating product quantity on checkout cart page.", () => {
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

  it.only("Test or removing items on checkout cart page", () => {
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

  it.only("Test for checkout functionality with not available products", () => {
    homepage.getTopProducts().eq(0).scrollIntoView()
    homepage.getTopProducts().eq(0).trigger('mouseover')
    homepage.addProductToCart(homepage.getTopProducts().eq(0))

    homepage.notificationComponent.getViewCartButton().click()
    shoppingCartPage.alertComponent.getAlert().should('contain', 'Products marked with *** are not available in the desired quantity or not in stock!')
    shoppingCartPage.getItems().should('have.length', 1)
  })

  it.only("Test for the shopping cart page with no items", () => {
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