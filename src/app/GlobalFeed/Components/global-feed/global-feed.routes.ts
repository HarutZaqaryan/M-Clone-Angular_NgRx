import { provideRouter, Routes } from '@angular/router';
import { ArticleDetailsComponent } from '../../../ArticlePage/Components/article-page/article-details.component';

export const globalFeedRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./global-feed.component').then((m) => m.GlobalFeedComponent),
  },
  {
    path: 'articles/:slug',
    component: ArticleDetailsComponent,
  },
];

export const provideGlobalFeedRoutes = () => provideRouter(globalFeedRoutes);
