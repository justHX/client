import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $volonteers, setList, setItem } from "./store";

import type { VolunteerDetail, VolunteerShort } from "./types";

export function useVolonteers() {
  const volonteers = useStore($volonteers);

  const fetchVolunteersList = useCallback(async () => {
    try {
      const result = await API.get<VolunteerShort[]>("/Admin/Volunteer/List");

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchVolunteerById = useCallback(async (id: string) => {
    try {
      const params = { params: { id } };
      const result = await API.get<VolunteerDetail>(
        "/Admin/Volunteer/Info",
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
        await API.post("/Admin/Volunteer/Update", volonteer);
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
        const params = { params: { id } };
        await API.post("/Admin/Volunteer/Delete", params);
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
