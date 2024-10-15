/* eslint-disable import/no-anonymous-default-export */
import { api } from "../utils/api";
import { AuthModel } from "../models/auth.model";
import { AuthResponse } from "../models/auth.model";

class AuthService {
  endpoint: string = "auth";

  signUp = async (params: AuthModel) =>
    (await api.post<AuthResponse>(`${this.endpoint}/register`, params)).data;

  signIn = async (params: AuthModel) =>
    (await api.post<AuthResponse>(`${this.endpoint}/login`, params)).data;

  profile = async () => (await api.get(`${this.endpoint}/profile`)).data;

  getToken = () => localStorage.getItem("todo-token");

  removeToken = () => localStorage.removeItem("todo-token");

  setToken = (token: string) => localStorage.setItem("todo-token", token);
}

export default new AuthService();
