import { createFeature, createReducer, on } from '@ngrx/store';
import { ICreateArticleState } from '../Models/ICreateArticleState';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/createArticle.actions';

const initialState: ICreateArticleState = {
  isSubmiting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmiting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmiting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
    })
  )
);

export const createArticleFeature = createFeature({
  name: 'createArticle',
  reducer: createArticleReducer
});
