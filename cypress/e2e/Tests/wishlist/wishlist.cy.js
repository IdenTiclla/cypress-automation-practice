import Home from "../../pages/Home"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"
import WishListPage from "../../pages/WishListPage"
import ProductDetailPage from "../../pages/ProductDetailPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const homepage = new Home()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()
const wishListPage = new WishListPage()
const productDetailPage = new ProductDetailPage()


describe("Wishlist functionality.", () => {

  context("1080p resolution", () => {   
    
    beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible")
    cy.viewport(1920, 1080)
    });

    afterEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it.only("Test for testing adding an item to the wishlist with a logged user", () => {
        cy.log("Login a user")
        homepage.mainNavigationComponent.getMyAccountOption().click()
        loginPage.login(Cypress.env("email"), Cypress.env("password"))
  
        cy.log("adding product to the wishlist")
        myAccountPage.mainNavigationComponent.getHomeOption().click()
        homepage.getTopProducts().should('have.length', 10)
        homepage.getTopProducts().should('be.visible', { timeout: 5000 })
        homepage.getTopProducts().eq(0).scrollIntoView({ easing: 'linear' }).should('be.visible')
        homepage.getTopProducts().eq(0).realHover()
  
        // homepage.getTopProducts().eq(0).trigger('mouseover')
        homepage.getTopProducts().eq(0).find('div.product-action').should('be.visible', { timeout: 5000 })
        homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('be.be.visible', { timeout: 5000 })
        homepage.getTopProducts().eq(0).find('div.product-action').find('button').should('have.length', 4)
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
      })




    it.only("Test for adding and removing an item from wish list page.", () => {
      cy.log("Loging an user")
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
      const removeButton = wishListPage.getProducts().eq(0).find("a[href*='remove']")
      removeButton.should('be.visible')
      wishListPage.alertComponent.getAlert().should('not.exist')
      removeButton.click()
      wishListPage.alertComponent.getAlert().should('be.visible')
      wishListPage.alertComponent.getAlert().should('contain', ' Success: You have modified your wish list!')
      wishListPage.alertComponent.getAlert().should('have.class', 'alert-success')
      cy.contains("No results!")
    })

    it.only('Testing wish list with not logged user', () => {
      homepage.mainHeaderComponent.getWishListIconButton().click()
      loginPage.getEmailInputField().should('be.visible')
      loginPage.getPasswordInputField().should('be.visible')
      loginPage.getSubmitButton().should('be.visible')
      loginPage.login(Cypress.env("email"), Cypress.env("password"))
    })
  });

  context("Iphone resolution", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("body").should("be.visible")
      cy.viewport('iphone-x')
    });

    afterEach(() => {
      cy.clearLocalStorage();
      cy.clearCookies();
    });

    it.only("adding product to the wishlist without a logged user", () => {
      homepage.getTopProducts().eq(0).click()
      productDetailPage.addToTheWishListOnMobile()
      homepage.notificationComponent.getHeaderTitle().should('contain', 'Login')
      homepage.notificationComponent.getLoginButton().should('be.visible')
      homepage.notificationComponent.getRegisterButton().should('be.visible')
    })
    
  });   
});
