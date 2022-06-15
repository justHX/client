import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $settings, setItem, setList } from "./store";

import type { Settings } from "./types";

export function useSettings() {
  const settings = useStore($settings);

  const fetchSettingsList = useCallback(async () => {
    try {
      const result = await API.get<Settings[]>("/Admin/Settings");

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchSettingsById = useCallback(async (id: string) => {
    try {
      const result = await API.get<Settings>(`/Admin/Settings/${id}`);

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const changeSettings = useCallback(
    async (settings: Settings) => {
      try {
        await API.post("/Admin/Settings", settings);
        await fetchSettingsList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchSettingsList]
  );

  const deleteSettingsById = useCallback(
    async (id: string) => {
      try {
        await API.delete(`/Admin/Settings/${id}`);
        await fetchSettingsList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchSettingsList]
  );

  return {
    settings,
    fetchSettingsList,
    fetchSettingsById,
    deleteSettingsById,
    changeSettings,
  };
}
