import { createSelector } from '@ngrx/store';
import { IAppState } from '../Models/IAppState';
import { IFeedState } from '../Models/IFeedState';

export const selectFeedFeature = (state: IAppState) => state.feed;

export const isLoadingSelector = createSelector(
  selectFeedFeature,
  (state: IFeedState) => state.isLoading ?? true
);

export const feedSelector = createSelector(
  selectFeedFeature,
  (state: IFeedState) => state.data ?? { articlesCount: 0, articles: [] }
);

export const errorSelector = createSelector(
  selectFeedFeature,
  (state: IFeedState) => state.error ?? ''
);
