import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IRegisterRequest } from '../../../../Auth/Models/IRegisterRequest';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<IRegisterRequest>()
);
