import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { ITagsState } from '../Models/ITagsState';
import {
  getTagsAction,
  getTagsFailureAction,
  getTagsSuccessAction,
} from '../actions/getTags.actions';

const initialTagsState: ITagsState = {
  isLoading: false,
  error: null,
  tags: null,
};

export const tagsReducer = createReducer(
  initialTagsState,
  on(
    getTagsAction,
    (state): ITagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTagsSuccessAction,
    (state, action): ITagsState => ({
      ...state,
      isLoading: false,
      tags: action.tags,
    })
  ),
  on(
    getTagsFailureAction,
    (state, action): ITagsState => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(routerNavigationAction, (): ITagsState => initialTagsState)
);

export const tagsFeature = createFeature({
  name: 'tags',
  reducer: tagsReducer,
});
