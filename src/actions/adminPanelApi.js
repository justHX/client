import {$host} from "./indexRepos";


export const adminList = async () => {

    const response = await $host.get('/List')
    return response
}

export const adminInfoById = async () => {

    const response = await $host.get('/InfoById',{ params: { userId:'' } })
    return response
}

export const adminCreateOrUpdate = async (
    id,
    email,
    fullName,
    password
) => {

    const response = await $host.post('/CreateOrUpdate', {id, email, fullName, password})
    return response
}

export const adminDelete = async () => {

    const response = await $host.delete('/Delete')
    return response
}

export const adminVolonteerList = async () => {

    const response = await $host.get('/Admin/Volonteer/List')
    return response
}

export const adminVolonteerInfo = async () => {

    const response = await $host.get('/Admin/Volonteer/Info')
    return response
}

export const adminVolonteerUpdate = async (
    id,
    isCreate,
    name,
    phone,
    chatId,
    gender,
    employedDate
) => {

    const response = await $host.post('/Admin/Volonteer/Update',
        {id, isCreate, name, phone, chatId, gender, employedDate})
    return response
}

export const adminVolonteerDelete = async () => {

    const response = await $host.delete('/Admin/Volonteer/Delete')
    return response
}

export const adminFeedback = async () => {

    const response = await $host.get('/Admin/Feedback')
    return response
}

export const adminFeedbackWidthId = async (id) => {

    const response = await $host.get('/Admin/Feedback/' + id)
    return response
}

export const adminFeedbackSendAnswerId = async (id) => {

    const response = await $host.post('/Admin/Feedback/SendAnswer/' + id, {text:''})
    return response
}

export const adminSettingsGet = async () => {

    const response = await $host.get('/Admin/Settings')
    return response
}

export const adminSettingsGetWidthId = async (id) => {

    const response = await $host.get('/Admin/Settings' + id)
    return response
}

export const adminSettingsPost = async (
    id,
    name,
    value
    ) => {

    const response = await $host.post('/Admin/Settings', {id, name, value})
    return response
}

export const adminSettingsDelete = async (id) => {

    const response = await $host.delete('/Admin/Settings' + id)
    return response
}

export const adminTelegramCommandsAll = async () => {

    const response = await $host.get('/Admin/Telegram/Commands/GetAll')
    return response
}

export const adminTelegramCommandsWidthId = async (id) => {

    const response = await $host.get('/Admin/Telegram/Commands/' + id)
    return response
}

export const adminTelegramCommandsPut= async (
    id,
    description,
    isActive
) => {

    const response = await $host.put('/Admin/Telegram/Commands/', {id, description, isActive})
    return response
}

