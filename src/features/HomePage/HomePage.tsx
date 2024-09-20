import React, { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { dateTypes } from "../../constants/dateTypes";
import moment, { Moment } from "moment";
import Weather from "../../components/Weather/Weather";
import Board from "../../components/Board/Board";
import { HomePageStyle, ContainerStyle, TitleStyle } from "./styles";

const HomePage = () => {
  const [date, setDate] = useState<Moment>(moment());
  const [period, setPeriod] = useState<number[]>([
    +moment().format(dateTypes.day),
  ]);

  return (
    <HomePageStyle>
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
    </HomePageStyle>
  );
};

export default HomePage;
