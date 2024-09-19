import { useMemo } from "react";
import { CalendarBodyStyle, DayNameTextStyle, DayTextStyle } from "./styles";
import { dateTypes } from "../../../constants";
import { getAmountDays } from "../../../utils";
import moment, { Moment } from "moment";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type Props = {
  setPeriod: (e: ((value: number[]) => number[]) | number[]) => void;
  date: Moment;
  period: number[]
};

const CalendarBody = ({ period, setPeriod, date }: Props) => {

  const handleDatePick = (item: number) => {
    if (!period.length) return setPeriod([item]);
    if (item > (period[period.length - 1] + period[0]) / 2) {
      setPeriod((prev) => [prev[0], item]);
    } else {
      setPeriod((prev) => [item, prev[prev.length - 1]]);
    }
  };

  const days = useMemo(
    () => getAmountDays(moment(date).daysInMonth()),
    [date]
  );
  return (
    <CalendarBodyStyle>
      {weekDays.map((item) => (
        <DayNameTextStyle key={item}>{item}</DayNameTextStyle>
      ))}
      {Array.from({
        length: weekDays.indexOf(
          date.startOf("month").format(dateTypes.dayName)
        ),
      }).map((_, i) => (
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
