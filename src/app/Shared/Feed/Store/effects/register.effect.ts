import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
} from '../actions/register.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../../../../Auth/Services/auth.service';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { registerFailureAction } from './../actions/register.action';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    );
  },
  { functional: true }
);
