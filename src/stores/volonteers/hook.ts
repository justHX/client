import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $volonteers, setList, setItem } from "./store";

import type { VolunteerDetail, VolunteerShort } from "./types";

export function useVolonteers() {
  const volonteers = useStore($volonteers);

  const fetchVolunteersList = useCallback(async () => {
    try {
      const result = await API.get<VolunteerShort[]>("/admin/volunteer/list");

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchVolunteerById = useCallback(async (id: string) => {
    try {
      const params = { params: { id } };
      const result = await API.get<VolunteerDetail>(
        "/admin/volunteer/info",
        params
      );

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateVolunteer = useCallback(
    async (volonteer: VolunteerDetail) => {
      try {
        await API.post("/admin/volunteer/update", volonteer);
        await fetchVolunteersList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchVolunteersList]
  );

  const deleteVolunteer = useCallback(
    async (id: string) => {
      try {
        await API.post(`/admin/volunteer/delete?id=${id}`);
        await fetchVolunteersList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchVolunteersList]
  );

  return {
    volonteers,
    fetchVolunteersList,
    fetchVolunteerById,
    updateVolunteer,
    deleteVolunteer,
  };
}
