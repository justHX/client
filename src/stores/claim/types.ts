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
  volunteerName: string,
  volunteerAge: string,
  volunteerPhone: string,
  isReady: boolean,
  inProcess: boolean,
  startHour: string,
  endHour: string,
  description: string,
  subTasks: [{
    title: string,
    type: number,
    taskId: string
  }
  ]

}
