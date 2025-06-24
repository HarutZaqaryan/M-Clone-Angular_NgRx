import { IArticle } from '../../../../Articles/Models/IArticle';

export interface IArticleDetailsState {
  isLoading: boolean;
  error: string | null;
  data: IArticle | null;
}
