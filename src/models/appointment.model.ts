export interface AppointmentModel {
  date: string;
  id: number;
  tmpUser: any;
  user: {
    id: number;
    telegram_id: string;
    username: string;
  };
}

export interface GetAppointmentPayload {
  date: string | null;
  period: string;
}

export interface CreateAppointmentPayload {
  date: string;
  user_id: number;
  tmpUser?: any;
}
