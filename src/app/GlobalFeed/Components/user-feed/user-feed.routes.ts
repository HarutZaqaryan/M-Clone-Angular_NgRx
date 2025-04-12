import { provideRouter, Routes } from '@angular/router';

export const userFeedRoutes: Routes = [
  {
    path: 'feed',
    loadComponent: () =>
      import('./user-feed.component').then((m) => m.UserFeedComponent),
  },
];

export const provideUserFeedRoutes = () => provideRouter(userFeedRoutes);
