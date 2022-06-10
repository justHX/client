import {$host} from "./indexRepos";


export const loginAdmin = async (email, password) => {

    const response = await $host.post('/Login', {email, password})
    return response
}

export const loginImpov = async (email, password) => {

    const response = await $host.post('/User/Login', {email, password})
    return response
}

export const registerImpov = async (
    name,
    age,
    phone,
    district,
    street,
    house,
    flat
) => {

    const response = await $host.post('/User/Register', {name, age, phone, district, street, house, flat})
    return response
}

export const registerVol = async (
    region,
    city,
    district,
    street,
    house,
    flat,
    name,
    age,
    expirience,
    phone
) => {

    const response = await $host.post('/Volunteer/Register', {
        region, city, district, street, house, flat,
        name, age, expirience, phone
    })
    return response
}