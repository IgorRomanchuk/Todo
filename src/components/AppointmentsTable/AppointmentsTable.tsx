import moment, { Moment } from "moment";
import { AppointmentModel } from "../../models/appointment.model";
import { useEffect, useRef, useState } from "react";
import AppointmentsService from "../../service/appointments.service";
import {
  getAppointmentsTableConfiguration,
  TableBody,
} from "../../utils/getCalendarAppointments";
import SwitchWeek from "../SwitchWeek";
import {
  ContainerStyle,
  SwitchWeekContainerStyle,
  TableBodyStyle,
  TableHeadStyle,
  TableStyle,
  TdStyle,
  ThStyle,
} from "./styles";

type Props = {
  date: Moment | string;
  setDate: (e: string | Moment) => void;
};

export const AppointmentsTable = ({ date, setDate }: Props) => {
  const [appointments, setAppointments] = useState<AppointmentModel[]>([]);
  const [tableHead, setTableHead] = useState<{ date: string }[]>([]);
  const [tableBody, setTableBody] = useState<TableBody[]>([]);

  const tableBodyRef = useRef<HTMLTableSectionElement>(null);

  const getAppointments = async (
    date: string | null = null,
    period: string = "month"
  ) => {
    const data: AppointmentModel[] = await AppointmentsService.getAppointments({
      date,
      period,
    });
    setAppointments(data.sort((a, b) => +moment(a.date) - +moment(b.date)));
  };

  useEffect(() => {
    const currentHour = moment().hour();
    const currentRow = tableBodyRef.current?.querySelector(
      `tr:nth-child(${currentHour + 1})`
    );
    if (currentRow) {
      currentRow.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [tableBody]);

  useEffect(() => {
    getAppointments();
  }, []);

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
        <TableHeadStyle>
          <tr>
            <ThStyle></ThStyle>
            {tableHead.map((day, i) => (
              <ThStyle key={i}>
                <p>{moment(day.date, "YYYY-MM-DD").format("dd")}</p>
                <p>{moment(day.date, "YYYY-MM-DD").format("D")}</p>
              </ThStyle>
            ))}
          </tr>
        </TableHeadStyle>
        <TableBodyStyle ref={tableBodyRef}>
          {tableBody.map((item, i: number) => (
            <tr key={i}>
              <ThStyle>{i}:00</ThStyle>
              {item.map((day, i) => (
                <TdStyle key={i}>
                  {day.date && <p>Appointment fro {day?.user.username}</p>}
                  {day.date && (
                    <p>{moment(day?.date).format("DD-MM-YYYY HH:mm")}</p>
                  )}
                </TdStyle>
              ))}
            </tr>
          ))}
        </TableBodyStyle>
      </TableStyle>
    </ContainerStyle>
  );
};
