/* eslint-disable import/no-anonymous-default-export */
import { api } from "../utils/api";
import {
  createAppointmentPayload,
  getAppointmentPayload,
} from "../models/appointment.model";

class AppointmentsService {
  endpoint: string = "appointments";

  getAppointments = async (params: getAppointmentPayload) =>
    (
      await api.get(`${this.endpoint}`, {
        params,
      })
    ).data;

  createAppointments = async (body: createAppointmentPayload) =>
    (await api.post(`${this.endpoint}`, body)).data;
}

export default new AppointmentsService();
