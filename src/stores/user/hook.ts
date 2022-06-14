import { useStore } from "effector-react";
import { useCallback } from "react";

import { API } from "../../API";

import { $user, setUserAuth } from "./store";

export function useUser() {
  const user = useStore($user);

  const authUser = useCallback(async (email: string, pass: string) => {
    try {
      await API.post("/Login", { email, pass });
      setUserAuth(true);
    } catch (e) {}
  }, []);

  const logout = useCallback(() => {
    setUserAuth(false);
  }, []);

  return { user, authUser, logout };
}
