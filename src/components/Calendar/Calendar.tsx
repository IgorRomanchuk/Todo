import { ButtonStyle, CalendarStyle } from "./styles";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarBody from "./CalendarBody/CalendarBody";
import { Moment } from "moment";

type Props = {
  setPeriod?: (e: ((value: number[]) => number[]) | number[]) => void;
  period?: number[];
  date: Moment | string;
  setDate: (e: Moment | string) => void;
  disableDates?: string[]
  getAvailableHours?: any
};
const Calendar = ({ setPeriod, period, date, setDate, disableDates, getAvailableHours }: Props) => {
  return (
    <CalendarStyle>
      <div>
        <CalendarHeader setDate={setDate} date={date} />
        <CalendarBody
          setDate={setDate}
          period={period}
          date={date}
          setPeriod={setPeriod}
          disableDates={disableDates}
          getAvailableHours={getAvailableHours}
        />
        {setPeriod && (
          <ButtonStyle
            onClick={() => {
              setPeriod([]);
            }}
          >
            reset
          </ButtonStyle>
        )}
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
