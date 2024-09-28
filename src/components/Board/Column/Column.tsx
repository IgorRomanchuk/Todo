import { TodoModel } from "../../../models/todoItem.model";
import TodoCard from "../TodoCard/TodoCard";
import { ContainerStyle } from "./styles";
import DropArea from "../DropArea/DropArea";
import TodosService from "../../../service/todos.service";
import { useAuth } from "../../../utils/hooks/useAuth";

type Props = {
  todoList: TodoModel[];
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
  const { user } = useAuth();

  const onDrop = async (status: string) => {
    if (draggableCard == null || draggableCard === undefined) return;
    const arr = await TodosService.getTodos();
    const indexTodos = arr.findIndex((item: any) => item.id === user.id);
    const index = arr[indexTodos].todos.findIndex(
      (item: TodoModel) => item.id === draggableCard
    );
    arr[indexTodos].todos = arr[indexTodos].todos.map(
      (item: TodoModel, i: number) => {
        if (i === index) {
          return {
            ...item,
            status,
          };
        } else {
          return item;
        }
      }
    );
    setTodoList(arr[indexTodos].todos);
    await TodosService.setTodos(arr);
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
