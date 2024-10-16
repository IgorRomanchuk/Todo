import { TodoModel } from "../../../../../models/todos.model";
import saveIcon from "../../../../../assets/img/save.svg";
import { SaveIconStyle, TextAreaStyle } from "./styles";
import TodosService from "../../../../../services/todos.service";
import { useState } from "react";
import { useAuth } from "../../../../../utils/hooks/useAuth";

type Props = {
  todo: TodoModel;
  setTodoList: (e: TodoModel[]) => void;
  setEdit: (e: boolean) => void;
  edit: boolean;
};

export const SaveCard = ({ setTodoList, todo, setEdit, edit }: Props) => {
  const { user } = useAuth();
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string | undefined>(
    todo.description
  );

  const handleSetTodoList = async () => {
    const arr = await TodosService.getTodos();
    const indexTodos = arr.findIndex(
      (item: { id: number; todos: TodoModel[] }) => item.id === user.id
    );
    arr[indexTodos].todos = arr[indexTodos].todos.map((item: TodoModel) => {
      if (todo.id === item.id) {
        return {
          ...item,
          title,
          description,
        };
      } else {
        return item;
      }
    });
    setTodoList(arr[indexTodos].todos);
    await TodosService.setTodos(arr);
    setEdit(false);
  };
  return (
    <>
      <TextAreaStyle
        autoFocus={edit ? true : false}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextAreaStyle
        autoFocus={edit ? true : false}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <SaveIconStyle onClick={handleSetTodoList} src={saveIcon} alt="save" />
    </>
  );
};
