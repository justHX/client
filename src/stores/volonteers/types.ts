interface VolonteerBase {
  id: string;
  name: string;
  phone: string;
  gender: string;
  employedDate: string;
}

export interface VolonteerShort extends VolonteerBase {
  isRegister: boolean;
}

export interface VolonteerDetail extends VolonteerBase {
  chatId: string;
  isCreate: boolean;
}
