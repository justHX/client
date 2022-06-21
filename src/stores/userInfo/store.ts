import { createStore, createApi } from "effector";

import type { UserInfo } from "./types";

type UserInfoState = {
  item: Maybe<UserInfo>;
};

const defaultState: UserInfoState = { item: null };

export const $userInfo = createStore(defaultState);

export const { setItem } = createApi($userInfo, {
  setItem: (state, value: Maybe<UserInfo>) => ({ ...state, item: value }),
});
