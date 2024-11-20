import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { IAuthState } from '../Models/IAuthState';
import { registerAction } from '../actions/register.action';

export interface State {}

const initialState: IAuthState = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export const reducers: ActionReducerMap<State> = {
  // authReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
