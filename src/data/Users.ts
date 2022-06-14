import { makeAutoObservable } from "mobx";

export interface User {
  isAuth: boolean;
}

interface IUsers {
  get isAuth(): boolean;
  set isAuth(isAuth: boolean);
  get user(): User;
  set user(user: User);
}

const userDefault: User = {
  isAuth: false,
};

export default class Users implements IUsers {
  private _isAuth: boolean = false;
  private _user = userDefault;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuth() {
    return this._isAuth;
  }

  set isAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }
}
