export interface Claim {
  id: string,
  name: string,
  taskCompletionDate: string,
  street: string,
  house: string,
}

export interface ClaimAll extends Claim{

  age: number,
  phone: string,
  flat: string,
  volonteerName: string,
  volonteerAge: string,
  volonteerPhone: string,
  isReady: boolean,
  inProcess: boolean,
  startHour: number,
  endHour: number,
  description: string,
  subTasks: [{
    title: string,
    type: number,
    taskId: string
  }
  ]

}
