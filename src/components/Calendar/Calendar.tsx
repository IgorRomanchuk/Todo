import { ButtonStyle, CalendarStyle } from "./styles";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarBody from "./CalendarBody/CalendarBody";
import { DateModel } from "../../models/date.model";

type Props = {
  setYear: (e: (value: number) => number) => void;
  setPeriod: (e: ((value: number[]) => number[]) | number[]) => void;
  setMonth: (e: number | ((value: number) => number)) => void;
  date: DateModel;
};
const Calendar = ({ setYear, setPeriod, setMonth, date }: Props) => {
  return (
    <CalendarStyle>
      <div>
        <CalendarHeader setYear={setYear} setMonth={setMonth} date={date} />
        <CalendarBody date={date} setPeriod={setPeriod} />
        <ButtonStyle onClick={() => setPeriod([])}>reset</ButtonStyle>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
