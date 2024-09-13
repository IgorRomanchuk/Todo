import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";
import { styled } from "styled-components";

const ContainerStyle = styled.div`
  height: 150px;
  font-size: 14px;
  text-align: left;
  padding: 5px;
`;

type Props = {
  todo: TodoModel;
  setValue: (e: string) => void;
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  value: string;
};

const TodoList = ({ todo, setValue, setTodoList, value }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState(todo.status);
  return (
    <ContainerStyle key={todo.id}>
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
          setTodoList(arr.filter((item: TodoModel) => todo.id !== item.id));
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
    </ContainerStyle>
  );
};

export default TodoList;
