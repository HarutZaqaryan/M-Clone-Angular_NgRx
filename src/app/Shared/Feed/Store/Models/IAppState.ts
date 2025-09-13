import { IArticleDetailsState } from './IArticleDetailsState';
import { IAuthState } from './IAuthState';
import { ICreateArticleState } from './ICreateArticleState';
import { IEditArticleState } from './IEditArticleState';
import { IFeedState } from './IFeedState';
import { ITagsState } from './ITagsState';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  tags: ITagsState;
  articleDetails: IArticleDetailsState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState
}
