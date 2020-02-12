import { Component, Input } from '@angular/core';
import { LongPost } from '../../classes/wp/long-post';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent {
@Input() article: LongPost;
constructor() { }
}