import { IBackEndErrors } from '../../Models/IBackEndErrors';
import { ICurrentUser } from '../../Models/ICurrentUser';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackEndErrors | null;
}
