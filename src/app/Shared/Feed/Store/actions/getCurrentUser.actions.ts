import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { ICurrentUser } from '../../Models/ICurrentUser';

export const getCurrentUserAction = createAction(ActionType.GET_CURRENT_USER);
export const getCurrentUserSuccessAction = createAction(
  ActionType.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
export const getCurrentUserFailureAction = createAction(
  ActionType.GET_CURRENT_USER_FAILURE
);
