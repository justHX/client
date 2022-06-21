export interface CreateTaskInfo {
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
}

