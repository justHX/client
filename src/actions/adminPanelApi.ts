import { API } from "../API";

export const adminList = () => {
  return API.get("/List");
};

export const adminInfoById = () => {
  return API.get("/InfoById", { params: { userId: "" } });
};

export const adminCreateOrUpdate = (
  id: any,
  email: any,
  fullName: any,
  password: any
) => {
  return API.post("/CreateOrUpdate", { id, email, fullName, password });
};

export const adminDelete = () => {
  return API.delete("/Delete");
};

export const adminVolonteerList = () => {
  return API.get("/Admin/Volonteer/List");
};

export const adminVolonteerInfo = () => {
  return API.get("/Admin/Volonteer/Info");
};

export const adminVolonteerUpdate = (
  id: any,
  isCreate: any,
  name: any,
  phone: any,
  chatId: any,
  gender: any,
  employedDate: any
) => {
  return API.post("/Admin/Volonteer/Update", {
    id,
    isCreate,
    name,
    phone,
    chatId,
    gender,
    employedDate,
  });
};

export const adminVolonteerDelete = () => {
  return API.delete("/Admin/Volonteer/Delete");
};

export const adminFeedback = () => {
  return API.get("/Admin/Feedback");
};

export const adminFeedbackWidthId = (id: any) => {
  return API.get(`/Admin/Feedback/${id}`);
};

export const adminFeedbackSendAnswerId = (id: any) => {
  return API.post(`/Admin/Feedback/SendAnswer/${id}`, { text: "" });
};

export const adminSettingsGet = () => {
  return API.get("/Admin/Settings");
};

export const adminSettingsGetWidthId = (id: any) => {
  return API.get(`/Admin/Settings/${id}`);
};

export const adminSettingsPost = (id: any, name: any, value: any) => {
  return API.post("/Admin/Settings", { id, name, value });
};

export const adminSettingsDelete = (id: any) => {
  return API.delete(`/Admin/Settings/${id}`);
};

export const adminTelegramCommandsAll = () => {
  return API.get("/Admin/Telegram/Commands/GetAll");
};

export const adminTelegramCommandsWidthId = (id: any) => {
  return API.get(`/Admin/Telegram/Commands/${id}`);
};

export const adminTelegramCommandsPut = (
  id: any,
  description: any,
  isActive: any
) => {
  return API.put("/Admin/Telegram/Commands/", { id, description, isActive });
};
