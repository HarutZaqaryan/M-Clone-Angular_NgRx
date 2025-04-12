import { provideRouter, Routes } from '@angular/router';

export const tagFeedRoutes: Routes = [
  {
    path: 'tags/:slug',
    loadComponent: () =>
      import('./tag-feed.component').then((m) => m.TagFeedComponent),
  },
];

export const provideTagFeedRoutes = () => provideRouter(tagFeedRoutes);
