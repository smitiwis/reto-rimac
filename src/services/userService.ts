import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces";

const BASE_URL = process.env.REACT_APP_API_URL;

export const getDataUser = async (
  userId: string
): Promise<AxiosResponse<User>> => {
  try {
    const response = await axios.get<User>(`${BASE_URL}/users/${userId}`);
    return response;
  } catch (error) {
    throw new Error("Error al obtener los datos del usuario");
  }
};
