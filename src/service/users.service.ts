/* eslint-disable import/no-anonymous-default-export */
import { api } from "../utils/api";

class UsersService {
  endpoint: string = "users";

  getUsers = async () => (await api.get(`${this.endpoint}`)).data;
}

export default new UsersService();
