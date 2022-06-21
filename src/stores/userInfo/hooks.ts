import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $userInfo, setItem } from "./store";
import { UserInfo } from "./types";

export function useUserInfo() {
  const userInfo = useStore($userInfo);

  const fetchUserInfoById = useCallback(async (id: string) => {
    try {
      const params = { params: { id } };
      const result = await API.get<UserInfo>("/User/Info", params);

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateUserInfo = useCallback(async (userInfo: UserInfo) => {
    try {
      await API.post("/User/Update", userInfo);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { userInfo, fetchUserInfoById, updateUserInfo };
}
