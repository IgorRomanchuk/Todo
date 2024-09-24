import { TodoModel } from "../../../models/todoItem.model";
import TodoCard from "../TodoCard/TodoCard";
import { ContainerStyle } from "./styles";
import DropArea from "../DropArea/DropArea";
import TodosService from "../../../service/todos.service";

type Props = {
  todoList: TodoModel[] | [];
  setTodoList: (e: TodoModel[]) => void;
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
  const onDrop = async (status: string) => {
    if (draggableCard == null || draggableCard === undefined) return;
    const index = TodosService.getTodos().findIndex(
      (item: TodoModel) => item.id === draggableCard
    );
    const arr = TodosService.getTodos().map((item: TodoModel, i: number) => {
      if (i === index) {
        return {
          ...item,
          status,
        };
      } else {
        return item;
      }
    });
    await TodosService.setTodos(arr)
    setTodoList(arr);

  };
  return (
    <>
      <DropArea onDrop={() => onDrop(status)} />
      {todoList &&
        todoList.map((item: TodoModel) => (
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
