import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IArticleResponse } from '../../Models/IArticleResponse';
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
