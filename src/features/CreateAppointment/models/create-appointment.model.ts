import { Moment } from "moment";

export interface CreateAppointmentModel {
  date: string | Moment;
  hour: string;
  user_id: string;
}

export interface CreateAppointmentRequest {
  date: string;
  user_id: number;
}
