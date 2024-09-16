import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Calendar from "./components/Calendar/Calendar";
import { dateTypes } from "./constants";
import moment from "moment";
import Weather from "./components/Weather/Weather";
import { TodoModel } from "./models/todoItem.model";
import TodoColumn from "./components/ColumnList/ColumnList";
import {
  AppStyle,
  ColumnsContainerStyle,
  ColumnStyle,
  HeaderStyle,
  LoadingStyle,
  TitleStyle,
} from "./styles";
import WeatherService from "./service/weather.service";

const statusTodos = ["todo", "in progress", "done"];

function App() {
  const [todoList, setTodoList] = useState<TodoModel[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]") || []
  );
  const [weather, setWeather] = useState<any>();
  const [year, setYear] = useState<number>(+moment().format(dateTypes.year));
  const [month, setMonth] = useState<number>(+moment().format(dateTypes.month));
  const [period, setPeriod] = useState<number[]>([+moment().format(dateTypes.day)]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setLoading(true);
    WeatherService.getWeather(year, month, period)
      .then((res) => {
        setWeather(res.data);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [period, month, year]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <AppStyle>
      <HeaderStyle>
        <TitleStyle>To Do List</TitleStyle>
        <Input setTodoList={setTodoList} period={period} month={month} year={year} />
        <Calendar
          setYear={setYear}
          year={year}
          setPeriod={setPeriod}
          period={period}
          setMonth={setMonth}
          month={month}
        />
        {loading ? (
          <LoadingStyle>...Loading</LoadingStyle>
        ) : (
          <>
            <ColumnsContainerStyle>
              {statusTodos.map((status) => (
                <ColumnStyle key={status}>
                  <div>{status}</div>
                  <TodoColumn
                    year={year}
                    month={month}
                    period={period}
                    todoList={todoList.filter((item) => item.status === status)}
                    setValue={setValue}
                    setTodoList={setTodoList}
                    value={value}
                  />
                </ColumnStyle>
              ))}
            </ColumnsContainerStyle>
          </>
        )}
      </HeaderStyle>
      <Weather error={error} weather={weather} />
    </AppStyle>
  );
}

export default App;
