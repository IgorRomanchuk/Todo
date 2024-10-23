import moment, { Moment } from "moment";
import { AppointmentModel } from "src/models/appointment.model";
import { useEffect, useMemo, useState } from "react";
import AppointmentsService from "src/services/appointments.service";
import UsersService from "src/services/users.service";
import { getAppointmentsTableConfiguration } from "src/utils/getCalendarAppointments";
import SwitchWeek from "./SwitchWeek";
import { ContainerStyle, SwitchWeekContainerStyle, TableStyle } from "./styles";
import { TableBodyModel } from "src/utils/getCalendarAppointments";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useAuth } from "src/utils/hooks/useAuth";
import { dateTypes } from "src/constants/dateTypes";
import ScheduleUtilsService from "../../services/schedule-utils.service";

type Props = {
  date: Moment | string;
  setDate: (e: string | Moment) => void;
};

export const AppointmentsTable = ({ date, setDate }: Props) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<[string, AppointmentModel[] | undefined][]>([]);
  const [tableHead, setTableHead] = useState<{ date: string }[]>([]);
  const [tableBody, setTableBody] = useState<TableBodyModel[]>([]);

  const getAppointments = async (period: string = "month") => {
    try {
      let data = [];
      if (user.role === 1) {
        data = await AppointmentsService.getAppointments({
          date: moment(date).startOf("month").format(dateTypes.date),
          period,
        });
      } else {
        data = await UsersService.getAppointments(user.id);
      }

      setAppointments(
        Object.entries(
          ScheduleUtilsService.myGroupBy(data, ({ date }: AppointmentModel) => date),
        ).reverse(),
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const formattedDate = useMemo(() => moment(date).format("YYYY-MM"), [date]);

  useEffect(() => {
    getAppointments();
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
        <TableBody tableBody={tableBody} getAppointments={getAppointments} />
      </TableStyle>
    </ContainerStyle>
  );
};
