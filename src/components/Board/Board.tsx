import moment from "moment";
import Column from "./Column/Column";
import { ColumnsContainerStyle, ColumnStyle } from "./styles";
import { TodoModel } from "../../models/todoItem.model";
import { useState } from "react";

const statusTodos = ["todo", "in progress", "done"];

type Props = {
  todoList: TodoModel[];
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  date: {
    period: number[];
    month: number;
    year: number;
  };
};

const Board = ({ todoList, setTodoList, date }: Props) => {
  const [draggableCard, setDraggableCard] = useState<null | string>(null);

  const { year, month, period } = date;
  return (
    <ColumnsContainerStyle>
      {statusTodos.map((status) => (
        <ColumnStyle key={status}>
          <div>{status}</div>
          <Column
            status={status}
            todoList={todoList.filter(
              (item) =>
                moment(
                  `${year}-${month}-${period[period.length - 1] + 1}`,
                  "YYYY-MM-DD"
                ).isSameOrAfter(item.date) &&
                moment(
                  `${year}-${month}-${period[0] + 1}`,
                  "YYYY-MM-DD"
                ).isSameOrBefore(item.date) &&
                item.status === status
            )}
            setTodoList={setTodoList}
            draggableCard={draggableCard}
            setDraggableCard={setDraggableCard}
          />
        </ColumnStyle>
      ))}
    </ColumnsContainerStyle>
  );
};

export default Board;
