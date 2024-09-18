import { ButtonStyle, CalendarStyle } from "./styles";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarBody from "./CalendarBody/CalendarBody";

type Props = {
  setYear: (e: (value: number) => number) => void;
  setPeriod: (e: ((value: number[]) => number[]) | number[]) => void;
  setMonth: (e: number | ((value: number) => number)) => void;
  date: {
    year: number;
    month: number;
    period: number[];
  };
};
const Calendar = ({ setYear, setPeriod, setMonth, date }: Props) => {
  const { year, month } = date;

  return (
    <CalendarStyle>
      <div>
        <CalendarHeader
          setYear={setYear}
          setMonth={setMonth}
          year={year}
          month={month}
        />
        <CalendarBody date={date} setPeriod={setPeriod} />
        <ButtonStyle onClick={() => setPeriod([])}>reset</ButtonStyle>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
