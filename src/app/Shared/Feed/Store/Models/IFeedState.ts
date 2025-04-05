import { IFeedResponse } from '../../Models/IFeed';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IFeedResponse | null;
}
