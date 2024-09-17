import { useMemo } from "react";
import {
  ButtonStyle,
  CalendarBodyStyle,
  CalendarHeaderStyle,
  CalendarHeaderTextStyle,
  CalendarStyle,
  DayNameTextStyle,
  DayTextStyle,
} from "./styles";
import moment from "moment";
import leftArrows from "../../assets/img/leftArrows.svg";
import rightArrows from "../../assets/img/rightArrows.svg";
import rightArrow from "../../assets/img/rightArrow.svg";
import leftArrow from "../../assets/img/leftArrow.svg";
import { dateTypes } from "../../constants";
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
    if (item > (period[period.length - 1] + period[0]) / 2) {
      setPeriod((prev) => [prev[0], item]);
    } else {
      setPeriod((prev) => [item, prev[prev.length - 1]]);
    }
  };

  let firstDay = moment(new Date(`${year}-${month}`)).startOf("month").format(dateTypes.dayName);

  const days = useMemo(
    () => getAmountDays(moment(new Date(`${year}-${month}`)).daysInMonth()),
    [year, month]
  );

  return (
    <CalendarStyle>
      <div>
        <CalendarHeaderStyle>
          <img
            src={leftArrows}
            onClick={changeYearToLeft}
            height={20}
            width={20}
            alt="leftArrows"
          />
          <img
            src={leftArrow}
            onClick={changeMonthToLeft}
            height={20}
            width={20}
            alt="leftArrows"
          />
          <CalendarHeaderTextStyle>
            {moment(new Date(`${year}-${month}`)).format(dateTypes.yearAndMonth)}
          </CalendarHeaderTextStyle>
          <img
            src={rightArrow}
            onClick={changeMonthToRight}
            height={20}
            width={20}
            alt="rightArrow"
          />
          <img
            src={rightArrows}
            onClick={changeYearToRight}
            height={20}
            width={20}
            alt="rightArrows"
          />
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
