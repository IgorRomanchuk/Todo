import { TodoModel } from "../../../models/todoItem.model";
import TodoCard from "../TodoCard/TodoCard";
import { ContainerStyle } from "./styles";
import DropArea from "../DropArea/DropArea";

type Props = {
  todoList: TodoModel[];
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  status: string;
  draggableCard: string | null;
  setDraggableCard: (e: string | null) => void;
};
const Column = ({
  todoList,
  setTodoList,
  status,
  draggableCard,
  setDraggableCard,
}: Props) => {
  const onDrop = (status: string) => {
    if (draggableCard == null || draggableCard === undefined) return;
    const arr = JSON.parse(localStorage.getItem("todoList") || "[]");
    const index = arr.findIndex((item: TodoModel) => item.id === draggableCard);
    setTodoList(
      arr.map((item: TodoModel, i: number) => {
        if (i === index) {
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
      <DropArea onDrop={() => onDrop(status)} />
      {todoList.map((item: TodoModel) => (
        <ContainerStyle key={item.id}>
          <>
            <TodoCard
              setDraggableCard={setDraggableCard}
              todo={item}
              setTodoList={setTodoList}
            />
            <DropArea onDrop={() => onDrop(status)} />
          </>
        </ContainerStyle>
      ))}
    </>
  );
};

export default Column;
