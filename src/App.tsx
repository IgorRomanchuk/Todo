import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Calendar from "./components/Calendar/Calendar";
import { dateTypes } from "./constants";
import axios from "axios";
import moment from "moment";
import Weather from "./components/Weather/Weather";
import { TodoModel } from "./models/todoItem.model";
import TodoColumn from "./components/ColumnList/ColumnList";
import { AppStyle, ColumnsStyle, HeaderStyle, LoadingStyle, TitleStyle } from "./styles";

const statusTodos = ["todo", "in progress", "done"];

function App() {
  const [todoList, setTodoList] = useState<TodoModel[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]") || []
  );
  const [weather, setWeather] = useState<any>();
  const [year, setYear] = useState<number>(+moment().format(dateTypes.year));
  const [month, setMonth] = useState<number>(+moment().format(dateTypes.month));
  const [day, setDay] = useState<number[]>([+moment().format(dateTypes.day)]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://api.weatherapi.com/v1/history.json", {
        params: {
          key: "a46222fbd0194c21bd6183145241109",
          q: "Гродно",
          dt: moment(new Date(year, month - 1, day[0])).format(dateTypes.date),
        },
      })
      .then((res) => {
        setWeather(res.data);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [day, month, year]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <AppStyle>
      <HeaderStyle>
        <TitleStyle>To Do List</TitleStyle>
        <Input setTodoList={setTodoList} day={day} month={month} year={year} />
        <Calendar
          setYear={setYear}
          year={year}
          setDay={setDay}
          period={day}
          setMonth={setMonth}
          month={month}
        />
        {loading ? (
          <LoadingStyle>...Loading</LoadingStyle>
        ) : (
          <>
            <ColumnsStyle>
              {statusTodos.map((status) => (
                <div key={status}>
                  <div>{status}</div>
                  <TodoColumn
                    year={year}
                    month={month}
                    day={day}
                    todoList={todoList.filter((item) => item.status === status)}
                    setValue={setValue}
                    setTodoList={setTodoList}
                    value={value}
                  />
                </div>
              ))}
            </ColumnsStyle>
          </>
        )}
      </HeaderStyle>
      <Weather error={error} weather={weather} />
    </AppStyle>
  );
}

export default App;
