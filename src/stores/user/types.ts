export interface IUser {
  isAuth: boolean;
  role: Maybe<UserRole>;
}

export enum UserRole {
  ADMIN,
  USER,
}
