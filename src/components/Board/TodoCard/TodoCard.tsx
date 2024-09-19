import { useState } from "react";
import { TodoModel } from "../../../models/todoItem.model";
import { CardStyle, ContainerStyle } from "./styles";
import EditCard from "./EditCard/EditCard";
import SaveCard from "./SaveCard/SaveCard";

type Props = {
  todo: TodoModel;
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  setDraggableCard: (e: string | null) => void;
};

const TodoList = ({ todo, setTodoList, setDraggableCard }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <ContainerStyle
      key={todo.id}
      draggable
      onDragStart={() => setDraggableCard(todo.id)}
      onDragEnd={() => setDraggableCard(null)}
    >
      {edit ? (
        <CardStyle>
          <EditCard
            edit={edit}
            setEdit={setEdit}
            setTodoList={setTodoList}
            setValue={setValue}
            todo={todo}
            value={value}
          />
        </CardStyle>
      ) : (
        <CardStyle>
          <SaveCard
            setEdit={setEdit}
            setTodoList={setTodoList}
            setValue={setValue}
            todo={todo}
          />
        </CardStyle>
      )}
    </ContainerStyle>
  );
};

export default TodoList;
