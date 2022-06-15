import { createStore, createApi } from "effector";

import type { Command } from "./types";

type TelegramState = {
  list: Command[];
  item: Maybe<Command>;
};

const defaultState: TelegramState = { list: [], item: null };

export const $telegram = createStore(defaultState);

export const { setList, setItem } = createApi($telegram, {
  setList: (state, value: Command[]) => ({ ...state, list: value }),
  setItem: (state, value: Maybe<Command>) => ({ ...state, item: value }),
});
