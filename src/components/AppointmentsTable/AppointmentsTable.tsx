import moment, { Moment } from "moment";
import { AppointmentModel } from "../../models/appointment.model";
import { useEffect, useMemo, useState } from "react";
import AppointmentsService from "../../service/appointments.service";
import { getAppointmentsTableConfiguration } from "../../utils/getCalendarAppointments";
import SwitchWeek from "../SwitchWeek";
import { ContainerStyle, SwitchWeekContainerStyle, TableStyle } from "./styles";
import { TableBodyModel } from "../../utils/getCalendarAppointments";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { dateTypes } from "../../constants/dateTypes";

type Props = {
  date: Moment | string;
  setDate: (e: string | Moment) => void;
};

export const AppointmentsTable = ({ date, setDate }: Props) => {
  const [appointments, setAppointments] = useState<
    [string, AppointmentModel[] | undefined][]
  >([]);
  const [tableHead, setTableHead] = useState<{ date: string }[]>([]);
  const [tableBody, setTableBody] = useState<TableBodyModel[]>([]);

  const getAppointments = async (date: string, period: string = "month") => {
    try {
      const data = await AppointmentsService.getAppointments({
        date,
        period,
      });

      setAppointments(
        Object.entries(
          Object.groupBy(data, ({ date }: AppointmentModel) => date)
        ).reverse()
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const formattedDate = useMemo(() => moment(date).format("YYYY-MM"), [date])

  useEffect(() => {
    getAppointments(moment().format(dateTypes.date));
  }, [formattedDate]);

  useEffect(() => {
    const { tableBody, tableHead } = getAppointmentsTableConfiguration(
      moment(date),
      moment(date).week(),
      appointments
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
