import moment from "moment";
import { Moment } from "moment";
import { AppointmentModel } from "../models/appointment.model";

export type TableBody = (AppointmentModel | { date: null })[];

export function getAppointmentsTableConfiguration(
  date: Moment,
  weekNumber: number,
  appointments: AppointmentModel[]
) {
  let tableHead: {date: string}[] = [];
  let tableBody: TableBody[] = [];
  for (let i = 0; i <= 6; i++) {
    const day = moment(date).week(weekNumber).day(i);
    tableHead.push({ date: day.format("YYYY-MM-DD") });
  }

  for (let i = 0; i < 24; i++) {
    tableBody[i] = [];
    for (let j = 0; j < tableHead.length; j++) {
      const appoinment = appointments.find(
        (item) =>
          moment(item.date).format("YYYY-MM-DD") ===
            moment(tableHead[j].date).format("YYYY-MM-DD") &&
          +moment(item.date).format("H") === i
      );
      if (appoinment) {
        tableBody[i].push(appoinment);
      } else {
        tableBody[i].push({ date: null });
      }
    }
  }
  return { tableHead, tableBody };
}
