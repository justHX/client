import { createStore, createApi } from "effector";

import type { Claim } from "./types";

type ClaimStore = {
  list: Claim[];
  item: Maybe<Claim>;
};

const defaultState: ClaimStore = { list: [], item: null };

export const $claim = createStore(defaultState);

export const { setList, setItem } = createApi($claim, {
  setList: (state, value: Claim[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<Claim>) => ({ ...state, item: value }),
});
