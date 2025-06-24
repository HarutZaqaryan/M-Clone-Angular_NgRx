import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleDetailsService } from '../../Services/article-details.service';
import { inject } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import {
  getArticleDetailsAction,
  getArticleDetailsFailure,
  getArticleDetailsSuccess,
} from '../actions/getArticleDetails.actions';
import { IArticle } from '../../../../Articles/Models/IArticle';

export const getArticleDetailsEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleDetailsService = inject(ArticleDetailsService)
  ): Observable<any> => {
    return actions$.pipe(
      ofType(getArticleDetailsAction),
      switchMap(({ slug }) => {
        return articleDetailsService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleDetailsSuccess({ article });
          }),
          catchError(() => of(getArticleDetailsFailure()))
        );
      })
    );
  },
  { functional: true }
);
