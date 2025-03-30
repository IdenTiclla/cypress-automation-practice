class CommentsComponent {
    getComments = () => cy.get("div.content-comment-list li")
    getComment = (commentNumber) => cy.get("div.content-comment-list li").eq(commentNumber)
    getReplyButton = (commentNumber) => this.getComment(commentNumber).find("a.reply")
}

export default CommentsComponent 