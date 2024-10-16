import { useState } from "react";
import { TodoModel } from "../../../../models/todos.model";
import { CardStyle, ContainerStyle } from "./styles";
import SaveCard from "./SaveCard";
import EditCard from "./EditCard";

type Props = {
  todo: TodoModel;
  setTodoList: (e: TodoModel[]) => void;
  setDraggableCard: (e: string | null) => void;
};

export const TodoCard = ({ todo, setTodoList, setDraggableCard }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <ContainerStyle
      key={todo.id}
      draggable
      onDragStart={() => setDraggableCard(todo.id)}
      onDragEnd={() => setDraggableCard(null)}
    >
      {edit ? (
        <CardStyle>
          <SaveCard
            edit={edit}
            setEdit={setEdit}
            setTodoList={setTodoList}
            todo={todo}
          />
        </CardStyle>
      ) : (
        <CardStyle>
          <EditCard setEdit={setEdit} setTodoList={setTodoList} todo={todo} />
        </CardStyle>
      )}
    </ContainerStyle>
  );
};
