import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $telegram, setItem, setList } from "./store";

import type { Command } from "./types";

export function useTelegram() {
  const telegram = useStore($telegram);

  const fetchCommandsList = useCallback(async () => {
    try {
      const result = await API.get<Command[]>(
        "/Admin/Telegram/Commands/GetAll"
      );

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchCommandsById = useCallback(async (id: string) => {
    try {
      const result = await API.get<Command>(`/Admin/Telegram/Commands/${id}`);

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateCommands = useCallback(
    async (command: Command) => {
      try {
        await API.post("/Admin/Telegram/Commands/Update", command);
        await fetchCommandsList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchCommandsList]
  );

  const deleteCommandsById = useCallback(
    async (id: string) => {
      try {
        await API.delete(`/Admin/Settings/${id}`);
        await fetchCommandsList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchCommandsList]
  );

  return {
    telegram,
    fetchCommandsList,
    fetchCommandsById,
    deleteCommandsById,
    updateCommands,
  };
}
