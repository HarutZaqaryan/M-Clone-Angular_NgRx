import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
} from '../actions/register.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../../../Auth/Services/auth.service';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { registerFailureAction } from './../actions/register.action';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from '../../Services/persistance.service';
import { Router } from '@angular/router';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterSubmit$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => router.navigateByUrl('/'))
    );
  },
  { functional: true, dispatch: false }
);
