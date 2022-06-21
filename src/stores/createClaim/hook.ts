import {useCallback} from "react";
import {useStore} from "effector-react";

import {API} from "API";

import {$createClaim} from "./store";

import {CreateTaskInfo} from "./types";

export function useCreateClaim() {
    const createClaim = useStore($createClaim);


    const createClaimInfo = useCallback(
        async (createTaskInfo: CreateTaskInfo) => {
            try {
                await API.post("/User/CreateTaskInfo", createTaskInfo);

            } catch (e) {
                console.error(e);
            }
        },
        []
    );


    return {
        createClaim,
        createClaimInfo
    };
}
