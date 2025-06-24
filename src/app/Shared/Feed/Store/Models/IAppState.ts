import { IArticleDetailsState } from './IArticleDetailsState';
import { IAuthState } from './IAuthState';
import { IFeedState } from './IFeedState';
import { ITagsState } from './ITagsState';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  tags: ITagsState;
  articleDetails: IArticleDetailsState;
}
