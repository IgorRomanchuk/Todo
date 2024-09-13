import { styled } from "styled-components";
import { daysAndMonth } from "./calendarData";

const CalendarStyle = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
`;

const CalendarHeaderStyle = styled.div`
  display: flex;
  justify-content: "space-between";
`;

const CalendarBodyStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 350px;
  min-height: 196px;
`;

const ArrowLeftStyle = styled.span`
  cursor: pointer;
  margin-right: 15px;
`;

const ArrowRightStyle = styled.span`
  cursor: pointer;
  margin-left: 15px;
`;

type Props = {
  setYear: (e: (value: number) => number) => void;
  year: number;
  setDay: (e: ((value: number[]) => number[]) | number[]) => void;
  day: number[];
  setMonth: (e: number | ((value: number) => number)) => void;
  month: number;
};
const Calendar = ({ setYear, year, setDay, day, month, setMonth }: Props) => {
  const changeYearToRight = () => setYear((prev) => prev + 1);

  const changeYearToLeft = () => setYear((prev) => prev - 1);

  const changeMonthToRight = () => {
    if (month === 12) return setMonth(1);
    setMonth((prev) => prev + 1);
    if (daysAndMonth[month - 1].days === day[day.length - 1]) {
      setDay((prev) => [prev[0], daysAndMonth[month].days]);
    }
  };

  const changeMonthToLeft = () => {
    if (month === 1) return setMonth(12);
    setMonth((prev) => prev - 1);
  };

  return (
    <CalendarStyle>
      <div>
        <CalendarHeaderStyle>
          <ArrowLeftStyle onClick={changeYearToLeft}>{`<<`}</ArrowLeftStyle>
          <ArrowLeftStyle onClick={changeMonthToLeft}>{`<`}</ArrowLeftStyle>
          {year + " " + daysAndMonth[month - 1].month}
          <ArrowRightStyle onClick={changeMonthToRight}>{`>`}</ArrowRightStyle>
          <ArrowRightStyle onClick={changeYearToRight}>{`>>`}</ArrowRightStyle>
        </CalendarHeaderStyle>

        <CalendarBodyStyle>
          {[...new Array(daysAndMonth[month - 1].days)].map((_, i) => (
            <p
              onClick={() => {
                if (!day.length) return setDay([i + 1]);
                if (day.length > 1) {
                  if (i + 1 > (day[day.length - 1] + day[0]) / 2) {
                    setDay((prev) => [prev[0], i + 1]);
                  } else {
                    setDay((prev) => [i + 1, prev[prev.length - 1]]);
                  }
                } else {
                  if (i + 1 > day[0]) {
                    setDay((prev) => [prev[0], i + 1]);
                  } else {
                    setDay((prev) => [i + 1, prev[prev.length - 1]]);
                  }
                }
              }}
              key={i}
              style={{
                cursor: "pointer",
                border: `${
                  day.includes(i + 1)
                    ? "1px solid white"
                    : day.length > 1 &&
                      day[0] < i + 1 &&
                      day[day.length - 1] > i + 1
                    ? "1px solid red"
                    : "none"
                }`,
              }}
            >
              {i + 1}
            </p>
          ))}
        </CalendarBodyStyle>
        <button onClick={() => setDay([])}>reset</button>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
