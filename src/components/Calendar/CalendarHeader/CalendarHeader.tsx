import { dateTypes } from "../../../constants";
import {
  CalendarHeaderStyle,
  CalendarHeaderTextStyle,
  ImageStyle,
} from "./styles";
import leftArrows from "../../../assets/img/leftArrows.svg";
import rightArrows from "../../../assets/img/rightArrows.svg";
import rightArrow from "../../../assets/img/rightArrow.svg";
import leftArrow from "../../../assets/img/leftArrow.svg";
import { DateModel } from "../../../models/date.model";
import moment from "moment";

type Props = {
  setYear: (e: (value: number) => number) => void;
  setMonth: (e: number | ((value: number) => number)) => void;
  date: DateModel;
};

const CalendarHeader = ({ setYear, setMonth, date }: Props) => {
  const { year, month } = date;

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
      <ImageStyle src={leftArrows} onClick={changeYearToLeft} alt="arrow" />
      <ImageStyle src={leftArrow} onClick={changeMonthToLeft} alt="arros" />
      <CalendarHeaderTextStyle>
        {moment(`${year}-${month}`, "YYYY-MM").format(dateTypes.yearAndMonth)}
      </CalendarHeaderTextStyle>
      <ImageStyle src={rightArrow} onClick={changeMonthToRight} alt="arrow" />
      <ImageStyle src={rightArrows} onClick={changeYearToRight} alt="arrow" />
    </CalendarHeaderStyle>
  );
};

export default CalendarHeader;
