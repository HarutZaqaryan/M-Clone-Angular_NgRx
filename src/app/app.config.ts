import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideRegisterRoutes } from './Auth/Components/register/register.routes';
import { provideState, provideStore } from '@ngrx/store';
import {
  reducers,
  metaReducers,
  authReducer,
} from './Shared/Feed/Store/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from './Shared/Feed/Store/effects/register.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideRegisterRoutes(), // Custom provider
    provideHttpClient(),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState({ name: 'auth', reducer: authReducer }),
    provideEffects(RegisterEffect),
  ],
};
