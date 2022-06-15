import { createStore, createApi } from "effector";

import type { FeedbackListItem, FeedbackDetailItem } from "./types";

type FeedbackStore = {
  list: FeedbackListItem[];
  item: Maybe<FeedbackDetailItem>;
};

const defaultState: FeedbackStore = { list: [], item: null };

export const $feedback = createStore(defaultState);

export const { setList, setItem } = createApi($feedback, {
  setList: (state, value: FeedbackListItem[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<FeedbackDetailItem>) => ({
    ...state,
    item: value,
  }),
});
