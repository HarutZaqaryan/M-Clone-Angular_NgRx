import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { ILoginRequest } from '../../../../Auth/Models/ILoginRequest';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { IBackEndErrors } from '../../Models/IBackEndErrors';

export const loginAction = createAction(
  ActionType.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionType.LOGIN_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
