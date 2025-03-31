class CommentsComponent {
    getComments = () => cy.get("div.content-comment-list li")
    getComment = (commentNumber) => cy.get("div.content-comment-list li").eq(commentNumber)
    getReplyButton = (commentNumber) => this.getComment(commentNumber).find("a.reply")
    getViewRepliesOfComment = (commentNumber) => this.getComment(commentNumber).find("a.view-replies")
    getViewRepliesGeneral = () => cy.get("li + a.view-replies")
    getReplyFormOfComment = (commentNumber) => this.getComment(commentNumber).find("form#form-comment")
}

export default CommentsComponent 