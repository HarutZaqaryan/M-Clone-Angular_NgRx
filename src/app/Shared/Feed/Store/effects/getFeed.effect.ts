import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from '../actions/getFeed.actions';
import { FeedService } from '../../Services/feed.service';
import { IFeedResponse } from '../../Models/IFeed';

export const getFeedEffect = createEffect(
  (
    actions$ = inject(Actions),
    feedService = inject(FeedService)
  ): Observable<any> => {
    return actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return feedService.getFeed(url).pipe(
          map((feed: IFeedResponse) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError((errorResponse) => {
            return of(getFeedFailureAction());
          })
        );
      })
    );
  },
  { functional: true }
);
