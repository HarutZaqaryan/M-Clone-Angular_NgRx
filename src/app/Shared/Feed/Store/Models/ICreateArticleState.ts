import { IBackEndErrors } from "../../Models/IBackEndErrors";

export interface ICreateArticleState {
  isSubmitting: boolean;
  validationErrors: IBackEndErrors | null;
}