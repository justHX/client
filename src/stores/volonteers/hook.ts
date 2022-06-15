import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $volonteers, setList, setItem } from "./store";

import type { VolonteerDetail, VolonteerShort } from "./types";

export function useVolonteers() {
  const volonteers = useStore($volonteers);

  const fetchVolonteersList = useCallback(async () => {
    try {
      const result = await API.get<VolonteerShort[]>("/Admin/Volonteer/List");

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchVolonteerById = useCallback(async (id: string) => {
    try {
      const params = { params: { id } };
      const result = await API.get<VolonteerDetail>(
        "/Admin/Volonteer/Info",
        params
      );

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateVolonteer = useCallback(
    async (volonteer: VolonteerDetail) => {
      try {
        await API.post("/Admin/Volonteer/Update", volonteer);
        await fetchVolonteersList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchVolonteersList]
  );

  const deleteVolonteer = useCallback(
    async (id: string) => {
      try {
        const params = { params: { id } };
        await API.post("/Admin/Volonteer/Update", params);
        await fetchVolonteersList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchVolonteersList]
  );

  return {
    volonteers,
    fetchVolonteersList,
    fetchVolonteerById,
    updateVolonteer,
    deleteVolonteer,
  };
}
