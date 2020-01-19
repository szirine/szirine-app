import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Article } from '../../classes/article';
import * as _ from 'lodash';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})

export class ArticleDetailComponent implements OnInit {

@Input() article: Article;
@Output() saveArticleEvent = new EventEmitter<Article>();
@Output() deleteArticleEvent = new EventEmitter<Article>();
isEdit: boolean = false;

constructor(
  public alertController: AlertController,
  private router: Router
) { }

ngOnInit() {
  console.log('child.ngOnInit');
  if ( _.isUndefined(this.article.id) ) {
    console.log(`child.articleId: ${this.article.id}`);
    this.isEdit = true;
  }
}

saveArticle() {
  console.log(`1. child.saveArticle`);
  this.saveArticleEvent.emit(this.article);
  console.log(`3. child.saveArticle`);
  this.isEdit = false;
  this.article = null;
  this.router.navigate(['/tabs/feed']);
}

editArticle() {
  this.isEdit = true;
}

deleteArticle() {
  this.presentConfirm();
}

presentConfirm() {
  const alert = this.alertController.create({
    header: 'Confirm delete',
    message: 'If you confirm to delete this article will be permanently removed.',
    buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Delete',
      handler: () => {
        console.log('Confirm delete');
        this.deleteArticleEvent.emit(this.article);
        this.router.navigate(['/tabs/feed']);
      }
    }
    ]
  }).then( (alert) => { alert.present(); });
}

}