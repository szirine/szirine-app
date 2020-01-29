import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
isEdit: boolean;

constructor(
  private route: ActivatedRoute,
  private articlesService: ArticlesService,
  private router: Router
) { }

ionViewWillEnter() {
	this.articleId = this.route.snapshot.params['id'];
	if ( _.isUndefined(this.articleId)) {
		// new article is created
		this.isEdit = true;
		this.article = new Article();
	} else {
		this.article = this.articlesService.getArticle(this.articleId);
	}
}

ionViewWillLeave() {
	// reset page properties for proper init/enter conditions
	this.article = undefined;
	this.articleId = undefined;
}

ngOnInit() {

}

saveArticle(value: Article) {
	if ( _.isEmpty(this.articleId) ) {
		this.articlesService.createArticle(value);
	}
	this.router.navigate(['/tabs/feed']);
}

editArticle(value: Article) {
	this.isEdit = true;
}

deleteArticle(value: Article) {
	this.articlesService.deleteArticle(value.id);
	this.router.navigate(['/tabs/feed']);
}

}
