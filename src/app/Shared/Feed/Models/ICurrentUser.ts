export interface ICurrentUser {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  bio: string | null;
  image: string | null;
  token: string;
}
