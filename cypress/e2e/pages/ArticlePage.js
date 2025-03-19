class ArticlePage {
    
    getArticleTitle = () => cy.get("div#article-article h1")
    getAuthorLink = () => cy.get("div#article-article span.mr-3.extra-author > a")   
    
    getYourNameInputField = () => cy.get("input#input-name")
    getEmailInputField = () => cy.get("input#input-email")
    getCommentInputField = () => cy.get("textarea#input-comment")
    getPostCommentButton = () => cy.get("button#button-comment")
    

    writeComment = (yourname, email, comment) => {
        this.getYourNameInputField().type(yourname)
        this.getEmailInputField().type(email)
        this.getCommentInputField().type(comment)
        this.getPostCommentButton().click()
    }

    
}

export default ArticlePage