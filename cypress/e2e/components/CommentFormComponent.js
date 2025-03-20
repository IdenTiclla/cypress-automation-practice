class CommentFormComponent {

    getCommentFormHeader = () => cy.get("div.content-comment-form h4")
    getYourNameInput = () => cy.get("div.content-comment-form input[name='name']")
    getYourNameInvalidFeedback = () => cy.get("div.content-comment-form input[name='name'] + div.invalid-feedback")
    getEmailInput = () => cy.get("div.content-comment-form input[name='email']")
    getYourCommentInput = () => cy.get("textarea#input-comment")
    getYourCommentInvalidFeedback = () => cy.get("textarea#input-comment + div.invalid-feedback")
    getPostCommentButton = () => cy.get("div.content-comment-form button#button-comment")


    writeComment = (yourName, email, yourComment) => {
        this.getYourNameInput().type(yourName)
        this.getEmailInput().type(email)
        this.getYourCommentInput().type(yourComment)
        this.getPostCommentButton().click()
    }
}

export default CommentFormComponent