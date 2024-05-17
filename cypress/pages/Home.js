import Search from "../e2e/components/Search"
import MainNavigation from "../e2e/components/MainNavigation"

class Home {
    visit() {
        cy.visit('/')
    }
    constructor() {
        this.searchComponent = new Search()
        this.mainNavigationComponent = new MainNavigation()
    }
    
    getCompareIconButton = () => cy.get("div#main-header  a[href*='/compare']")
    getWishListIconButton = () => cy.get("a[aria-label='Wishlist']")
    getCartIconButton = () => cy.get("div.cart-icon").first()
    
    getCarouselPrevButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-prev")
    getCarouselNextButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-next")

    getFirstImageInMainCarousel = () => cy.get("div[data-ride='carousel'] div.carousel-item:nth-of-type(1)")
    getSecondImageInMainCarousel = () => cy.get("div[data-ride='carousel'] div.carousel-item:nth-of-type(2)")
    getThirdImageInMainCarousel = () => cy.get("div[data-ride='carousel'] div.carousel-item:nth-of-type(3)")

    // getTopProducts = () => cy.get("div#common-home > div:nth-of-type(5) div.swiper-slide")
    getTopProducts = () => cy.get("div#common-home > div:nth-of-type(5) div.swiper-slide > div.product-thumb.image-top")
    
    getProductActions = () => cy.get("div#common-home > div:nth-of-type(5) div.product-action")
}

export default Home