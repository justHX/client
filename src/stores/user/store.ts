import { createStore, createApi } from "effector";

import type { IUser } from "./types";

const defaultState: IUser = { isAuth: false };

export const $user = createStore<IUser>(defaultState);

export const { setUserAuth } = createApi($user, {
  setUserAuth: (state, value: boolean) => ({ ...state, isAuth: value }),
});
