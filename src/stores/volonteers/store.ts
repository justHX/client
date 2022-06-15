import { createStore, createApi } from "effector";

import type { VolunteerShort, VolunteerDetail } from "./types";

type VolonteersStore = {
  list: VolunteerShort[];
  item: Maybe<VolunteerDetail>;
};

const defaultState: VolonteersStore = { list: [], item: null };

export const $volonteers = createStore(defaultState);

export const { setList, setItem } = createApi($volonteers, {
  setList: (state, value: VolunteerShort[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<VolunteerDetail>) => ({
    ...state,
    item: value,
  }),
});
