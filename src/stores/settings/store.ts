import { createStore, createApi } from "effector";

import type { Settings } from "./types";

type SettingsStore = {
  list: Settings[];
  item: Maybe<Settings>;
};

const defaultState: SettingsStore = { list: [], item: null };

export const $settings = createStore(defaultState);

export const { setList, setItem } = createApi($settings, {
  setList: (state, value: Settings[]) => ({ ...state, list: value }),
  setItem: (state, value: Settings) => ({ ...state, item: value }),
});
