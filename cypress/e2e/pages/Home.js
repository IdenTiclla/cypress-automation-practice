import MainNavigation from "../components/MainNavigation"
import MainHeader from "../components/MainHeader"
import RightNavigationBar from "../components/RightNavigationBar"
import QuickLinks from "../components/QuickLinks"
import Notification from "../components/Notification"
import QuickViewModal from "../components/QuickViewModal"
import ShoppingCartModal from "../components/ShoppingCartModal"

import MainCarouselComponent from "../components/MainCarouselComponent"
class Home {
    visit() {
        cy.visit('/')
    }
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.mainHeaderComponent = new MainHeader()
        this.rightNavigationComponent = new RightNavigationBar()
        this.quickLinksComponent = new QuickLinks()
        this.shoppingCartModalComponent = new ShoppingCartModal()
        this.notificationComponent = new Notification()
        this.quickViewModalComponent = new QuickViewModal()
        this.mainCarouselComponent = new MainCarouselComponent()
    }
    
    getTopProducts = () => cy.get("div#common-home > div:nth-of-type(5) div.swiper-slide > div.product-thumb.image-top")
    getTopProductsPrevButton = () => cy.get("div#mz-product-tab-37213259-0  div.swiper-pager a[class*='prev']")
    getTopProductsNextButton = () => cy.get("div#mz-product-tab-37213259-0  div.swiper-pager a[class*='next']")
    getProductActions = () => cy.get("div#common-home > div:nth-of-type(5) div.product-action")

    getTopCollectionOptions = () => cy.get("div#mz-product-listing-39213264 ul li a")
    getTopCollectionContent = () => cy.get("div#mz-product-listing-39213264 div.tab-content > div")

    

    selectTopCollectionOption = (option) => {
        this.getTopCollectionOptions().contains(option).click()
    }
    showQuickViewModal = (product) => {
        product.find('div.product-action').find('button').eq(2).click({force: true})
        
    }
    addProductToWishList = (product) => {
        product.find('div.product-action').find('button').eq(1).click({force: true})
    }
    addProductToCart = (product) => {
        product.find('div.product-action').find('button').eq(0).click({force: true})
    }
}

export default Home