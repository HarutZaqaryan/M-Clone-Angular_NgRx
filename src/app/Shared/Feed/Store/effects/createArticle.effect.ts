import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateArticleService } from '../../../../Articles/Services/createArticle.service';
import {
  createArticleAction,
  createArticleFailureAction, 
  createArticleSuccessAction,
} from '../actions/createArticle.actions';
import { IArticle } from '../../../../Articles/Models/IArticle';

export const createArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    createArticleService = inject(CreateArticleService)
  ) => {
    return actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return createArticleService.createArticle(articleInput).pipe(
          map((article: IArticle) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterCreate$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createArticleSuccessAction),
      tap((article) => router.navigate(['/articles', article.article.slug]))
    );
  },
  { functional: true, dispatch: false }
);
