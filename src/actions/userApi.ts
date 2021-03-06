import { API } from "../API";

export const registerImpov = (
  name: any,
  age: any,
  phone: any,
  district: any,
  street: any,
  house: any,
  flat: any,
  login: any,
  password: any
) => {
  return API.post("/User/Register", {
    name,
    age,
    phone,
    district,
    street,
    house,
    flat,
    login,
    password,
  });
};

export const registerVol = (
  district: any,
  street: any,
  house: any,
  flat: any,
  name: any,
  age: any,
  expirience: any,
  phone: any
) => {
  return API.post("/Volunteer/Register", {
    district,
    street,
    house,
    flat,
    name,
    age,
    expirience,
    phone,
  });
};
