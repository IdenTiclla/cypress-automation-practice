import MainNavigation from "../e2e/components/MainNavigation"
import MainHeader from "../e2e/components/MainHeader"
import RightNavigationBar from "../e2e/components/RightNavigationBar"
import QuickLinks from "../e2e/components/QuickLinks"
import Notification from "../e2e/components/Notification"
import QuickViewModal from "../e2e/components/QuickViewModal"
import ShoppingCartModal from "../e2e/components/ShoppingCartModal"

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
    }

    getCarouselPrevButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-prev")
    getCarouselNextButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-next")

    getMainCarouselImages = () => cy.get("div[data-ride='carousel'] div.carousel-item")

    getTopProducts = () => cy.get("div#common-home > div:nth-of-type(5) div.swiper-slide > div.product-thumb.image-top")
    getTopProductsPrevButton = () => cy.get("div#mz-product-tab-37213259-0  div.swiper-pager a[class*='prev']")
    getTopProductsNextButton = () => cy.get("div#mz-product-tab-37213259-0  div.swiper-pager a[class*='next']")
    getProductActions = () => cy.get("div#common-home > div:nth-of-type(5) div.product-action")

    getCarouselPaginationItems = () => cy.get("div#mz-carousel-213240 ul[class*='indicators'] li")

    getTopCollectionOptions = () => cy.get("div#mz-product-listing-39213264 ul li a")
    getTopCollectionContent = () => cy.get("div#mz-product-listing-39213264 div.tab-content > div")

    // getQuickViewModal = () => cy.get("div#product-quick-view")

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