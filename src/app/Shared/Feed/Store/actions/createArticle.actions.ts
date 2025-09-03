import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IArticleInput } from '../../Models/IArticleInput';
import { IArticle } from '../../../../Articles/Models/IArticle';
import { IBackEndErrors } from '../../Models/IBackEndErrors';

export const createArticleAction = createAction(
  ActionType.CREATE_ARTICLE,
  props<{ articleInput: Partial<IArticleInput> }>()
);

export const createArticleSuccessAction = createAction(
  ActionType.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const createArticleFailureAction = createAction(
  ActionType.CREATE_ARTICLE_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
