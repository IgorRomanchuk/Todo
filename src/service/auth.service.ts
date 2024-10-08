/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { AuthModel } from "../models/auth.model";
import { AuthResponse } from "../models/auth.model";

class AuthService {
  endpoint: string = "auth";

  signUp = async (params: AuthModel) =>
    (
      await axios.post<AuthResponse>(
        `${BASE_URL}${this.endpoint}/register`,
        params
      )
    ).data;

  signIn = async (params: AuthModel) =>
    (
      await axios.post<AuthResponse>(
        `${BASE_URL}${this.endpoint}/login`,
        params
      )
    ).data;

  profile = async (token: string | null) =>
    (
      await axios.get(`${BASE_URL}${this.endpoint}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;

  getToken = () => localStorage.getItem("todo-token");

  removeToken = () => localStorage.removeItem("todo-token");

  setToken = (token: string) => localStorage.setItem("todo-token", token);
}

export default new AuthService();
