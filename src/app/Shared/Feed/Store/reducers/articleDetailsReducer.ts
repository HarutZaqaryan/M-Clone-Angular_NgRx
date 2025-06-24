import { createFeature, createReducer, on } from '@ngrx/store';
import { IArticleDetailsState } from '../Models/IArticleDetailsState';
import {
  getArticleDetailsAction,
  getArticleDetailsFailure,
  getArticleDetailsSuccess,
} from '../actions/getArticleDetails.actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialArticleDetailsState: IArticleDetailsState = {
  isLoading: false,
  error: null,
  data: null,
};

export const articleDetailsReducer = createReducer(
  initialArticleDetailsState,
  on(
    getArticleDetailsAction,
    (state): IArticleDetailsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleDetailsSuccess,
    (state, action): IArticleDetailsState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleDetailsFailure,
    (state): IArticleDetailsState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    routerNavigationAction,
    (): IArticleDetailsState => initialArticleDetailsState
  )
);

export const articleDetailsFeature = createFeature({
  name: 'articleDetails',
  reducer: articleDetailsReducer,
});
