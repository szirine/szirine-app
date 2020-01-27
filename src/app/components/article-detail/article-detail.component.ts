import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Article } from '../../classes/article';
import * as _ from 'lodash';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})

export class ArticleDetailComponent {

@Input() article: Article;
@Input() isEdit: boolean;

@Output() saveArticleEvent = new EventEmitter<Article>();
@Output() editArticleEvent = new EventEmitter<Article>();
@Output() deleteArticleEvent = new EventEmitter<Article>();


constructor(
  public alertController: AlertController
) { }

saveArticle() {
	if ( !this.isValidForm() ) {
		return false;
	}
	this.saveArticleEvent.emit(this.article);
}

editArticle() {
	this.editArticleEvent.emit(this.article);
}

deleteArticle() {
  this.presentConfirm();
}

isValidForm() {
	if ( _.isUndefined(this.article.title) ) {
		console.log(`Invalid article.name: ${ this.article.title }`);
		return false;
	}
	if ( _.isEmpty(this.article.title) ) {
		console.log(`Invalid article.name: ${ this.article.title }`);
		return false;
	}
	return true;
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
      }
    }
    ]
  }).then( (alert) => { alert.present(); });
}

}