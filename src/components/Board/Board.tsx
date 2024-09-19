import moment, { Moment } from "moment";
import Column from "./Column/Column";
import { ColumnsContainerStyle, ColumnStyle } from "./styles";
import { TodoModel } from "../../models/todoItem.model";
import { useEffect, useState } from "react";
import Input from "./Input/Input";
import TodoService from "../../service/todos.service";

const statusTodos = ["todo", "in progress", "done"];

type Props = {
  period: number[];
  date: Moment;
};

const Board = ({ period, date }: Props) => {
  const [todoList, setTodoList] = useState<TodoModel[]>(TodoService.getTodos());
  const [draggableCard, setDraggableCard] = useState<null | string>(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <Input setTodoList={setTodoList} period={period} date={date} />
      <ColumnsContainerStyle>
        {statusTodos.map((status) => (
          <ColumnStyle key={status}>
            <div>{status}</div>
            <Column
              status={status}
              todoList={todoList.filter(
                (item) =>
                  moment(date)
                    .add({ days: period[period.length - 1] })
                    .isSameOrAfter(item.date) &&
                  moment(date)
                    .add({ days: period[0] })
                    .isSameOrBefore(item.date) &&
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
