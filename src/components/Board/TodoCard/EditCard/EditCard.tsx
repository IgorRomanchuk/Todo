import { TodoModel } from "../../../../models/todoItem.model";
import deleteIcon from "../../../../assets/img/delete.svg";
import editIcon from "../../../../assets/img/edit.svg";
import { useState } from "react";
import {
  IconStyle,
  ImageContainerStyle,
  TextDescriptionStyle,
  TextTitleStyle,
} from "./styles";
import TodoService from "../../../../service/todos.service";

type Props = {
  todo: TodoModel;
  setTodoList: (e: TodoModel[]) => void;
  setEdit: (e: boolean) => void;
};

const EditCard = ({ setTodoList, todo, setEdit }: Props) => {
  const [selectValue, setSelectValue] = useState(todo.status);
  const handleDeleteTodo = async () => {
    const arr = await TodoService.getTodos();
    await TodoService.setTodos(
      arr.filter((item: TodoModel) => todo.id !== item.id)
    );
    setTodoList(arr.filter((item: TodoModel) => todo.id !== item.id));
  };

  const handleClickEdit = () => {
    setEdit(true);
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
  return (
    <>
      <TextTitleStyle>{todo.title}</TextTitleStyle>
      {todo.description && (
        <TextDescriptionStyle>{todo?.description}</TextDescriptionStyle>
      )}

      <ImageContainerStyle>
        <select
          value={selectValue}
          onChange={(e) => handleChangeStatus(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="in progress">In progress</option>
          <option value="done">Done</option>
        </select>
        <IconStyle onClick={handleDeleteTodo} src={deleteIcon} alt="delete" />
        <IconStyle onClick={handleClickEdit} src={editIcon} alt="edit" />
      </ImageContainerStyle>
    </>
  );
};

export default EditCard;
