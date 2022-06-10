import {$host} from "./indexRepos";

export const impovCreateTaskInfo = async (
    taskCompletionDate,
    startHour,
    endHour,
    description,
     [{title,type}]
) => {

    const response = await $host.post('/User/CreateTaskInfo', {    taskCompletionDate,
        startHour,
        endHour,
        description,
        subTasks:[{title,type}]
    })
    return response
}

export const impovTasks = async () => {

    const response = await $host.get('/User/Tasks')
    return response
}