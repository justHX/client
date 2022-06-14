import { useStore } from "effector-react";
import { useCallback } from "react";

import { API } from "API";

import { $user, setUserAuth } from "./store";

export function useUser() {
  const user = useStore($user);

  const authUser = useCallback(async (email: string, pass: string) => {
    try {
      await API.post("/Login", { email, pass });
      setUserAuth(true);
      localStorage.set("isAuth", "true");
    } catch (e) {
      throw e;
    }
  }, []);

  const logout = useCallback(() => {
    setUserAuth(false);
    localStorage.removeItem("isAuth");
  }, []);

  return { user, authUser, logout };
}
