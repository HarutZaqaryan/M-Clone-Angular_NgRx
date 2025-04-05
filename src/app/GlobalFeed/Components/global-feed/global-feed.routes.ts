import { provideRouter, Routes } from '@angular/router';

export const globalFeedRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./global-feed.component').then((m) => m.GlobalFeedComponent),
  },
];

export const provideGlobalFeedRoutes = () => provideRouter(globalFeedRoutes);
