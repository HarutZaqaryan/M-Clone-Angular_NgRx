import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import {
  deleteArticleDetailsAction,
  deleteArticleDetailsFailure,
  deleteArticleDetailsSuccess,
} from '../actions/articleDetails.actions';
import { ArticleService } from '../../../../ArticlePage/Services/article.service';
import { Router } from '@angular/router';

export const deleteArticleDetailsEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleDetailsService = inject(ArticleService)
  ): Observable<any> => {
    return actions$.pipe(
      ofType(deleteArticleDetailsAction),
      switchMap(({ slug }) => {
        return articleDetailsService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleDetailsSuccess();
          }),
          catchError(() => of(deleteArticleDetailsFailure()))
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterDeleteArticle$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(deleteArticleDetailsSuccess),
      tap(() => {
        router.navigateByUrl('/')
      })
    ),
  { functional: true, dispatch: false }
);
