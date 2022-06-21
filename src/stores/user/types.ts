export interface IUser {
    idUser: string;
    isAuth: boolean;
    role: Maybe<UserRole>;
}

export interface UserId {
    id: string
}

export enum UserRole {
    ADMIN,
    USER,
}


