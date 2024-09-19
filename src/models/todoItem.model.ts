import { Moment } from "moment"

export interface TodoModel {
  value: string
  date: Date | Moment,
  status: string,
  id: string
}