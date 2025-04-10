import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import {
  getTagsAction,
  getTagsFailureAction,
  getTagsSuccessAction,
} from '../actions/getTags.actions';
import { TagsService } from '../../Services/tags.service';
import { ITagsResponse } from '../../Models/ITags';

export const getTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    tagsService = inject(TagsService)
  ): Observable<any> => {
    return actions$.pipe(
      ofType(getTagsAction),
      switchMap(({ url }) => {
        return tagsService.getTags(url).pipe(
          map((tags: ITagsResponse) => {
            return getTagsSuccessAction({ tags });
          }),
          catchError((errorResponse: string) => {
            return of(getTagsFailureAction({ error: errorResponse }));
          })
        );
      })
    );
  },
  { functional: true }
);
