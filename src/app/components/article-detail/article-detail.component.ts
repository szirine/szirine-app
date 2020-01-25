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
isEdit: boolean;

constructor(
  public alertController: AlertController,
  private router: Router
) { }

ngOnInit() {
  if ( _.isUndefined(this.article.id) ) {
    this.isEdit = true;
  }
}

saveArticle() {
  if ( !this.isValidForm() ) {
	  return false;
  }
  this.saveArticleEvent.emit(this.article);
  this.router.navigate(['/tabs/feed']);
}

isValidForm() {
	if ( _.isUndefined(this.article.title) ) {
		console.log(`Invalid article.name: ${ this.article.title }`);
		return false;
	}
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
        console.log('Cancel Delete');
      }
    },
    {
      text: 'Delete',
      handler: () => {
        this.deleteArticleEvent.emit(this.article);
        this.router.navigate(['/tabs/feed']);
      }
    }
    ]
  }).then( (alert) => { alert.present(); });
}

}