class Filter {
    getFilterDropdown = () => cy.get("div.module-mz_filter.d-lg-block")
    getPriceFilterDropdown = () => cy.get("div.module-mz_filter.d-lg-block div.price")
    getManufacturerFilterDropdown = () => cy.get("div.module-mz_filter.d-lg-block div.manufacturer")
    getSearchFilterDropdown = () => cy.get("div.module-mz_filter.d-lg-block div.search")
    getColorFilterDropdown = () => cy.get("div.module-mz_filter.d-lg-block div.search + div")
    getColorsOptions = () => cy.get("div.module-mz_filter.d-lg-block div.search + div label")   
}

export default Filter