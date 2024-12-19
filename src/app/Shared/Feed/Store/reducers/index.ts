import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createReducer,
  MetaReducer,
  on,
} from '@ngrx/store';
import { IAuthState } from '../Models/IAuthState';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';

export interface State {}

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors:action.errors
    })
  )
);

export function reducers(
  state: IAuthState,
  action: Action
): ActionReducerMap<State> {
  return authReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
