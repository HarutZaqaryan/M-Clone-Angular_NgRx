import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IArticle } from '../../../../Articles/Models/IArticle';
import { IBackEndErrors } from '../../Models/IBackEndErrors';

export const getArticleAction = createAction(
  ActionType.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionType.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleFailureAction = createAction(
  ActionType.GET_ARTICLE_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
