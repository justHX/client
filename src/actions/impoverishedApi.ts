import { API } from "../API";

export const impovCreateTaskInfo = (
  taskCompletionDate: any,
  startHour: any,
  endHour: any,
  description: any,
  [{ title, type }]: any
) => {
  return API.post("/User/CreateTaskInfo", {
    taskCompletionDate,
    startHour,
    endHour,
    description,
    subTasks: [{ title, type }],
  });
};

export const impovTasks = () => {
  return API.get("/User/Tasks");
};
