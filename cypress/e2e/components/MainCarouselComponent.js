class MainCarouselComponent {
    getPrevButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-prev")
    getNextButton = () => cy.get("div[data-ride='carousel'] a.carousel-control-next")

    getImages = () => cy.get("div[data-ride='carousel'] div.carousel-item")
}

export default MainCarouselComponent