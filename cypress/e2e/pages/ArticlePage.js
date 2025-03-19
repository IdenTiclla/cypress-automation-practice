class ArticlePage {
    
    
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