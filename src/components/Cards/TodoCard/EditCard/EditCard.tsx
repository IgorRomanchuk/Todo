import { TodoModel, TodosModel } from "../../../../models/todos.model";
import deleteIcon from "../../../../assets/img/delete.svg";
import editIcon from "../../../../assets/img/edit.svg";
import { useState } from "react";
import {
  IconStyle,
  ImageContainerStyle,
  TextDescriptionStyle,
  TextTitleStyle,
} from "./styles";
import TodosService from "../../../../service/todos.service";
import { useAuth } from "../../../../utils/hooks/useAuth";

type Props = {
  todo: TodoModel;
  setTodoList: (e: TodoModel[]) => void;
  setEdit: (e: boolean) => void;
};

const EditCard = ({ setTodoList, todo, setEdit }: Props) => {
  const { user } = useAuth();
  const [selectValue, setSelectValue] = useState(todo.status);

  const handleDeleteTodo = async () => {
    const arr = await TodosService.getTodos();
    const indexTodos = arr.findIndex((item: TodosModel) => item.id === user.id);
    arr[indexTodos].todos = arr[indexTodos].todos.filter(
      (item: TodoModel) => item.id !== todo.id
    );
    setTodoList(arr[indexTodos].todos);
    await TodosService.setTodos(arr);
  };

  const handleClickEdit = () => {
    setEdit(true);
  };

  const handleChangeStatus = async (status: string) => {
    setSelectValue(status);
    const arr = await TodosService.getTodos();
    const indexTodos = arr.findIndex((item: TodosModel) => item.id === user.id);
    arr[indexTodos].todos = arr[indexTodos].todos.map((item: TodoModel) => {
      if (todo.id === item.id) {
        return {
          ...item,
          status,
        };
      } else {
        return item;
      }
    });
    setTodoList(arr[indexTodos].todos);
    await TodosService.setTodos(arr);
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
