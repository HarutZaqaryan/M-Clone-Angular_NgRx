import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
} from '../actions/register.action';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { AuthService } from '../../../../Auth/Services/auth.service';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { registerFailureAction } from './../actions/register.action';

@Injectable()
export class RegisterEffect {

  register$ = createEffect((): any => {
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}

}
