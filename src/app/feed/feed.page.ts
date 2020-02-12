import { Component, OnInit } from '@angular/core';
import { SzirineService } from '../services/api/szirine.service';
import { LongPost } from '../classes/wp/long-post';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})

export class FeedPage implements OnInit {

articles: LongPost[] = [];

constructor(
  private szirineService: SzirineService
) { }

ngOnInit() {
  const articles = this.szirineService.getPosts().subscribe(
    (posts: LongPost[] ) => {
      this.articles = posts;
    }
  );
}

}