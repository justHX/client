import { createStore, createApi } from "effector";

import type { IUser, UserRole } from "./types";

const defaultState: IUser = {
  isAuth: Boolean(localStorage.getItem("isAuth")),
  role: Number(localStorage.getItem("role")),
};

export const $user = createStore<IUser>(defaultState);

export const { setUserAuth, setUserRole } = createApi($user, {
  setUserAuth: (state, value: boolean) => ({ ...state, isAuth: value }),
  setUserRole: (state, value: Maybe<UserRole>) => ({ ...state, role: value }),
});
