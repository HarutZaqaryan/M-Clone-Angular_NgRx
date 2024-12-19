import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IRegisterRequest } from '../../../../Auth/Models/IRegisterRequest';
import { ICurrentUser } from '../../Models/ICurrentUser';
import { IBackEndErrors } from '../../Models/IBackEndErrors';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
