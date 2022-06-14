import { useStore } from "effector-react";
import { useCallback } from "react";

import { API } from "API";

import { $impoverishedHistory, setItem, setList } from "./store";
import type {
  ImpoverishedHistoryListItem,
  ImpoverishedHistoryFullItem,
} from "./types";

export function useImpoverishedHistory() {
  const impoverishedHistory = useStore($impoverishedHistory);

  const fetchList = useCallback(async () => {
    try {
      const result = await API.get<ImpoverishedHistoryListItem[]>(
        "/User/Tasks"
      );

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchItem = useCallback(async (userId: string) => {
    try {
      const params = { params: { userId } };
      const result = await API.get<ImpoverishedHistoryFullItem>(
        "/User/Task",
        params
      );

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { impoverishedHistory, fetchList, fetchItem };
}
