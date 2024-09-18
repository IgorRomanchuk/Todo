import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";
import { dateTypes } from "../../constants";
import moment from "moment";
import Weather from "../Weather/Weather";
import Board from "../Board/Board";
import { TodoModel } from "../../models/todoItem.model";
import { AppStyle, ContainerStyle, TitleStyle } from "./styles";

const HomePage = () => {
  const [todoList, setTodoList] = useState<TodoModel[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]") || []
  );

  const [year, setYear] = useState<number>(+moment().format(dateTypes.year));
  const [month, setMonth] = useState<number>(+moment().format(dateTypes.month));
  const [period, setPeriod] = useState<number[]>([
    +moment().format(dateTypes.day),
  ]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <AppStyle>
      <ContainerStyle>
        <TitleStyle>To Do List</TitleStyle>
        <Input setTodoList={setTodoList} date={{ year, month, period }} />
        <Calendar
          setYear={setYear}
          setPeriod={setPeriod}
          setMonth={setMonth}
          date={{ year, month, period }}
        />
        <Board
          todoList={todoList}
          date={{ year, month, period }}
          setTodoList={setTodoList}
        />
      </ContainerStyle>
      <Weather date={{ year, month, period }} />
    </AppStyle>
  );
}

export default HomePage;
