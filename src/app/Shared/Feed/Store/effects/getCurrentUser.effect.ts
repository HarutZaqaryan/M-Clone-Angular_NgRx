import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { PersistanceService } from '../../Services/persistance.service';
import { AuthService } from '../../../../Auth/Services/auth.service';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { HttpErrorResponse } from '@angular/common/http';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.actions';

// export const getCurrentUserEffect = createEffect(
//   (
//     persistanceService = inject(PersistanceService),
//     actions$ = inject(Actions),
//     authService = inject(AuthService)
//   ): Observable<any> => {
//     return actions$.pipe(
//       ofType(getCurrentUserAction),
//       tap(() => console.log('Tap 1')),
//       switchMap(() => {
//         try {
//           console.log('Here 1');

//           const token = persistanceService.get('accessToken');
//           if (!token) {
//             return of(getCurrentUserFailureAction());
//           }

//           return authService.getCurrentUser().pipe(
//             tap(() => console.log('tap')),
//             map((currentUser: ICurrentUser) => {
//               console.log('here 3');
//               return getCurrentUserSuccessAction({ currentUser });
//             }),
//             catchError((errorResponse: HttpErrorResponse) => {
//               return of(getCurrentUserFailureAction());
//             })
//           );
//         } catch (err) {
//           console.log('errorerrorerror',err);
//         }
//       })
//     );
//   },
//   { functional: true }
// );

export const getCurrentUserEffect = createEffect(
  (
    persistanceService = inject(PersistanceService),
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ): Observable<any> => {
    return actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    );
  },
  { functional: true }
);
