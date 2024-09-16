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
  setDay: (e: ((value: number[]) => number[]) | number[]) => void;
  period: number[];
  setMonth: (e: number | ((value: number) => number)) => void;
  month: number;
};
const Calendar = ({
  setYear,
  year,
  setDay,
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
    if (!period.length) return setDay([item]);
    if (period.length > 1) {
      if (item > (period[period.length - 1] + period[0]) / 2) {
        setDay((prev) => [prev[0], item]);
      } else {
        setDay((prev) => [item, prev[prev.length - 1]]);
      }
    } else {
      if (item > period[0]) {
        setDay((prev) => [prev[0], item]);
      } else {
        setDay((prev) => [item, prev[prev.length - 1]]);
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
            <DayNameTextStyle>{item}</DayNameTextStyle>
          ))}
          {Array.from({ length: weekDays.indexOf(firstDay) }).map((_, i) => (
            <p key={i}></p>
          ))}
          {days.map((item) => (
            <DayTextStyle
              onClick={() => handleDatePick(item)}
              key={item}
              style={{
                ...(period.length >= 1 &&
                  period[0] <= item &&
                  period[period.length - 1] >= item && {
                    borderRadius: "50%",
                    backgroundColor: "#282c34",
                    color: "white",
                  }),
              }}
            >
              {item}
            </DayTextStyle>
          ))}
        </CalendarBodyStyle>
        <ButtonStyle onClick={() => setDay([])}>reset</ButtonStyle>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
