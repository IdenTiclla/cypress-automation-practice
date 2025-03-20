import CommentFormComponent from "../components/CommentFormComponent"

class ArticlePage {

    constructor() {
        this.commentFormComponent = new CommentFormComponent()
    }
    
    getArticleTitle = () => cy.get("div#article-article h1")
    getAuthorLink = () => cy.get("div#article-article span.mr-3.extra-author > a")   
    

    
}

export default ArticlePage