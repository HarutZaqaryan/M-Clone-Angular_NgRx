import { provideRouter, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from '../../../Shared/Feed/Store/effects/register.effect';

export const registerRoutes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./register.component').then((m) => m.RegisterComponent),
    providers: [provideEffects(RegisterEffect)],
  },
];

export const provideRegisterRoutes = () => provideRouter(registerRoutes);
