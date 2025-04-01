import Home from "../../pages/Home";
import SearchResultPage from "../../pages/SearchResultPage";

const homepage = new Home();
const searchResultPage = new SearchResultPage();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Search Results Page tests on desktop resolution and iphone 12 pro max resolution", () => {
  context("720 resolution", () => {
    beforeEach(() => {
      homepage.visit();
      cy.get("body").should("be.visible");
      cy.viewport(1280, 720);
    });

    afterEach(() => {
      cy.clearLocalStorage();
      cy.clearCookies();
    });

    it.only("Test for default search with any criteria", () => {
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("have.length", 15);
      searchResultPage.getKeywordsInputField().should("have.text", "");
      searchResultPage.getCategoriesDropdown().should("have.value", "0");
      searchResultPage.getSearchButton().should("have.value", "Search");

      searchResultPage
        .getSearchInSubcategoriesCheckbox()
        .should("not.be.checked");
      searchResultPage
        .getSearchInProductDescriptionsCheckbox()
        .should("not.be.checked");
      searchResultPage.getPagination().should("have.length", 7);
    });

    it.only("Test for testing the search  functionality with results - iphone", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("have.length", 4);
    });

    it.only("Test for testing quick view from search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().eq(0).scrollIntoView();
      searchResultPage.getProducts().eq(0).trigger("mouseover");
      searchResultPage.showQuickViewModal(searchResultPage.getProducts().eq(0));
      searchResultPage.quickViewModalComponent.getModal().should("be.visible");
      searchResultPage.quickViewModalComponent.getCloseButton().click();
      searchResultPage.quickViewModalComponent
        .getModal()
        .should("not.be.visible");
    });

    it.only("Test for testing the search functionality with no results", () => {
      homepage.mainHeaderComponent.getCategoriesDropdown().should("be.visible");
      homepage.mainHeaderComponent
        .getSearchInputField()
        .should("have.value", "");
      homepage.mainHeaderComponent.getSearchInputField().should("be.visible");
      homepage.mainHeaderComponent
        .getSearchInputField()
        .should("have.attr", "placeholder", "Search For Products");
      homepage.mainHeaderComponent.getSearchButton().should("be.visible");
      homepage.mainHeaderComponent.getSearchInputField().type("hello world");
      homepage.mainHeaderComponent.getSearchButton().click();
      cy.url().should("contain", "search=hello+world");
      cy.contains("There is no product that matches the search criteria.");
    });

    it.only("Test for testing the search functionality with results - imac", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("imac");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("have.length", 8);
    });

    it.only("Test for testing the pagination component.", () => {
      homepage.mainNavigationComponent.clickOnSpecificTopCategory("Components");
      searchResultPage
        .getPagination()
        .contains("1")
        .parent()
        .should("have.class", "active");
      searchResultPage
        .getPagination()
        .contains("2")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("3")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("4")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("5")
        .parent()
        .should("not.have.class", "active");

      searchResultPage.navigateToPage("2");
      searchResultPage
        .getPagination()
        .contains("1")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("2")
        .parent()
        .should("have.class", "active");
      searchResultPage
        .getPagination()
        .contains("3")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("4")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("5")
        .parent()
        .should("not.have.class", "active");

      searchResultPage.navigateToPage("3");
      searchResultPage
        .getPagination()
        .contains("1")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("2")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("3")
        .parent()
        .should("have.class", "active");
      searchResultPage
        .getPagination()
        .contains("4")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("5")
        .parent()
        .should("not.have.class", "active");

      searchResultPage.navigateToPage("4");
      searchResultPage
        .getPagination()
        .contains("1")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("2")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("3")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("4")
        .parent()
        .should("have.class", "active");
      searchResultPage
        .getPagination()
        .contains("5")
        .parent()
        .should("not.have.class", "active");

      searchResultPage.navigateToPage("5");
      searchResultPage
        .getPagination()
        .contains("1")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("2")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("3")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("4")
        .parent()
        .should("not.have.class", "active");
      searchResultPage
        .getPagination()
        .contains("5")
        .parent()
        .should("have.class", "active");
    });

    it.only("Testing yellow color filter on search results page", () => {
      homepage.mainHeaderComponent
        .getSearchInputField()
        .should("have.text", "");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("have.length", 15);
      searchResultPage.filterComponent
        .getColorsOptions()
        .should("have.length", 8);
      searchResultPage.filterComponent.getColorsOptions().eq(7).click();
      searchResultPage.getProducts().eq(0).scrollIntoView();
      searchResultPage.getProducts().should("have.length", 1);
      cy.contains("Showing 1 to 1 of 1 (1 Pages)");
    });

    it.only("Test for the list view mode on search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("exist");
      searchResultPage.getListViewButton().click();
      searchResultPage.getProducts().should("not.exist");
      searchResultPage.getProductsListView().should("have.length", 4);
    });

    it.only("Test for quick view from search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("exist");
      searchResultPage.getListViewButton().click();
      searchResultPage.quickViewModalComponent.getModal().should("not.exist");
      searchResultPage.showQuickViewModal(
        searchResultPage.getProductsListView().eq(0)
      );
      searchResultPage.quickViewModalComponent.getModal().should("exist");
      searchResultPage.quickViewModalComponent.getModal().should("be.visible");
    });

    it.only("Test for checking the show quantity selector options", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage
        .getShowSelector()
        .find("option")
        .should("have.length", 5);
      searchResultPage
        .getShowSelector()
        .find("option")
        .then((options) => {
          const actual = [...options].map((option) => option.text);
          expect(actual).to.deep.eq(["15", "25", "50", "75", "100"]);
        });
    });

    it.only("Test for testing the sort by functionality on search results page.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage
        .getSortBySelector()
        .find("option")
        .should("have.length", 12);
      searchResultPage
        .getSortBySelector()
        .find("option")
        .then((options) => {
          const actual = [...options].map((option) => option.text);
          expect(actual).to.deep.eq([
            "Default",
            "Best sellers",
            "Popular",
            "Newest",
            "Name (A - Z)",
            "Name (Z - A)",
            "Price (Low > High)",
            "Price (High > Low)",
            "Rating (Highest)",
            "Rating (Lowest)",
            "Model (A - Z)",
            "Model (Z - A)",
          ]);
        });
    });

    it.only("Test for the show quantity selector when selecting options.", () => {
      homepage.mainHeaderComponent.getSearchInputField().type("iphone");
      homepage.mainHeaderComponent.getSearchButton().click();
      searchResultPage.getProducts().should("exist");
      searchResultPage.getListViewButton().click();
      searchResultPage.quickViewModalComponent.getModal().should("not.exist");
      searchResultPage.getShowSelector().select("15");
      searchResultPage
        .getShowSelector()
        .find("option:selected")
        .should("have.text", "15");
      searchResultPage
        .getShowSelector()
        .should(
          "have.value",
          "https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=15"
        );
      searchResultPage.getShowSelector().select("25");
      searchResultPage
        .getShowSelector()
        .find("option:selected")
        .should("have.text", "25");
      searchResultPage
        .getShowSelector()
        .should(
          "have.value",
          "https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=25"
        );
      searchResultPage.getShowSelector().select("50");
      searchResultPage
        .getShowSelector()
        .find("option:selected")
        .should("have.text", "50");
      searchResultPage
        .getShowSelector()
        .should(
          "have.value",
          "https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=50"
        );
      searchResultPage.getShowSelector().select("75");
      searchResultPage
        .getShowSelector()
        .find("option:selected")
        .should("have.text", "75");
      searchResultPage
        .getShowSelector()
        .should(
          "have.value",
          "https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=75"
        );
      searchResultPage.getShowSelector().select("100");
      searchResultPage
        .getShowSelector()
        .find("option:selected")
        .should("have.text", "100");
      searchResultPage
        .getShowSelector()
        .should(
          "have.value",
          "https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iphone&limit=100"
        );
    });
  });

  context("iphone 12 pro max resolution", () => {
    beforeEach(() => {
      homepage.visit();
      cy.get("body").should("be.visible");
      cy.viewport(390, 844);
    });

    afterEach(() => {
      cy.clearLocalStorage();
      cy.clearCookies();
    });

    it.only("First test for iphone viewport => testing the search functionality", () => {
      homepage.mainHeaderComponent
        .getWishListIconButton()
        .should("not.be.visible");
      homepage.mainHeaderComponent
        .getMobileSearchInputField()
        .type("hello world");
      homepage.mainHeaderComponent.getMobileSearchButton().click();
      cy.url().should("contain", "search=hello+world");
      cy.contains("There is no product that matches the search criteria.");
      searchResultPage
        .getMobileKeywordsInputField()
        .should("have.value", "hello world");
      searchResultPage
        .getMobileKeywordsInputField()
        .should("have.attr", "value", "hello world");
    });
  });
});
