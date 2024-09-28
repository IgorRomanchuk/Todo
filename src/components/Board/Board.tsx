import moment, { Moment } from "moment";
import Column from "./Column/Column";
import { ColumnsContainerStyle, ColumnStyle } from "./styles";
import { TodoModel } from "../../models/todoItem.model";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/hooks/useAuth";
import TodosService from "../../service/todos.service";

const statusTodos = ["todo", "in progress", "done"];

type Props = {
  period: number[];
  date: Moment | string;
};

const Board = ({ period, date }: Props) => {
  const { user } = useAuth();
  const [todoList, setTodoList] = useState<TodoModel[]>([]);
  const [draggableCard, setDraggableCard] = useState<null | string>(null);
  
  useEffect(() => {
    setTodoList(TodosService.getTodos().filter((item: any) => item.id === user.id)[0].todos);
  }, [user]);

  return (
    <>
      <ColumnsContainerStyle>
        {statusTodos.map((status) => (
          <ColumnStyle key={status}>
            <div>{status}</div>
            {period && (
              <Column
                status={status}
                todoList={todoList.filter(
                  (item) =>
                    !!period.length &&
                    moment(date)
                      .date(period[period.length - 1])
                      .isSameOrAfter(item.date, "date") &&
                    moment(date)
                      .date(period[0])
                      .isSameOrBefore(item.date, "date") &&
                    item.status === status
                )}
                setTodoList={setTodoList}
                draggableCard={draggableCard}
                setDraggableCard={setDraggableCard}
              />
            )}
          </ColumnStyle>
        ))}
      </ColumnsContainerStyle>
    </>
  );
};

export default Board;
