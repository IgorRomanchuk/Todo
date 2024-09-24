import { TodoModel } from "../../../../models/todoItem.model";
import saveIcon from "../../../../assets/img/save.svg";
import { SaveIconStyle, TextAreaStyle } from "./styles";
import TodoService from "../../../../service/todos.service";
import { useState } from "react";

type Props = {
  todo: TodoModel;
  setTodoList: (e: TodoModel[]) => void;
  setEdit: (e: boolean) => void;
  edit: boolean;
};

const SaveCard = ({ setTodoList, todo, setEdit, edit }: Props) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string | undefined>(
    todo.description
  );

  const handleSetTodoList = async () => {
    const arr = TodoService.getTodos().map((item: TodoModel) => {
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
    setTodoList(arr);
    await TodoService.setTodos(arr);
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

export default SaveCard;
