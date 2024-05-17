import Search from "../e2e/components/Search"

class Home {
    visit() {
        cy.visit('/')
    }
    constructor() {
        this.searchComponent = new Search()
    }
    getHomeOption = () => cy.get("ul.horizontal a[href*='common/home']")
    getSpecialHotOption = () => cy.get("ul.horizontal a[href*='product/special']")
    getBlogOption = () => cy.get("ul.horizontal a[href*='blog/home']")
    getMegaMenuOption = () => cy.get("ul.horizontal li:nth-of-type(4) a[data-toggle='dropdown']")
    getAddOnsOption = () => cy.get("ul.horizontal li:nth-of-type(5) a[data-toggle='dropdown']")
    getMyAccountOption = () => cy.get("ul.horizontal li:nth-of-type(6) a[data-toggle='dropdown']")
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