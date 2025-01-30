class MainCarouselComponent {
    getPrevButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-prev")
    getNextButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-next")

    getImages = () => cy.get("div[data-ride='carousel'] div.carousel-item")
    getPaginationItems = () => cy.get("div[data-ride='carousel'] ul > li")


    clickOnNextButton = () => {
        this.getNextButton().click({force: true})
    }

    clickOnPrevButton = () => {
        this.getPrevButton().click({force:true})
    }
}

export default MainCarouselComponent