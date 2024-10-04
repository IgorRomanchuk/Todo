/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../utils/api";
import AuthService from "./auth.service";
import {
  createAppointmentPayload,
  getAppointmentPayload,
} from "../models/appointment.model";

class AppointmentsService {
  endpoint: string = "appointments";
  token: string | null = AuthService.getToken();

  getAppointments = async (params: getAppointmentPayload) =>
    (
      await axios.get(`${BASE_URL}${this.endpoint}`, {
        params,
        headers: { Authorization: `Bearer ${this.token}` },
      })
    ).data;

  createAppointments = async (body: createAppointmentPayload) =>
    (
      await axios.post(`${BASE_URL}${this.endpoint}`, body, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
    ).data;
}

export default new AppointmentsService();
