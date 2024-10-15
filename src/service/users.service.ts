/* eslint-disable import/no-anonymous-default-export */
import { UsersModel } from "../models/users.model";
import { api } from "../utils/api";

class UsersService {
  endpoint: string = "users";

  getUsers = async () => (await api.get<UsersModel[]>(`${this.endpoint}`)).data;
}

export default new UsersService();
