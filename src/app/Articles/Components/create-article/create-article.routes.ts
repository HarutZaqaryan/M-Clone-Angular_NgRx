import { provideRouter } from '@angular/router';

export const createArticleRoutes = [
  {
    path: 'articles/new',
    loadComponent: () =>
      import('./create-article.component').then(
        (m) => m.CreateArticleComponent
      ),
  },
];

export const provideCreateArticleRoutes = () =>
  provideRouter(createArticleRoutes);
