import moment from "moment";
import { dateTypes } from "../../constants";
import { useState } from "react";

const TodoList = ({
  item,
  todoList,
  setValue,
  setTodoList,
  value,
  i,
}: any) => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      {edit ? (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <p>{item.value}</p>
      )}
      <button
        onClick={() => {
          const index = todoList.findIndex(
            (value: any) => value.value === item.value
          );
          setTodoList(todoList.filter((item: any, i: number) => i !== index));
        }}
      >
        delete
      </button>
      {!edit ? (
        <>
          <button
            onClick={() => {
              setEdit(true);
              setValue(item.value)
            }}
          >
            edit
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            const index = todoList.findIndex(
              (value: any) => value.value === item.value
            );
            const a = todoList.map((item: any, i: number) => {
              if (i === index) {
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
    </>
  );
};

export default TodoList;
