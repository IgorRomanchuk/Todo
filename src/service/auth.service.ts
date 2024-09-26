/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { RegisterModel } from "../features/Registration/model/registrate.model";

class AuthService {
  endpoint: string = "auth";

  register = async (params: RegisterModel) =>
    axios.post(`${BASE_URL}${this.endpoint}/register`, params);

  signIn = async (params: RegisterModel) =>
    axios.post(`${BASE_URL}${this.endpoint}/login`, params);

  profile = async (token: string) =>
    axios.get(`${BASE_URL}${this.endpoint}/profile`, {
      headers: {"Authorization" : `Bearer ${token}`}
    });
}

export default new AuthService();
