import { dateTypes } from "../../../constants";
import { CalendarHeaderStyle, CalendarHeaderTextStyle } from "./styles";
import leftArrows from "../../../assets/img/leftArrows.svg";
import rightArrows from "../../../assets/img/rightArrows.svg";
import rightArrow from "../../../assets/img/rightArrow.svg";
import leftArrow from "../../../assets/img/leftArrow.svg";
import moment from "moment";

type Props = {
  setYear: (e: (value: number) => number) => void;
  setMonth: (e: number | ((value: number) => number)) => void;
  year: number
  month: number
}

const CalendarHeader = ({setYear, setMonth, year, month}: Props) => {
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
  return (
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
  );
};

export default CalendarHeader;
