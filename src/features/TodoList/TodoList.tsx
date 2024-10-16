import React, { useState } from "react";
import Calendar from "../../components/Calendar";
import { dateTypes } from "../../constants/dateTypes";
import moment, { Moment } from "moment";
import Board from "../../components/Board";
import { ContainerStyle, HomePageStyle } from "./styles";

export const TodoList = () => {
  const [date, setDate] = useState<Moment | string>(moment());
  const [period, setPeriod] = useState<number[]>([
    +moment().format(dateTypes.day),
  ]);

  return (
    <HomePageStyle>
      <ContainerStyle>
        <h1>To Do List</h1>
        <Calendar
          setPeriod={setPeriod}
          period={period}
          date={date}
          setDate={setDate}
        />
        <Board date={date} period={period} />
      </ContainerStyle>
    </HomePageStyle>
  );
};
