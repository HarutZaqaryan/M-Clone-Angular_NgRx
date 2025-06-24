import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IArticle } from '../../../../Articles/Models/IArticle';

export const getArticleDetailsAction = createAction(
  ActionType.GET_ARTICLE_DETAILS,
  props<{ slug: string }>()
);

export const getArticleDetailsSuccess = createAction(
  ActionType.GET_ARTICLE_DETAILS_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleDetailsFailure = createAction(
  ActionType.GET_ARTICLE_DETAILS_FAILURE
);

export const deleteArticleDetailsAction = createAction(
  ActionType.DELETE_ARTICLE_DETAILS,
  props<{ slug: string }>()
);

export const deleteArticleDetailsSuccess = createAction(
  ActionType.DELETE_ARTICLE_DETAILS_SUCCESS
);

export const deleteArticleDetailsFailure = createAction(
  ActionType.DELETE_ARTICLE_DETAILS_FAILURE
);
