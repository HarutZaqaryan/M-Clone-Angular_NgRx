import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IArticle } from '../../../../Articles/Models/IArticle';
import { EditArticleService } from '../../../../Articles/Services/editArticle.service';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from '../actions/editArticle.actions';

export const editArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    editArticleService = inject(EditArticleService)
  ) => {
    return actions$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) => {
        return editArticleService.editArticle(slug, articleInput).pipe(
          map((article: IArticle) => {
            return editArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterEdit$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(editArticleSuccessAction),
      tap((article) => router.navigate(['/articles', article.article.slug]))
    );
  },
  { functional: true, dispatch: false }
);
