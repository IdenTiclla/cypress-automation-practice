import MainNavigation from "../e2e/components/MainNavigation"
import MainHeader from "../e2e/components/MainHeader"
import RightNavigationBar from "../e2e/components/RightNavigationBar"
class Home {
    visit() {
        cy.visit('/')
    }
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.mainHeaderComponent = new MainHeader()
        this.rightNavigationComponent = new RightNavigationBar()
    }

    getCarouselPrevButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-prev")
    getCarouselNextButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-next")

    getFirstImageInMainCarousel = () => cy.get("div[data-ride='carousel'] div.carousel-item:nth-of-type(1)")
    getSecondImageInMainCarousel = () => cy.get("div[data-ride='carousel'] div.carousel-item:nth-of-type(2)")
    getThirdImageInMainCarousel = () => cy.get("div[data-ride='carousel'] div.carousel-item:nth-of-type(3)")

    getTopProducts = () => cy.get("div#common-home > div:nth-of-type(5) div.swiper-slide > div.product-thumb.image-top")
    
    getProductActions = () => cy.get("div#common-home > div:nth-of-type(5) div.product-action")
}

export default Home