import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IFeedResponse } from '../../Models/IFeed';

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{ url: string }>()
);
export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{ feed: IFeedResponse }>()
);
export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE);
