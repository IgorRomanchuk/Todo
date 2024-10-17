import { UsersModel } from "../components/Form/ControllerUser/models/users.model";
import { AppointmentModel } from "../models/appointment.model";
import { api } from "../utils/api";

class UsersService {
  endpoint: string = "users";

  getUsers = async () => (await api.get<UsersModel[]>(`${this.endpoint}`)).data;

  getAppointments = async (id: number) => (await api.get<AppointmentModel[]>(`${this.endpoint}/${id}/appointments`)).data;
}

export default new UsersService();
