import { createFeature, createReducer, on } from '@ngrx/store';
import { IEditArticleState } from '../Models/IEditArticleState';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from '../actions/editArticle.actions';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.actions';

const initialState: IEditArticleState = {
  isLoading: false,
  article: null,
  isSubmiting: false,
  validationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    editArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
      isSubmiting: true,
    })
  ),
  on(
    editArticleSuccessAction,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article,
      isSubmiting: false,
    })
  ),
  on(
    editArticleFailureAction,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: null,
      isSubmiting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, actiion): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: actiion.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state, actiion): IEditArticleState => ({
      ...state,
      isLoading: false,
      validationErrors: actiion.errors,
    })
  )
);

export const editArticleFeature = createFeature({
  name: 'editArticle',
  reducer: editArticleReducer,
});
