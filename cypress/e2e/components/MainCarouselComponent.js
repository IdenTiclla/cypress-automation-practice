class MainCarouselComponent {
    getPrevButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-prev")
    getNextButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-next")

    getImages = () => cy.get("div[data-ride='carousel'] div.carousel-item")


    clickOnNextButton = () => {
        this.getNextButton().click({force: true})
    }

    clickOnPrevButton = () => {
        this.getPrevButton().click({force:true})
    }
}

export default MainCarouselComponent