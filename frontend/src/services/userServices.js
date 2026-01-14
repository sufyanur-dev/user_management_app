import { api } from "../api/axios";
import { endpoints } from "../api/endpoints";

export const getAllUser = async () => {
  const response = await api.get(`${endpoints.getAllUser}`);
  console.log("responseRole", response);
  return response.data;
};

export const createUser = async (payload) => {
  const response = await api.post(endpoints.createUser, payload);
  return response.data;
};

export const deleteUser = async (payload) => {
  const response = await api.delete(`${endpoints.deleteUser}/${payload}`);
  return response.data;
};
