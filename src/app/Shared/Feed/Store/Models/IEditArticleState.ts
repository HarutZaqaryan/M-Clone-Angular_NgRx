import { IArticle } from '../../../../Articles/Models/IArticle';
import { IBackEndErrors } from '../../Models/IBackEndErrors';

export interface IEditArticleState {
  isLoading: boolean;
  article: IArticle | null;
  isSubmiting: boolean;
  validationErrors: IBackEndErrors | null;
}
