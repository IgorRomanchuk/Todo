import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";
import deleteIcon from "../../assets/img/delete.svg";
import editIcon from "../../assets/img/edit.svg";
import saveIcon from "../../assets/img/save.svg";
import { CardStyle, ContainerStyle, IconStyle, ImageContainerStyle, SaveIconStyle } from "./styles";

type Props = {
  todo: TodoModel;
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
};

const TodoList = ({ todo, setTodoList }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
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
        <CardStyle>
          <textarea
            autoFocus={edit ? true : false}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <SaveIconStyle
            onClick={handleSetTodoList}
            height={25}
            width={25}
            src={saveIcon}
            alt="save"
          />
        </CardStyle>
      ) : (
        <CardStyle>
          <p>{todo.value}</p>
          <ImageContainerStyle>
            <select
              value={selectValue}
              onChange={(e) => handleChangeStatus(e.target.value)}
            >
              <option value="todo">Todo</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </select>
            <IconStyle
              onClick={handleDeleteTodo}
              height={25}
              width={25}
              src={deleteIcon}
              alt="delete"
            />
            <IconStyle
              onClick={handleClickEdit}
              height={25}
              width={25}
              src={editIcon}
              alt="edit"
            />
          </ImageContainerStyle>
        </CardStyle>
      )}
    </ContainerStyle>
  );
};

export default TodoList;
