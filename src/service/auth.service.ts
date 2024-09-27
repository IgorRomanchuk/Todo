/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { AuthModel } from "../features/Registration/model/auth.model";

class AuthService {
  endpoint: string = "auth";

  register = async (params: AuthModel) =>
    axios.post(`${BASE_URL}${this.endpoint}/register`, params);

  signIn = async (params: AuthModel) =>
    axios.post(`${BASE_URL}${this.endpoint}/login`, params);

  profile = async (token: string | null) =>
    axios.get(`${BASE_URL}${this.endpoint}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

  getToken = () => localStorage.getItem("todo-token");

  removeToken = () => localStorage.removeItem("todo-token");

  setToken = (token: string) => localStorage.setItem("todo-token", token);
}

export default new AuthService();
