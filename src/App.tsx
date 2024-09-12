import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Calendar from "./components/Calendar/Calendar";
import { dateTypes } from "./constants";
import "./App.css";
import axios from "axios";
import moment from "moment";
import Weather from "./components/Weather/Weather";
import TodoList from "./components/ToDoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList") || "[]") || []
  );
  const [weather, setWeather] = useState<any>();
  const [year, setYear] = useState<number>(+moment().format(dateTypes.year));
  const [month, setMonth] = useState<number>(+moment().format(dateTypes.month));
  const [day, setDay] = useState<number>(+moment().format(dateTypes.day));
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://api.weatherapi.com/v1/history.json", {
        params: {
          key: "a46222fbd0194c21bd6183145241109",
          q: "Гродно",
          dt: moment(new Date(year, month - 1, day)).format(dateTypes.date),
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
    <div className="App">
      <header className="App-header">
        <h1> To Do List</h1>
        <Input setTodoList={setTodoList} day={day} month={month} year={year} />
        <Calendar
          setYear={setYear}
          year={year}
          setDay={setDay}
          day={day}
          setMonth={setMonth}
          month={month}
        />
        {loading ? (
          <p style={{ position: "absolute", top: "50%" }}>...Loading</p>
        ) : (
          <>
            <Weather error={error} weather={weather} />
            {todoList.map((item: any, i: number) => {
              return (
                <div key={i}>
                  {moment(new Date(year, month - 1, day + 1)).format(
                    dateTypes.date
                  ) === moment(item.date).format(dateTypes.date) && (
                    <div style={{ display: "flex" }}>
                      <TodoList
                        item={item}
                        todoList={todoList}
                        setValue={setValue}
                        setTodoList={setTodoList}
                        value={value}
                        i={i}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
