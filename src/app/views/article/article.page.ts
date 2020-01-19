import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/data/articles.service';
import { Article } from 'src/app/classes/article';
import { CustomDate } from 'src/app/classes/custom-date';
import * as _ from 'lodash';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})

export class ArticlePage implements OnInit {

articleId: number;
article: Article;

constructor(
  private route: ActivatedRoute,
  private articlesService: ArticlesService
) {
	console.log(`parent.constructor: ${this.articleId}`);
	console.log(this.article);
  	this.articleId = route.snapshot.params['id'];
}

ngOnInit() {
	console.log(`parent.ngOnInit.articleId: ${this.articleId}`);
	if ( _.isEmpty(this.articleId) ) {
	  console.log(`parent.ngOnInit, empty articleId`);
	  const created = new CustomDate();
	  this.article = new Article(created);
	} else {
	  this.article = this.articlesService.getArticle(this.articleId);
	}
}

saveArticle(value: Article) {
	console.log(`2. parent.saveArticle`);
	if ( _.isEmpty(this.articleId) ) {
		this.articlesService.createArticle(value);
		this.article = null;
	}
}

deleteArticle(value: Article) {
	this.articlesService.deleteArticle(value.id);
}

ionViewWillEnter() {
	console.log('parent.ionViewWillEnter');
	if ( _.isEmpty(this.articleId) ) {
		//this.articlesService.createArticle(value);
		console.log('empty article');
	}
}

ionViewDidEnter() {
	console.log('parent.ionViewDidEnter');
}

ionViewWillLeave() {
	console.log('parent.ionViewWillLeave');
}

ionViewDidLeave() {
	console.log('parent.ionViewDidLeave');
}

}
