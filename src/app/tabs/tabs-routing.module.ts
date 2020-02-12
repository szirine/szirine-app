import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
	  {
		path: 'articles/:id',
		children: [
		{
		  path: '',
		  loadChildren: () =>
	  import('../views/article/article.module').then(m =>   m.ArticlePageModule)
		}
		]
	  },
	  {
		path: 'new-article',
		children: [
		{
		  path: '',
		  loadChildren: () =>
	  import('../views/article/article.module').then(m => m.ArticlePageModule)
		}
		]
	  },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
