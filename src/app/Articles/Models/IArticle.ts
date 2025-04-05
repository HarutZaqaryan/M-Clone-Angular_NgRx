import { IProfile } from '../../Shared/Feed/Models/IProfile';

export interface IArticle {
  author: IProfile;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}
