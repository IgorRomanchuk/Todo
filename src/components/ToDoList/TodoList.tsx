import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";
import { ContainerStyle } from "./styles";

type Props = {
  todo: TodoModel;
  setValue: (e: string) => void;
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  value: string;
};

const TodoList = ({ todo, setValue, setTodoList, value }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState(todo.status);

  const handleSetTodoList = () => {
    const arr = JSON.parse(localStorage.getItem("todoList") || "[]");

    setTodoList(
      arr.map((item: TodoModel) => {
        if (todo.id === item.id) {
          return {
            ...item,
            value,
          };
        } else {
          return item;
        }
      })
    );
    setEdit(false);
  };

  const handleChangeStatus = (status: string) => {
    const arr = JSON.parse(localStorage.getItem("todoList") || "[]");
    setSelectValue(status);
    setTodoList(
      arr.map((item: TodoModel) => {
        if (todo.id === item.id) {
          return {
            ...item,
            status,
          };
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteTodo = () => {
    const arr = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodoList(arr.filter((item: TodoModel) => todo.id !== item.id));
  };

  const handleClickEdit = () => {
    setEdit(true);
    setValue(todo.value);
  };

  return (
    <ContainerStyle key={todo.id}>
      {edit ? (
        <div
          style={{
            padding: "8px 12px",
            minHeight: "64px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={handleSetTodoList}>save</button>
        </div>
      ) : (
        <div
          style={{
            padding: "8px 12px",
            minHeight: "64px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <p>{todo.value}</p>
          <div>
            <select
              value={selectValue}
              onChange={(e) => handleChangeStatus(e.target.value)}
            >
              <option value="todo">Todo</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </select>
            <button onClick={handleDeleteTodo}>delete</button>
            <button onClick={handleClickEdit}>edit</button>
          </div>
        </div>
      )}
    </ContainerStyle>
  );
};

export default TodoList;
