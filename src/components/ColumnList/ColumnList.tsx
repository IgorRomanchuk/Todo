import moment from "moment";
import { TodoModel } from "../../models/todoItem.model";
import TodoList from "../ToDoList/TodoList";

type Props = {
  todoList: TodoModel[];
  setValue: (e: string) => void;
  setTodoList: any;
  value: string;
  year: number;
  month: number;
  day: number[];
};
const ColumnList = ({
  todoList,
  setValue,
  setTodoList,
  value,
  year,
  month,
  day,
}: Props) => {
  return (
    <>
      {todoList.map((item: TodoModel, i: number) => {
        return (
          <div key={i} style={{ display: "flex" }}>
            {moment(new Date(year, month - 1, day[day.length - 1] + 1)).isSameOrAfter(item.date) &&
            moment(new Date(year, month - 1, day[0] + 1)).isSameOrBefore(
              item.date
            ) && (
              <TodoList
                todo={item}
                setValue={setValue}
                setTodoList={setTodoList}
                value={value}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ColumnList;
