import { IBackEndErrors } from "../../Models/IBackEndErrors";

export interface ICreateArticleState {
  isSubmiting: boolean;
  validationErrors: IBackEndErrors | null;
}