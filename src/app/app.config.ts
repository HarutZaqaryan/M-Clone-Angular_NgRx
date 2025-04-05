import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRegisterRoutes } from './Auth/Components/register/register.routes';
import { provideState, provideStore } from '@ngrx/store';
import {
  metaReducers,
  authReducer,
  reducers,
} from './Shared/Feed/Store/reducers/authReducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as registration from './Shared/Feed/Store/effects/register.effect';
import * as login from './Shared/Feed/Store/effects/login.effect';
import * as currentUser from './Shared/Feed/Store/effects/getCurrentUser.effect';
import * as feed from './Shared/Feed/Store/effects/getFeed.effect';
import { provideLoginRoutes } from './Auth/Components/login/login.routes';
import { AuthInterceptor } from './Shared/Feed/Services/authInterceptor.service';
import { provideGlobalFeedRoutes } from './GlobalFeed/Components/global-feed/global-feed.routes';
import { feedFeature } from './Shared/Feed/Store/reducers/feedReducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),
    provideRegisterRoutes(), // My Custom provider
    provideLoginRoutes(), // My Custom provider
    provideGlobalFeedRoutes(), // My Custom provider

    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },

    provideStore(reducers, { metaReducers }),
    provideState(feedFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState({ name: 'auth', reducer: authReducer }),
    provideEffects(currentUser),
    provideEffects(login),
    provideEffects(registration),
    provideEffects(feed),
  ],
};
