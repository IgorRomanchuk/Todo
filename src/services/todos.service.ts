import { TodosModel } from "../models/todos.model";

class TodosService {
  getTodos = () => JSON.parse(localStorage.getItem("todoList") || "[]") || [];

  setTodos = (arr: TodosModel[]) =>
    new Promise<void>((resolve) => {
      localStorage.setItem("todoList", JSON.stringify(arr));
      resolve();
    });
}

export default new TodosService();
