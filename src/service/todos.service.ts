/* eslint-disable import/no-anonymous-default-export */
import { TodoModel } from "../models/todoItem.model";

class TodosService {

  getTodos = () => JSON.parse(localStorage.getItem("todoList") || "[]") || [];

  setTodos = (arr: TodoModel[]) =>
    new Promise<void>((resolve) => {
      localStorage.setItem("todoList", JSON.stringify(arr));
      resolve();
    });
}

export default new TodosService();
