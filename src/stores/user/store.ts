import { createStore, createApi } from "effector";

import type { IUser, UserRole } from "./types";

const defaultState: IUser = {
  idUser: String(localStorage.getItem("userId")),
  isAuth: Boolean(localStorage.getItem("isAuth")),
  role: Number(localStorage.getItem("role")),
};

export const $user = createStore<IUser>(defaultState);

export const { setUserAuth, setUserRole, setIdUser } = createApi($user, {
  setIdUser: (state, value: string) =>({ ...state, idUser: value }),
  setUserAuth: (state, value: boolean) => ({ ...state, isAuth: value }),
  setUserRole: (state, value: Maybe<UserRole>) => ({ ...state, role: value }),
});
