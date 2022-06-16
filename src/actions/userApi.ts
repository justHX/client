import {API} from "../API";

export const loginAdmin = (email: any, password: any) => {
    return API.post("/Login", {email, password});
};

export const loginImpov = (email: any, password: any) => {
    return API.post("/User/Login", {email, password});
};

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
        password
    });
};

export const registerVol = (
    region: any,
    city: any,
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
        region,
        city,
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
