import {createApi, createStore} from "effector";

import type {UserAdmin, UserAdminAll} from "./types";

type UserAdminStore = {
  list: UserAdmin[];
  item: Maybe<UserAdmin>;
  userAdminAll: Maybe<UserAdminAll>;
};

const defaultState: UserAdminStore = { list: [], item: null , userAdminAll: null};

export const $userAdmin = createStore(defaultState);

export const { setList, setItem , setUserAdminAll} = createApi($userAdmin, {
  setList: (state, value: UserAdmin[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<UserAdmin>) => ({ ...state, item: value }),
  setUserAdminAll: (state, value: Maybe<UserAdminAll>) => ({ ...state, userAdminAll: value }),
});
