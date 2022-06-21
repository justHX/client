import { createStore, createApi } from "effector";

import type {Claim, ClaimAll} from "./types";

type ClaimStore = {
  list: Claim[];
  item: Maybe<ClaimAll>;
};

const defaultState: ClaimStore = { list: [], item: null };

export const $claim = createStore(defaultState);

export const { setList, setItem } = createApi($claim, {
  setList: (state, value: Claim[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<ClaimAll>) => ({ ...state, item: value }),
});
