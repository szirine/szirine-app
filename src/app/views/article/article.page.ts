import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SzirineService } from '../../services/api/szirine.service';
import { LongPost } from 'src/app/classes/wp/long-post';
import * as _ from 'lodash';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage {
articleId: number;
article: LongPost;
constructor(
  private route: ActivatedRoute,
  private szirineService: SzirineService,
  private router: Router
) { }
ionViewWillEnter() {
  this.articleId = this.route.snapshot.params['id'];
  if ( _.isUndefined(this.articleId)) {
    this.router.navigate(['/tabs/feed']);
  } else {
    this.szirineService.getPost(this.articleId).subscribe(
      (post: LongPost ) => {
        this.article = post;
      }
    );
  }
}
ionViewWillLeave() {
  // reset page properties for proper init/enter conditions
  this.article = undefined;
  this.articleId = undefined;
}
}