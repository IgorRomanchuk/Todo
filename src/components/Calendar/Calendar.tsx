import { ButtonStyle, CalendarStyle } from "./styles";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarBody from "./CalendarBody/CalendarBody";
import { Moment } from "moment";

type Props = {
  setPeriod: (e: ((value: number[]) => number[]) | number[]) => void;
  period: number[];
  date: Moment;
  setDate: (e: (value: Moment) => Moment) => void;
};
const Calendar = ({
  setPeriod,
  period,
  date,
  setDate,
}: Props) => {
  return (
    <CalendarStyle>
      <div>
        <CalendarHeader
          setDate={setDate}
          date={date}
        />
        <CalendarBody
          period={period}
          date={date}
          setPeriod={setPeriod}
        />
        <ButtonStyle onClick={() => setPeriod([])}>reset</ButtonStyle>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
