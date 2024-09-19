/* eslint-disable import/no-anonymous-default-export */
import { TodoModel } from "../models/todoItem.model";

class TodosService {
  todosArr: TodoModel[] = JSON.parse(localStorage.getItem("todoList") || "[]") || [];

  getTodos = () => this.todosArr
}

export default new TodosService();
