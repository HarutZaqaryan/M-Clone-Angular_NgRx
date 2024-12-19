import { createSelector } from '@ngrx/store';
import { IAppState } from './Models/IAppState';
import { IAuthState } from './Models/IAuthState';

export const selectFeature = (state: IAppState) => state.auth;

export const authFeatureSelector = createSelector(
  selectFeature,
  (state: IAuthState) => state.isSubmitting
);

export const validationErrorSelector = createSelector(
  selectFeature,
  (state: IAuthState) => state.validationErrors
);
