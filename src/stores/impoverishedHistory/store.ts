import { createStore, createApi } from "effector";

import type {
  ImpoverishedHistoryListItem,
  ImpoverishedHistoryFullItem,
} from "./types";

type ImpoverishedHistory = {
  list: ImpoverishedHistoryListItem[];
  item: Maybe<ImpoverishedHistoryFullItem>;
};

const defaultState: ImpoverishedHistory = { list: [], item: null };

export const $impoverishedHistory =
  createStore<ImpoverishedHistory>(defaultState);

export const { setList, setItem } = createApi($impoverishedHistory, {
  setList: (state, value: ImpoverishedHistoryListItem[]) => ({
    ...state,
    list: value,
  }),
  setItem: (state, value: Maybe<ImpoverishedHistoryFullItem>) => ({
    ...state,
    item: value,
  }),
});
