import { AvailableHoursResponse } from "../components/Form/ControllerHour/models/available-hours.model";
import { api } from "../utils/api";
import { Moment } from "moment";

class ScheduleService {
  endpoint: string = "schedule";

  getAvailableDays = async () =>
    (await api.get<string[]>(`${this.endpoint}/available/days`)).data;

  getAvailableHours = async (params: { date: string | Moment }) =>
    (
      await api.get<AvailableHoursResponse>(`${this.endpoint}/available/hours`, {
        params,
      })
    ).data;
}

export default new ScheduleService();
