export interface ImpoverishedHistoryListItem {
  id: string;
  name: string;
  taskCompletionDate: string;
  street: string;
  house: string;
}

export interface ImpoverishedHistoryFullItem
  extends ImpoverishedHistoryListItem {
  // нету айдишника
  age: number;
  flat: string;
  volunteerName: string;
  volunteerAge: number;
  volunteerPhone: string;
  isReady: boolean;
  isProcess: boolean;
  startHour: number;
  endHour: number;
  description: string;
  subTasks: SubTask[];
}

export interface SubTask {
  title: string;
  type: number;
  taskId: string;
}
