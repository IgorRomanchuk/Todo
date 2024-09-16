import moment from "moment";
import { TodoModel } from "../../models/todoItem.model";
import TodoList from "../TodoCard/TodoCard";
import { ContainerStyle } from "./styles";

type Props = {
  todoList: TodoModel[];
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  year: number;
  month: number;
  period: number[];
};
const ColumnList = ({ todoList, setTodoList, year, month, period }: Props) => {
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
              ) && <TodoList todo={item} setTodoList={setTodoList} />}
          </ContainerStyle>
        );
      })}
    </>
  );
};

export default ColumnList;
