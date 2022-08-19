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
  return API.post("/user/register", {
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
  age: number,
  experience: number,
  phone: any,
  gender: any
) => {
  return API.post("/volunteer/register", {
    district,
    street,
    house,
    flat,
    name,
    age,
    experience,
    phone,
    gender
  });
};
