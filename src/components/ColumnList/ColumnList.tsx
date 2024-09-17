import moment from "moment";
import { TodoModel } from "../../models/todoItem.model";
import TodoCard from "../TodoCard/TodoCard";
import { ContainerStyle } from "./styles";
import DropArea from "../DropArea/DropArea";

type Props = {
  todoList: TodoModel[];
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  year: number;
  month: number;
  period: number[];
  status: string;
  draggableCard: string | null;
  setDraggableCard: (e: string | null) => void;
};
const ColumnList = ({
  todoList,
  setTodoList,
  year,
  month,
  period,
  status,
  draggableCard,
  setDraggableCard,
}: Props) => {
  const onDrag = (status: string) => {
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
      <DropArea onDrag={onDrag} status={status} />
      {todoList.map((item: TodoModel, i: number) => {
        return (
          <ContainerStyle key={i}>
            {moment(
              new Date(year, month - 1, period[period.length - 1] + 1)
            ).isSameOrAfter(item.date) &&
              moment(new Date(year, month - 1, period[0] + 1)).isSameOrBefore(
                item.date
              ) && (
                <>
                  <TodoCard
                    setDraggableCard={setDraggableCard}
                    todo={item}
                    setTodoList={setTodoList}
                  />
                  <DropArea onDrag={onDrag} status={status} />
                </>
              )}
          </ContainerStyle>
        );
      })}
    </>
  );
};

export default ColumnList;
