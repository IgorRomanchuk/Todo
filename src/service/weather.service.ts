/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import moment from "moment";
import { dateTypes } from "../constants/dateTypes";
import { WEATHER_BASE_URL } from "../utils/api";

const key = 'a46222fbd0194c21bd6183145241109'

class WeatherService {
  endpoint: string = "/history.json";

  getWeather = (date: string, period: number[]) =>
    axios.get(`${WEATHER_BASE_URL}${this.endpoint}`, {
      params: {
        key,
        q: "Гродно",
        dt: moment(`${date}-${period[0]}`, dateTypes.date).format(dateTypes.date),
      },
    });
}

export default new WeatherService();
