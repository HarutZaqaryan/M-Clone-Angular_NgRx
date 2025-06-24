import { createSelector } from '@ngrx/store';
import { IAppState } from '../Models/IAppState';
import { IArticleDetailsState } from '../Models/IArticleDetailsState';

export const selectArticleDetailsFeature = (state: IAppState) =>
  state.articleDetails;

export const isLoadingSelector = createSelector(
  selectArticleDetailsFeature,
  (state: IArticleDetailsState) => state.isLoading ?? true
);

export const articleDetailsSelector = createSelector(
  selectArticleDetailsFeature,
  (state: IArticleDetailsState) => state.data
);

export const errorSelector = createSelector(
  selectArticleDetailsFeature,
  (state: IArticleDetailsState) => state.error ?? ''
);
