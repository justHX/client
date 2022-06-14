import {useStore} from "effector-react";
import {useCallback} from "react";

import {API} from "API";

import {$user, setUserAuth, setUserRole} from "./store";
import {UserRole} from "./types";

export function useUser() {
  const user = useStore($user);

  const authAdmin = useCallback(async (email: string, password: string) => {
    try {
      await API.post("/Login", { email, password });
      setUserAuth(true);
      setUserRole(UserRole.ADMIN)
      localStorage.setItem("isAuth", "true");
    } catch (e) {
      throw e;
    }
  }, []);

  const authUser = useCallback(async (email: string, password: string) => {
    try {
      await API.post("/User/Login", { email, password });
      setUserAuth(true);
      setUserRole(UserRole.USER)
      localStorage.setItem("isAuth", "true");
    } catch (e) {
      throw e;
    }
  }, []);

  const logout = useCallback(() => {
    setUserAuth(false);
    setUserRole(null)
    localStorage.removeItem("isAuth");
  }, []);

  return { user, authUser, logout, authAdmin };
}
