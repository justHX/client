import {createApi, createStore} from "effector";

import type {UserAdmin} from "./types";

type UserAdminStore = {
  list: UserAdmin[];
  item: Maybe<UserAdmin>;
};

const defaultState: UserAdminStore = { list: [], item: null };

export const $userAdmin = createStore(defaultState);

export const { setList, setItem } = createApi($userAdmin, {
  setList: (state, value: UserAdmin[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<UserAdmin>) => ({ ...state, item: value }),
});
