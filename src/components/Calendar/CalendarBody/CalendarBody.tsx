import { useEffect, useMemo } from "react";
import { CalendarBodyStyle, DayNameTextStyle, DayTextStyle } from "./styles";
import { dateTypes } from "../../../constants/dateTypes";
import { getAmountDays } from "../../../utils/getAmountDays";
import moment, { Moment } from "moment";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type Props = {
  setPeriod?: (e: ((value: number[]) => number[]) | number[]) => void;
  date: string | Moment;
  period?: number[];
  setDate: (e: Moment | string) => void;
  disableDates?: string[];
  getAvailableHours?: any;
};

const CalendarBody = ({
  period,
  setPeriod,
  date,
  setDate,
  disableDates,
  getAvailableHours,
}: Props) => {

  const handleDatePick = (day: number) => {
    if (period && setPeriod) {
      if (!period.length) return setPeriod([day]);
      if (day > (period[period.length - 1] + period[0]) / 2) {
        setPeriod((prev) => [prev[0], day]);
      } else {
        setPeriod((prev) => [day, prev[prev.length - 1]]);
      }
    } else {
      setDate(moment(date).date(day));
      if (disableDates) getAvailableHours(moment(date).date(day).format('YYYY-MM-DD'));
    }
  };

  const days = useMemo(() => getAmountDays(moment(date).daysInMonth()), [date]);

  useEffect(() => {
    if (disableDates) getAvailableHours(moment(date).format('YYYY-MM-DD'))
  }, [disableDates]);

  return (
    <CalendarBodyStyle>
      {weekDays.map((item) => (
        <DayNameTextStyle key={item}>{item}</DayNameTextStyle>
      ))}
      {Array.from({
        length: weekDays.indexOf(
          moment(date).startOf("month").format(dateTypes.dayName)
        ),
      }).map((_, i) => (
        <p key={i}></p>
      ))}
      {days.map((item) => (
        <DayTextStyle
          onClick={() => handleDatePick(item)}
          key={item}
          $disabled={
            disableDates &&
            !disableDates?.includes(
              moment(date).date(item).format("YYYY-MM-DD")
            )
          }
          $active={
            (+moment(date).format("D") === item && !period) ||
            (period &&
              period.length >= 1 &&
              period[0] <= item &&
              period[period.length - 1] >= item)
          }
        >
          {item}
        </DayTextStyle>
      ))}
    </CalendarBodyStyle>
  );
};
export default CalendarBody;
