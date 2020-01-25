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
  	this.articleId = route.snapshot.params['id'];
}

ionViewWillEnter() {
	if ( _.isUndefined(this.articleId)) {
		this.article = new Article();
	}
}

ionViewWillLeave() {
	this.article = null;
}

ngOnInit() {
	if ( _.isEmpty(this.articleId) ) {
	  const created = new CustomDate();
	  this.article = new Article(created);
	} else {
	  this.article = this.articlesService.getArticle(this.articleId);
	}
}

saveArticle(value: Article) {
	if ( _.isEmpty(this.articleId) ) {
		this.articlesService.createArticle(value);
		this.article = null;
	}
}

deleteArticle(value: Article) {
	this.articlesService.deleteArticle(value.id);
}

}
