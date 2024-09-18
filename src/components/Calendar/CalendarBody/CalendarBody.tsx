import moment from "moment";
import { CalendarBodyStyle, DayNameTextStyle, DayTextStyle } from "./styles";
import { dateTypes } from "../../../constants";
import { getAmountDays } from "../../../utils";
import { useMemo } from "react";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type Props = {
  date: {
    period: number[];
    month: number;
    year: number;
  };
  setPeriod: (e: ((value: number[]) => number[]) | number[]) => void;
};

const CalendarBody = ({date, setPeriod}: Props) => {
  const { year, month, period } = date;
  
  const handleDatePick = (item: number) => {
    if (!period.length) return setPeriod([item]);
    if (item > (period[period.length - 1] + period[0]) / 2) {
      setPeriod((prev) => [prev[0], item]);
    } else {
      setPeriod((prev) => [item, prev[prev.length - 1]]);
    }
  };

  let firstDay = moment(`${year}-${month}`, "YYYY-MM")
    .startOf("month")
    .format(dateTypes.dayName);

  const days = useMemo(
    () => getAmountDays(moment(`${year}-${month}`, "YYYY-MM").daysInMonth()),
    [year, month]
  );
  return (
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
  );
};
export default CalendarBody;
