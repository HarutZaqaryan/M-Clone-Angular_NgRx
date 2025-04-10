import { ITagsResponse } from '../../Models/ITags';

export interface ITagsState {
  isLoading: boolean;
  error: string | null;
  tags: ITagsResponse | null;
}
