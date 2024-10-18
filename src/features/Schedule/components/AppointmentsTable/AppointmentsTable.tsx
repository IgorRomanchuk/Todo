import moment, { Moment } from "moment";
import { AppointmentModel } from "../../../../models/appointment.model";
import { useEffect, useMemo, useState } from "react";
import AppointmentsService from "../../../../services/appointments.service";
import UsersService from "../../../../services/users.service";
import { getAppointmentsTableConfiguration } from "../../../../utils/getCalendarAppointments";
import SwitchWeek from "./SwitchWeek";
import { ContainerStyle, SwitchWeekContainerStyle, TableStyle } from "./styles";
import { TableBodyModel } from "../../../../utils/getCalendarAppointments";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useAuth } from "../../../../utils/hooks/useAuth";
import { dateTypes } from "../../../../constants/dateTypes";

type Props = {
  date: Moment | string;
  setDate: (e: string | Moment) => void;
};

export const AppointmentsTable = ({ date, setDate }: Props) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<[string, AppointmentModel[] | undefined][]>([]);
  const [tableHead, setTableHead] = useState<{ date: string }[]>([]);
  const [tableBody, setTableBody] = useState<TableBodyModel[]>([]);

  const getAppointments = async (date: string, period: string = "month") => {
    try {
      let data = []
      if (user.role === 1) {
        data = await AppointmentsService.getAppointments({
          date,
          period,
        });
      } else {
        data = await UsersService.getAppointments(user.id)
      }

      setAppointments(
        Object.entries(Object.groupBy(data, ({ date }: AppointmentModel) => date)).reverse(),
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const formattedDate = useMemo(() => moment(date).format("YYYY-MM"), [date]);

  useEffect(() => {
    getAppointments(moment().startOf("month").format(dateTypes.date));
  }, [formattedDate]);

  useEffect(() => {
    const { tableBody, tableHead } = getAppointmentsTableConfiguration(
      moment(date),
      moment(date).week(),
      appointments,
    );
    setTableHead(tableHead);
    setTableBody(tableBody);
  }, [date, appointments]);

  return (
    <ContainerStyle>
      <SwitchWeekContainerStyle>
        <SwitchWeek date={date} setDate={setDate} />
      </SwitchWeekContainerStyle>
      <TableStyle>
        <TableHead tableHead={tableHead} />
        <TableBody tableBody={tableBody} />
      </TableStyle>
    </ContainerStyle>
  );
};
