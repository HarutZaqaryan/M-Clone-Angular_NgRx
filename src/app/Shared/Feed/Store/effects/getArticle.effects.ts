import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IArticle } from '../../../../Articles/Models/IArticle';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.actions';
import { ArticleDetailsService } from '../../Services/article-details.service';

export const editArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleDetailsService = inject(ArticleDetailsService)
  ) => {
    return actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return articleDetailsService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
