import { Injectable } from '@angular/core';
import { Article } from '../../classes/article';
import { CustomDate } from '../../classes/custom-date';
import { ARTICLES } from '../../assets/data/mock-articles';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
articles: Article[] = ARTICLES;
constructor() {
  console.log(this.articles);
}
getArticles(): any[] {
  return this.articles;
}
getArticle(id: any): any {
  // compares URL param string to number
  const filteredArticle = this.articles.filter( article => article.id == id)[0];
  return filteredArticle;
}

createArticle(newArticle: Article): number {
  newArticle.id = this.nextArticleId();
  this.articles.push(newArticle);
  return newArticle.id;
}

deleteArticle(id: any): any {
  console.log(`articles.service.deleteArticle for ${id}`);
  const index = this.articles.map( article => {
	return article.id;
  }).indexOf(id);
  this.articles.splice(index, 1);
}

nextArticleId(): number {
  const maxArticleId = Number(this.articles.reduce( (max, article) => ( article.id > max ) ? article.id : max, this.articles[0].id ) );
  const newArticleId = ( maxArticleId + 1);
  console.log(newArticleId);
  return newArticleId;
}

}