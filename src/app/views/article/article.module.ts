import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticlePageRoutingModule } from './article-routing.module';
import { ArticlePage } from './article.page';
import { ArticleDetailComponent } from '../../components/article-detail/article-detail.component';

@NgModule({
  declarations: [
    ArticlePage,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlePageRoutingModule
  ],
  exports: [
    ArticleDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ArticlePageModule {}
