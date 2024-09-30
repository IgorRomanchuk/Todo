import { Moment } from "moment";

export interface TodoModel {
  title: string;
  description?: string;
  date: Moment;
  status: string;
  id: string;
}

export interface TodosModel {
  id: number;
  todos: TodoModel[]
}
