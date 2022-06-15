import { createStore, createApi } from "effector";

import type { VolonteerShort, VolonteerDetail } from "./types";

type VolonteersStore = {
  list: VolonteerShort[];
  item: Maybe<VolonteerDetail>;
};

const defaultState: VolonteersStore = { list: [], item: null };

export const $volonteers = createStore(defaultState);

export const { setList, setItem } = createApi($volonteers, {
  setList: (state, value: VolonteerShort[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<VolonteerDetail>) => ({
    ...state,
    item: value,
  }),
});
