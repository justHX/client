import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $claim, setItem, setList } from "./store";

import type {Claim, ClaimAll} from "./types";

export function useClaim() {
  const claim = useStore($claim);

  const fetchClaimList = useCallback(async (id: string) => {
    try {
      const result = await API.get<Claim[]>(`/User/Tasks?id=${id}`);

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);


  const fetchClaimsById = useCallback(async (id: string) => {
    try {
      const result = await API.get<ClaimAll>(`/User/Task?id=${id}`);

      setItem(result?.data || null);
    } catch (e) {
      console.error(e);
    }
  }, []);


  return {
    claim,
    fetchClaimList,
    fetchClaimsById
  };
}
