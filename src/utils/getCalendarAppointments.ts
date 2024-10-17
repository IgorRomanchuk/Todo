import moment from "moment";
import { Moment } from "moment";
import { AppointmentModel } from "../models/appointment.model";
import { dateTypes } from "../constants/dateTypes";

export type TableBodyModel = Array<null | AppointmentModel[]>;

export function getAppointmentsTableConfiguration(
  date: Moment,
  weekNumber: number,
  appointments: [string, AppointmentModel[] | undefined][]
) {
  const tableHead: { date: string }[] = [];
  const tableBody: TableBodyModel[] = [];
  for (let i = 0; i <= 6; i++) {
    const day = moment(date).week(weekNumber).day(i);
    tableHead.push({ date: day.format(dateTypes.date) });
  }

  for (let i = 0; i < 24; i++) {
    tableBody[i] = [];
    for (let j = 0; j < tableHead.length; j++) {
      tableBody[i].push(null);
    }
  }

  appointments.forEach((item) => {
    const day = moment(item[0]).day();
    const time = +moment(item[0]).format("H");
    if (tableHead[day].date === moment(item[0]).format(dateTypes.date)) {
      tableBody[time][day] = item[1]!;
    }
  });

  return { tableHead, tableBody };
}
