import moment from "moment";
import { TodoModel } from "../../models/todoItem.model";
import TodoList from "../ToDoList/TodoList";
import { ContainerStyle } from "./styles";

type Props = {
  todoList: TodoModel[];
  setValue: (e: string) => void;
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  value: string;
  year: number;
  month: number;
  period: number[];
};
const ColumnList = ({
  todoList,
  setValue,
  setTodoList,
  value,
  year,
  month,
  period,
}: Props) => {
  return (
    <>
      {todoList.map((item: TodoModel, i: number) => {
        return (
          <ContainerStyle key={i}>
            {moment(
              new Date(year, month - 1, period[period.length - 1] + 1)
            ).isSameOrAfter(item.date) &&
              moment(new Date(year, month - 1, period[0] + 1)).isSameOrBefore(
                item.date
              ) && (
                <TodoList
                  todo={item}
                  setValue={setValue}
                  setTodoList={setTodoList}
                  value={value}
                />
              )}
          </ContainerStyle>
        );
      })}
    </>
  );
};

export default ColumnList;
