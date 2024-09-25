import { Moment } from "moment";

export interface IForm {
  title: string,
  description: string,
  status: string,
  date: Moment | string,
  id: string,
}