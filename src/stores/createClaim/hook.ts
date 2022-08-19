import {useCallback} from "react";
import {useStore} from "effector-react";

import {API} from "API";

import {$createClaim} from "./store";

export function useCreateClaim() {
    const createClaim = useStore($createClaim);


    const createClaimInfo = useCallback(
        async (
            userId: string,
            taskCompletionDate: string,
            startHour: number,
            endHour: number,
            description: string,
            foodstuff: string,
            medicine: string,
            essentials: string
        ) => {
            try {
                const answer = await API.post<string>(`/user/createTaskInfo?id=${userId}`, {
                    taskCompletionDate: taskCompletionDate,
                    startHour: startHour,
                    endHour: endHour,
                    description: description,
                    foodstuff: foodstuff,
                    medicine: medicine,
                    essentials: essentials
                });

                alert(`Запомните, пожалуйста, данный код:  ${answer?.data}. Он потребуется волонтёру для того, чтобы успешно завершить заявку.`)
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
