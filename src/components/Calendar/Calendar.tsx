import { ButtonStyle, CalendarStyle } from "./styles";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import { Moment } from "moment";

type Props = {
  setPeriod?: (e: ((value: number[]) => number[]) | number[]) => void;
  period?: number[];
  date: Moment | string;
  setDate: (e: Moment | string) => void;
  availableDates?: string[];
};

export const Calendar = ({ setPeriod, period, date, setDate, availableDates }: Props) => {
  return (
    <CalendarStyle>
      <div>
        <CalendarHeader setDate={setDate} date={date} />
        <CalendarBody
          setDate={setDate}
          period={period}
          date={date}
          setPeriod={setPeriod}
          availableDates={availableDates}
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
