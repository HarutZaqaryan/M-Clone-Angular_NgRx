import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { ITagsResponse } from '../../Models/ITags';

export const getTagsAction = createAction(
  ActionType.GET_TAGS,
  props<{ url: string }>()
);
export const getTagsSuccessAction = createAction(
  ActionType.GET_TAGS_SUCCESS,
  props<{ tags: ITagsResponse }>()
);
export const getTagsFailureAction = createAction(
  ActionType.GET_TAGS_FAILURE,
  props<{ error: string }>()
);
