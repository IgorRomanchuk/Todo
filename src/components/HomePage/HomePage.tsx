import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { dateTypes } from "../../constants";
import moment, { Moment } from "moment";
import Weather from "../Weather/Weather";
import Board from "../Board/Board";
import { AppStyle, ContainerStyle, TitleStyle } from "./styles";

const HomePage = () => {
  const [date, setDate] = useState<Moment>(moment());
  const [period, setPeriod] = useState<number[]>([
    +moment().format(dateTypes.day),
  ]);

  return (
    <AppStyle>
      <ContainerStyle>
        <TitleStyle>To Do List</TitleStyle>
        <Calendar
          setPeriod={setPeriod}
          period={period}
          date={date}
          setDate={setDate}
        />
        <Board date={date} period={period} />
      </ContainerStyle>
      <Weather date={date} period={period} />
    </AppStyle>
  );
};

export default HomePage;
