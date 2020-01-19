import { Component, OnInit } from '@angular/core';
import { Article } from '../classes/article';
import { ArticlesService } from '../services/data/articles.service';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})

export class FeedPage implements OnInit {

articles: Article[] = [];

constructor(private articlesService: ArticlesService) { }

ngOnInit() {
  this.articles = this.articlesService.getArticles();
}

}