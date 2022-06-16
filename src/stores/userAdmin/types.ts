export interface UserAdmin {
  name: string,
  phone: string,
  street: string,
  house: string
}

export interface UserAdminAll extends UserAdmin{
  id: string,
  isCreate: boolean,
  age: number,
  district: number,
  flat: string
}