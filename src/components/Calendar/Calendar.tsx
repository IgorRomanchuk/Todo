import { useMemo } from "react";
import {
  ArrowLeftStyle,
  ArrowRightStyle,
  ButtonStyle,
  CalendarBodyStyle,
  CalendarHeaderStyle,
  CalendarHeaderTextStyle,
  CalendarStyle,
  DayNameTextStyle,
  DayTextStyle,
} from "./styles";
import moment from "moment";
import { getAmountDays } from "../../utils";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type Props = {
  setYear: (e: (value: number) => number) => void;
  year: number;
  setPeriod: (e: ((value: number[]) => number[]) | number[]) => void;
  period: number[];
  setMonth: (e: number | ((value: number) => number)) => void;
  month: number;
};
const Calendar = ({
  setYear,
  year,
  setPeriod,
  period,
  month,
  setMonth,
}: Props) => {
  const changeYearToRight = () => setYear((prev) => prev + 1);

  const changeYearToLeft = () => setYear((prev) => prev - 1);

  const changeMonthToRight = () => {
    if (month === 12) return setMonth(1);
    setMonth((prev) => prev + 1);
  };

  const changeMonthToLeft = () => {
    if (month === 1) return setMonth(12);
    setMonth((prev) => prev - 1);
  };
  const handleDatePick = (item: number) => {
    if (!period.length) return setPeriod([item]);
    if (period.length > 1) {
      if (item > (period[period.length - 1] + period[0]) / 2) {
        setPeriod((prev) => [prev[0], item]);
      } else {
        setPeriod((prev) => [item, prev[prev.length - 1]]);
      }
    } else {
      if (item > period[0]) {
        setPeriod((prev) => [prev[0], item]);
      } else {
        setPeriod((prev) => [item, prev[prev.length - 1]]);
      }
    }
  };

  let firstDay = moment(`${year}-${month}`).startOf("month").format("dd");

  const days = useMemo(
    () => getAmountDays(moment(`${year}-${month}`).daysInMonth()),
    [year, month]
  );

  return (
    <CalendarStyle>
      <div>
        <CalendarHeaderStyle>
          <ArrowLeftStyle onClick={changeYearToLeft}>{`<<`}</ArrowLeftStyle>
          <ArrowLeftStyle onClick={changeMonthToLeft}>{`<`}</ArrowLeftStyle>
          <CalendarHeaderTextStyle>
            {moment(`${year}-${month}`).format("YYYY MMMM")}
          </CalendarHeaderTextStyle>
          <ArrowRightStyle onClick={changeMonthToRight}>{`>`}</ArrowRightStyle>
          <ArrowRightStyle onClick={changeYearToRight}>{`>>`}</ArrowRightStyle>
        </CalendarHeaderStyle>

        <CalendarBodyStyle>
          {weekDays.map((item) => (
            <DayNameTextStyle key={item}>{item}</DayNameTextStyle>
          ))}
          {Array.from({ length: weekDays.indexOf(firstDay) }).map((_, i) => (
            <p key={i}></p>
          ))}
          {days.map((item) => (
            <DayTextStyle
              onClick={() => handleDatePick(item)}
              key={item}
              $active={
                period.length >= 1 &&
                period[0] <= item &&
                period[period.length - 1] >= item &&
                true
              }
            >
              {item}
            </DayTextStyle>
          ))}
        </CalendarBodyStyle>
        <ButtonStyle onClick={() => setPeriod([])}>reset</ButtonStyle>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
