import {createApi, createStore} from "effector";

import type {CreateTaskInfo} from "./types";

type CreateClaimStore = {
  item: Maybe<CreateTaskInfo>;
};

const defaultState: CreateClaimStore = { item: null };

export const $createClaim = createStore(defaultState);

export const { setItem } = createApi($createClaim, {

  setItem: (state, value: Maybe<CreateTaskInfo>) => ({...state, item: value,}),
});
