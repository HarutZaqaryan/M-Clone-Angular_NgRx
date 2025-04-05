import { createFeature, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../Models/IFeedState';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/getFeed.actions';

const initialFeedState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialFeedState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  )
);

export const feedFeature = createFeature({
  name: 'feed',
  reducer: feedReducer,
});
