/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { Moment } from "moment";

class ScheduleService {
  endpoint: string = "schedule";

  getAvailableDays = async () =>
    (await axios.get(`${BASE_URL}${this.endpoint}/available/days`)).data;

  getAvailableHours = async (params: { date: string | Moment }) =>
    (await axios.get(`${BASE_URL}${this.endpoint}/available/hours`, { params }))
      .data;
}

export default new ScheduleService();
