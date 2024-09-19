import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { dateTypes } from "../../constants";
import moment from "moment";
import Weather from "../Weather/Weather";
import Board from "../Board/Board";
import { AppStyle, ContainerStyle, TitleStyle } from "./styles";

const HomePage = () => {
  const [year, setYear] = useState<number>(+moment().format(dateTypes.year));
  const [month, setMonth] = useState<number>(+moment().format(dateTypes.month));
  const [period, setPeriod] = useState<number[]>([
    +moment().format(dateTypes.day),
  ]);

  return (
    <AppStyle>
      <ContainerStyle>
        <TitleStyle>To Do List</TitleStyle>
        <Calendar
          setYear={setYear}
          setPeriod={setPeriod}
          setMonth={setMonth}
          date={{ year, month, period }}
        />
        <Board date={{ year, month, period }} />
      </ContainerStyle>
      <Weather date={{ year, month, period }} />
    </AppStyle>
  );
};

export default HomePage;
