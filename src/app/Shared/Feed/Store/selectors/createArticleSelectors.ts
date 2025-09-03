import { createSelector } from '@ngrx/store';
import { IAppState } from '../Models/IAppState';
import { ICreateArticleState } from '../Models/ICreateArticleState';

export const selectFeature = (state: IAppState) => state.createArticle;

export const isSubmittingSelector = createSelector(
  selectFeature,
  (state: ICreateArticleState) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  selectFeature,
  (state: ICreateArticleState) => state.validationErrors
);
