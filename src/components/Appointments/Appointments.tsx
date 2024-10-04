import moment from "moment";
import { AppointmentModel } from "../../models/appointment.model";
import { CardStyle } from "./styles";
import { useEffect, useState } from "react";
import AppointmentsService from "../../service/appointments.service";

export const Appointments = () => {
  const [appointments, setAppointments] = useState<AppointmentModel[]>([]);
  const getAppointments = async (
    date: string | null = null,
    period: string = "month"
  ) => {
    const data = await AppointmentsService.getAppointments({
      date,
      period,
    });
    setAppointments(data);
  };

  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <>
      {!!appointments.length &&
        appointments.map((item) => (
          <CardStyle key={item.id}>
            <p>Appointment</p>
            <p>{moment(item.date).format("DD-MM-YYYY HH:mm")}</p>
          </CardStyle>
        ))}
    </>
  );
};
