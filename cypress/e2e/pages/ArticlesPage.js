import MainNavigation from "../components/MainNavigation"
import MainHeader from "../components/MainHeader"

class ArticlesPage {
    constructor() {
        this.mainNavigationComponent = new MainNavigation()
        this.mainHeaderComponent = new MainHeader()
    }

    getLatestArticles = () => cy.get("div#mz-article-listing-76210960 div.swiper-wrapper > div")
    getMostViewedArticles = () => cy.get("div#mz-article-listing-77210961 div.swiper-wrapper > div")
}

export default ArticlesPage
