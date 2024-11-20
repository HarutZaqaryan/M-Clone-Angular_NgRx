import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ username: string; email: string; password: string }>()
);
