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

describe('Article Comments Tests', () => {
  beforeEach(() => {
    homepage.visit()
    cy.get('body').should('be.visible')
    cy.viewport(1280, 720)
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it("Verify comment form validation for guest users", () => {
    homepage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()

    articlePage.commentFormComponent.getYourNameInput().should('be.visible')
    articlePage.commentFormComponent.getYourNameInvalidFeedback().should('not.be.visible')

    articlePage.commentFormComponent.getEmailInput().should('be.visible')

    articlePage.commentFormComponent.getYourCommentInput().should('be.visible')
    articlePage.commentFormComponent.getYourCommentInvalidFeedback().should('not.be.visible')

    articlePage.commentFormComponent.getPostCommentButton().should('be.visible')
    articlePage.commentFormComponent.getPostCommentButton().should('have.text', 'Post comment')
    
    articlePage.commentFormComponent.getPostCommentButton().click()

    articlePage.commentFormComponent.getYourNameInvalidFeedback().should('be.visible')
    articlePage.commentFormComponent.getYourNameInvalidFeedback().should('have.text', 'Warning: Comment Name must be between 3 and 25 characters!')
    articlePage.commentFormComponent.getYourNameInvalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)')

    articlePage.commentFormComponent.getYourCommentInvalidFeedback().should('be.visible')
    articlePage.commentFormComponent.getYourCommentInvalidFeedback().should('have.text', 'Warning: Comment Text must be between 25 and 1000 characters!')
    articlePage.commentFormComponent.getYourCommentInvalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)')
  })

  it("Verify comment form for logged-in users", () => {
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    myAccountPage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    articlePage.commentFormComponent.getYourNameInput().should('not.exist')
    articlePage.commentFormComponent.getEmailInput().should('not.exist')
    articlePage.commentFormComponent.getYourCommentInput().should('be.visible')
  })

  it("Verify successful comment submission for logged-in users", () => {
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    myAccountPage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    articlePage.commentFormComponent.getYourCommentInput().type("This is a test comment with cypress")
    articlePage.commentFormComponent.alertComponent.checkAlertIsNotVisible()
    articlePage.commentFormComponent.getPostCommentButton().click()
    articlePage.commentFormComponent.alertComponent.checkAlertIsVisible()
    articlePage.commentFormComponent.alertComponent.checkAlertMessage("Thank you for your comment. It has been submitted to the webmaster for approval.")
  })

  it("Verify comments section displays correctly", () => {
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    myAccountPage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    articlePage.commentsComponent.getComments().should('have.length', 5)
  })

  it("Verify reply to comment functionality", () => {
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    myAccountPage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    articlePage.commentsComponent.getReplyButton(0).should('be.visible')
    articlePage.commentsComponent.getReplyButton(1).should('be.visible')
    articlePage.commentsComponent.getReplyButton(2).should('be.visible')
    articlePage.commentsComponent.getReplyButton(3).should('be.visible')
    articlePage.commentsComponent.getReplyButton(4).should('be.visible')
  })

  it("Verify view replies functionality", () => {
    homepage.mainNavigationComponent.getMyAccountOption().click()
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
    myAccountPage.mainNavigationComponent.getBlogOption().click()
    articlesPage.getLatestArticles().eq(0).click()
    articlePage.commentsComponent.getViewRepliesGeneral().should('be.visible')
    articlePage.commentsComponent.getViewRepliesGeneral().click()
    articlePage.commentsComponent.getComments().should('have.length', 10)
    articlePage.commentsComponent.getViewRepliesGeneral().should('be.visible')

    articlePage.commentsComponent.getViewRepliesGeneral().click()
    articlePage.commentsComponent.getComments().should('have.length', 15)
    articlePage.commentsComponent.getViewRepliesGeneral().should('be.visible')
  })
}) 