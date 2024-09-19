import moment from "moment";
import Column from "./Column/Column";
import { ColumnsContainerStyle, ColumnStyle } from "./styles";
import { TodoModel } from "../../models/todoItem.model";
import { useEffect, useState } from "react";
import Input from "./Input/Input";
import { DateModel } from "../../models/date.model";

const statusTodos = ["todo", "in progress", "done"];

type Props = {
  date: DateModel;
};

const Board = ({ date }: Props) => {
  const { year, month, period } = date;

  const [todoList, setTodoList] = useState<TodoModel[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]") || []
  );
  const [draggableCard, setDraggableCard] = useState<null | string>(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <Input setTodoList={setTodoList} date={date} />
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
    </>
  );
};

export default Board;
