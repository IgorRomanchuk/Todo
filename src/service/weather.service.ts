/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import moment from "moment";
import { dateTypes } from "../constants";

const BASE_URL = 'http://api.weatherapi.com/v1';

const key = 'a46222fbd0194c21bd6183145241109'

class WeatherService {
  endpoint: string = "/history.json";

  getWeather = (year: number, month: number, period: number[]) =>
    axios.get(`${BASE_URL}${this.endpoint}`, {
      params: {
        key,
        q: "Гродно",
        dt: moment(new Date(year, month - 1, period[0])).format(dateTypes.date),
      },
    });
}

export default new WeatherService();
