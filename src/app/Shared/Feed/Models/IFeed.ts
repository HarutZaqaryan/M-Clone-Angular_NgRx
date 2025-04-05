import { IArticle } from '../../../Articles/Models/IArticle';

export interface IFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}
