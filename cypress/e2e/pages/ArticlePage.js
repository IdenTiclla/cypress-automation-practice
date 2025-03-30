import CommentFormComponent from "../components/CommentFormComponent"
import CommentsComponent from "../components/CommentsComponent"
class ArticlePage {

    constructor() {
        this.commentFormComponent = new CommentFormComponent()
        this.commentsComponent = new CommentsComponent()
    }
    
    getArticleTitle = () => cy.get("div#article-article h1")
    getAuthorLink = () => cy.get("div#article-article span.mr-3.extra-author > a")
    
}

export default ArticlePage