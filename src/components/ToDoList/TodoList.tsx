import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";

type Props = {
  todo: TodoModel;
  setValue: any;
  setTodoList: any;
  value: string;
};

const TodoList = ({
  todo,
  setValue,
  setTodoList,
  value,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState(todo.status);
  return (
    <div
      key={todo.id}
      style={{
        height: "150px",
        fontSize: "14px",
        textAlign: "left",
        padding: "5px",
      }}
    >
      {edit ? (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <>
          <p>{todo.value}</p>
          <select
            value={selectValue}
            onChange={(e) => {
              const arr = JSON.parse(localStorage.getItem("todoList") || "[]");
              setSelectValue(e.target.value);
              setTodoList(
                arr.map((item: TodoModel) => {
                  if (todo.id === item.id) {
                    return {
                      ...item,
                      status: e.target.value,
                    };
                  } else {
                    return item;
                  }
                })
              );
            }}
          >
            <option value="todo">Todo</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </>
      )}
      <button
        onClick={() => {
          const arr = JSON.parse(localStorage.getItem("todoList") || "[]");
          setTodoList(
            arr.filter((item: TodoModel,) => todo.id !== item.id)
          );
        }}
      >
        delete
      </button>

      {!edit ? (
        <>
          <button
            onClick={() => {
              setEdit(true);
              setValue(todo.value);
            }}
          >
            edit
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            const arr = JSON.parse(localStorage.getItem("todoList") || "[]");

            const a = arr.map((item: TodoModel) => {
              if (todo.id === item.id) {
                return {
                  ...item,
                  value,
                };
              } else {
                return item;
              }
            });
            setTodoList(a);
            setEdit(false);
          }}
        >
          save
        </button>
      )}
    </div>
  );
};

export default TodoList;
