import Home from "../../pages/Home"
import Login from "../../pages/Login"
import MyAccountPage from "../../pages/MyAccountPage"
import ArticlesPage from "../../pages/ArticlesPage"
import ArticlePage from "../../pages/ArticlePage"

const homepage = new Home()
const loginPage = new Login()
const myAccountPage = new MyAccountPage()
const articlePage = new ArticlePage()
const articlesPage = new ArticlesPage()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Articles Page Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it("Verify articles page default elements", () => {
    homepage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getMostViewedArticles().should('have.length', 10)
    articlesPage.getLatestArticles().should('have.length', 10)
  })

  it("Verify article page content", () => {
    homepage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=37')
    articlePage.getArticleTitle().should('be.visible')
    articlePage.getArticleTitle().should('have.text', 'amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus')
  })

  it("Verify article author link functionality", () => {
    homepage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    articlePage.getAuthorLink().should('be.visible')
    articlePage.getAuthorLink().should('have.text', 'Mark Jecno')
    articlePage.getAuthorLink().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3')
    articlePage.getAuthorLink().click()
    cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/author&author_id=3')
  })
}) 