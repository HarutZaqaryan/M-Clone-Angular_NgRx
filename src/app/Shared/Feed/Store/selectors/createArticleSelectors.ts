import { createSelector } from '@ngrx/store';
import { IAppState } from '../Models/IAppState';
import { ICreateArticleState } from '../Models/ICreateArticleState';

export const selectFeature = (state: IAppState) => state.createArticle;

export const isSubmitingSelector = createSelector(
  selectFeature,
  (state: ICreateArticleState) => state.isSubmiting
);

export const validationErrorsSelector = createSelector(
  selectFeature,
  (state: ICreateArticleState) => state.validationErrors
);
