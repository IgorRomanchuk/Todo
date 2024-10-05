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

export interface getAppointmentPayload {
  date: string | null;
  period: string;
}

export interface createAppointmentPayload {
  date: string;
  user_id: number;
  tmpUser?: any;
}
