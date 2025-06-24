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
  authReducer,
  authFeature,
} from './Shared/Feed/Store/reducers/authReducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as registration from './Shared/Feed/Store/effects/register.effect';
import * as login from './Shared/Feed/Store/effects/login.effect';
import * as currentUser from './Shared/Feed/Store/effects/getCurrentUser.effect';
import * as feed from './Shared/Feed/Store/effects/getFeed.effect';
import * as tags from './Shared/Feed/Store/effects/getTags.effects';
import * as articleDetails from './Shared/Feed/Store/effects/getArticleDetails.effect';
import * as deleteArticleDetails from './Shared/Feed/Store/effects/deleteArticleDetails.effect';
import { provideLoginRoutes } from './Auth/Components/login/login.routes';
import { AuthInterceptor } from './Shared/Feed/Services/authInterceptor.service';
import { provideGlobalFeedRoutes } from './GlobalFeed/Components/global-feed/global-feed.routes';
import { feedFeature } from './Shared/Feed/Store/reducers/feedReducer';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { tagsFeature } from './Shared/Feed/Store/reducers/tagsReducer';
import { provideUserFeedRoutes } from './GlobalFeed/Components/user-feed/user-feed.routes';
import { provideTagFeedRoutes } from './GlobalFeed/Components/tag-feed/tag-feed.routes';
import { articleDetailsFeature } from './Shared/Feed/Store/reducers/articleDetailsReducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideRegisterRoutes(), // My Custom provider
    provideLoginRoutes(), // My Custom provider
    provideGlobalFeedRoutes(), // My Custom provider
    provideUserFeedRoutes(), // My Custom provider
    provideTagFeedRoutes(), // My Custom provider
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore({ router: routerReducer }),
    // provideState({ name: 'auth', reducer: authReducer }),
    provideState(authFeature),
    provideState(feedFeature),
    provideState(tagsFeature),
    provideState(articleDetailsFeature),
    provideEffects(currentUser),
    provideEffects(login),
    provideEffects(registration),
    provideEffects(feed),
    provideEffects(articleDetails),
    provideEffects(deleteArticleDetails),
    provideEffects(tags),
    provideRouterStore(),
  ],
};
