import { api } from "../utils/api";
import {
  AppointmentModel,
  CreateAppointmentPayload,
  GetAppointmentPayload,
} from "../models/appointment.model";
import { CreateAppointmentRequest } from "../features/CreateAppointment/models/create-appointment.model";

class AppointmentsService {
  endpoint: string = "appointments";

  getAppointments = async (params: GetAppointmentPayload) =>
    (
      await api.get<AppointmentModel[]>(`${this.endpoint}`, {
        params,
      })
    ).data;

  createAppointments = async (body: CreateAppointmentPayload) =>
    (await api.post<CreateAppointmentRequest>(`${this.endpoint}`, body)).data;

  deleteAppointment = async (id: number) => await api.delete(`${this.endpoint}/${id}`);
}

export default new AppointmentsService();
