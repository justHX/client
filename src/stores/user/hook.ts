import { useStore } from "effector-react";
import { useCallback } from "react";

import { API } from "API";

import {$user, setIdUser, setUserAuth, setUserRole} from "./store";
import {UserId, UserRole} from "./types";

export function useUser() {
  const user = useStore($user);

  const authAdmin = useCallback(async (email: string, password: string) => {
    try {
      await API.post("/Login", { email, password });
      setUserAuth(true);
      setUserRole(UserRole.ADMIN);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("role", UserRole.ADMIN.toString());
    } catch (e) {
      throw e;
    }
  }, []);

  const authUser = useCallback(async (email: string, password: string) => {
    try {
       const userId = await API.post<UserId>("/User/Login", { email, password });
      setUserAuth(true);
      setUserRole(UserRole.USER);
      setIdUser(userId?.data.id || "")
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("role", UserRole.USER.toString());
    } catch (e) {
      throw e;
    }
  }, []);

  const logout = useCallback(() => {
    setUserAuth(false);
    setUserRole(null);
    setIdUser("");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("role");
  }, []);

  return { user, authUser, logout, authAdmin };
}
