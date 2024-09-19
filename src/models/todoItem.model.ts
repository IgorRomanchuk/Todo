import { Moment } from "moment"

export interface TodoModel {
  value: string
  date: Moment,
  status: string,
  id: string
}