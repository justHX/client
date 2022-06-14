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

export const { setList, setItem, resetItem } = createApi($impoverishedHistory, {
  setList: (
    state: ImpoverishedHistory,
    value: ImpoverishedHistoryListItem[]
  ) => ({
    ...state,
    list: value,
  }),
  setItem: (
    state: ImpoverishedHistory,
    value: Maybe<ImpoverishedHistoryFullItem>
  ) => ({ ...state, item: value }),
  resetItem: (state: ImpoverishedHistory) => ({ ...state, item: null }),
});
