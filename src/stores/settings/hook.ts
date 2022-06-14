import { useCallback } from "react";
import { useStore } from "effector-react";

import {} from "API";

import { $settings, setItem, setList } from "./store";

export function useSettings() {
  const settings = useStore($settings);

  const fetchSettingsList = useCallback(() => {}, []);

  return { settings };
}
