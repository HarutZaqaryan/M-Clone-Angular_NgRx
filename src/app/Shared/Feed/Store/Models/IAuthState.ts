import { IBackEndErrors } from '../../Models/IBackEndErrors';
import { ICurrentUser } from '../../Models/ICurrentUser';

export interface IAuthState {
  currentUser: ICurrentUser | null;
  isLoading: boolean;
  isLoggedIn: boolean | null;
  isSubmitting: boolean;
  validationErrors: IBackEndErrors | null;
}
