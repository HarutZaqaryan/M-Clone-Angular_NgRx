import { createSelector } from '@ngrx/store';
import { IAppState } from '../Models/IAppState';
import { IEditArticleState } from '../Models/IEditArticleState';

export const selectFeature = (state: IAppState) => state.editArticle;

export const isSubmitingSelector = createSelector(
  selectFeature,
  (state: IEditArticleState) => state.isSubmiting
);

export const isLoadingSelector = createSelector(
  selectFeature,
  (state: IEditArticleState) => state.isLoading
);

export const articleSelector = createSelector(
  selectFeature,
  (state: IEditArticleState) => state.article
);

export const validationErrorsSelector = createSelector(
  selectFeature,
  (state: IEditArticleState) => state.validationErrors
);
