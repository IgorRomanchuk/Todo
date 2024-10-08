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
  ActiveDayStyle,
  ContainerStyle,
  SwitchWeekContainerStyle,
  TableBodyStyle,
  TableHeadStyle,
  TableStyle,
  TdStyle,
  ThStyle,
} from "./styles";
import { dateTypes } from "../../constants/dateTypes";

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
    ) as HTMLElement;

    if (currentRow && tableBodyRef.current) {
      const tbody = tableBodyRef.current;
      const rowPosition = currentRow.offsetTop;
      tbody.scrollTo({
        top: rowPosition - tbody.clientHeight / 2,
        behavior: "smooth",
      });
      currentRow.style.borderBottom = "3px solid red";
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
                <p>{moment(day.date, dateTypes.date).format("dd")}</p>
                <ActiveDayStyle
                  $active={
                    moment(day.date).format(dateTypes.date) ===
                    moment().format(dateTypes.date)
                  }
                >
                  {moment(day.date, dateTypes.date).format("D")}
                </ActiveDayStyle>
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
