import {useCallback} from "react";
import {useStore} from "effector-react";

import {API} from "API";

import {$createClaim} from "./store";

import {CreateTaskInfo} from "./types";

export function useCreateClaim() {
    const createClaim = useStore($createClaim);


    const createClaimInfo = useCallback(
        async (
            userId: string,
            taskCompletionDate: string,
            startHour: number,
            endHour: number,
            description: string,
            subTasks: [
                {
                    title: string,
                    type: number
                }
            ]
        ) => {
            try {
                await API.post(`/User/CreateTaskInfo?id=${userId}`, {
                    taskCompletionDate: taskCompletionDate,
                    startHour: startHour,
                    endHour: endHour,
                    description: description,
                    subTasks: subTasks
                });

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
