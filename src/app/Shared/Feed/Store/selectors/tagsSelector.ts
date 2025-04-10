import { createSelector } from '@ngrx/store';
import { IAppState } from '../Models/IAppState';
import { ITagsState } from '../Models/ITagsState';

export const selectTagsFeature = (state: IAppState) => state.tags;

export const isLoadingSelector = createSelector(
  selectTagsFeature,
  (state: ITagsState) => state.isLoading ?? true
);

export const tagsSelector = createSelector(
  selectTagsFeature,
  (state: ITagsState) => state.tags ?? {tags:[]}
);

export const errorSelector = createSelector(
  selectTagsFeature,
  (state: ITagsState) => state.error ?? ''
);
