import { dateTypes } from "../../../constants/dateTypes";
import {
  CalendarHeaderStyle,
  CalendarHeaderTextStyle,
  ImageStyle,
} from "./styles";
import leftArrows from "../../../assets/img/leftArrows.svg";
import rightArrows from "../../../assets/img/rightArrows.svg";
import rightArrow from "../../../assets/img/rightArrow.svg";
import leftArrow from "../../../assets/img/leftArrow.svg";
import moment, { Moment } from "moment";

type Props = {
  date: Moment;
  setDate: (e: (value: Moment) => Moment) => void;
};

const CalendarHeader = ({ setDate, date }: Props) => {
  const changeYearToRight = () => setDate((prev) => moment(prev).add(1, "y"));

  const changeYearToLeft = () =>
    setDate((prev) => moment(prev).subtract(1, "y"));

  const changeMonthToRight = () => setDate((prev) => moment(prev).add(1, "M"));

  const changeMonthToLeft = () =>
    setDate((prev) => moment(prev).subtract(1, "M"));
  return (
    <CalendarHeaderStyle>
      <ImageStyle src={leftArrows} onClick={changeYearToLeft} alt="arrow" />
      <ImageStyle src={leftArrow} onClick={changeMonthToLeft} alt="arros" />
      <CalendarHeaderTextStyle>
        {date.format(dateTypes.yearAndMonth)}
      </CalendarHeaderTextStyle>
      <ImageStyle src={rightArrow} onClick={changeMonthToRight} alt="arrow" />
      <ImageStyle src={rightArrows} onClick={changeYearToRight} alt="arrow" />
    </CalendarHeaderStyle>
  );
};

export default CalendarHeader;
