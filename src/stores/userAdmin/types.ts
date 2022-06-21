export interface UserAdmin {
  id: string
  name: string,
  phone: string,
  street: string,
  house: string
}

export interface UserAdminAll extends UserAdmin{
  isCreate: boolean,
  age: number,
  district: number,
  flat: string
}