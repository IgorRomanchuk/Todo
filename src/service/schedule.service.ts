/* eslint-disable import/no-anonymous-default-export */
import { api } from "../utils/api";
import { Moment } from "moment";

class ScheduleService {
  endpoint: string = "schedule";

  getAvailableDays = async () =>
    (await api.get(`${this.endpoint}/available/days`)).data;

  getAvailableHours = async (params: { date: string | Moment }) =>
    (await api.get(`${this.endpoint}/available/hours`, { params })).data;
}

export default new ScheduleService();
