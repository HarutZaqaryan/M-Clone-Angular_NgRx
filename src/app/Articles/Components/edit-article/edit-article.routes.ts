import { provideRouter } from '@angular/router';

export const editArticleRoutes = [
  {
    path: 'article/:slug/edit',
    loadComponent: () =>
      import('./edit-article.component').then((m) => m.EditArticleComponent),
  },
];

export const provideEditArticleRoutes = () => provideRouter(editArticleRoutes);
