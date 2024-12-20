import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../../Auth/Services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { PersistanceService } from '../../Services/persistance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            persistanceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.error })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterLogin$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => router.navigateByUrl('/'))
    );
  },
  { functional: true, dispatch: false }
);
