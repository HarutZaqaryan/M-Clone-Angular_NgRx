import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionTypes';
import { IArticleInput } from '../../Models/IArticleInput';
import { IArticle } from '../../../../Articles/Models/IArticle';
import { IBackEndErrors } from '../../Models/IBackEndErrors';

export const editArticleAction = createAction(
  ActionType.EDIT_ARTICLE,
  props<{ slug: string; articleInput: Partial<IArticleInput> }>()
);

export const editArticleSuccessAction = createAction(
  ActionType.EDIT_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const editArticleFailureAction = createAction(
  ActionType.EDIT_ARTICLE_FAILURE,
  props<{ errors: IBackEndErrors }>()
);
