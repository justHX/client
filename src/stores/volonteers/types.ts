interface VolunteerBase {
  id: string;
  name: string;
  phone: string;
  gender: string;
  employedDate: string;
}

export interface VolunteerShort extends VolunteerBase {
  isRegister: boolean;
}

export interface VolunteerDetail extends VolunteerBase {
  chatId: string;
  isCreate: boolean;
}
