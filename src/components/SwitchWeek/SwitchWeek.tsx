import rightArrow from "../../assets/img/rightArrow.svg";
import leftArrow from "../../assets/img/leftArrow.svg";
import moment, { Moment } from "moment";
import { dateTypes } from "../../constants/dateTypes";
import { CalendarHeaderStyle, DateTextStyle, ImageStyle } from "./styles";

type Props = {
  date: Moment | string;
  setDate: (e: string | Moment) => void;
};

export const SwitchWeek = ({ date, setDate }: Props) => {
  const changeWeekToRight = () => {
    let numberWeek = moment(date).week();
    setDate(moment(date, dateTypes.date).week(++numberWeek));
  };

  const changeWeekToLeft = () => {
    let numberWeek = moment(date).week();
    setDate(moment(date, dateTypes.date).week(--numberWeek));
  };

  return (
    <CalendarHeaderStyle>
      <ImageStyle src={leftArrow} onClick={changeWeekToLeft} alt="arros" />
      <ImageStyle src={rightArrow} onClick={changeWeekToRight} alt="arrow" />
      <DateTextStyle>
        {moment(date, "YYYY-MM").format(dateTypes.yearAndMonth)}
      </DateTextStyle>
    </CalendarHeaderStyle>
  );
};
