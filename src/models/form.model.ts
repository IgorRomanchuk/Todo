import { Moment } from "moment";

export interface CreateTodoModel {
  title: string,
  description: string,
  status: string,
  date: Moment | string,
  id: string,
}

export interface CreateAppointmentModel {
  date: string | Moment;
  hour: string;
  user_id: string;
}