import { IAuthState } from './IAuthState';
import { IFeedState } from './IFeedState';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
