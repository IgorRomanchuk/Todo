import { daysAndMonth } from "./calendarData";

type Props = {
  setYear: (e: (value: number) => number) => void;
  year: number;
  setDay: (e: number) => void;
  day: number;
  setMonth: (e: number | ((value: number) => number)) => void;
  month: number;
};
const Calendar = ({ setYear, year, setDay, day, month, setMonth }: Props) => {
  const changeYearToRight = () => setYear((prev) => prev + 1);

  const changeYearToLeft = () => setYear((prev: any) => prev - 1);

  const changeMonthToRight = () => {
    if (month === 12) return setMonth(1);
    setMonth((prev: any) => prev + 1);
  };

  const changeMonthToLeft = () => {
    if (month === 1) return setMonth(12);
    setMonth((prev: any) => prev - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: "10px",
        left: "10px",
        border: "2px solid white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            onClick={changeYearToLeft}
            style={{ cursor: "pointer", marginRight: "15px" }}
          >{`<<`}</span>
          <span
            onClick={changeMonthToLeft}
            style={{ cursor: "pointer", marginRight: "15px" }}
          >{`<`}</span>
          {year + " " + daysAndMonth[month - 1].month}
          <span
            onClick={changeMonthToRight}
            style={{ cursor: "pointer", marginLeft: "15px" }}
          >{`>`}</span>
             <span
            onClick={changeYearToRight}
            style={{ cursor: "pointer", marginLeft: "15px" }}
          >{`>>`}</span>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            width: "350px",
            minHeight: "196px",
          }}
        >
          {[...new Array(daysAndMonth[month - 1].days)].map((_, i) => (
            <p
              onClick={() => setDay(i + 1)}
              key={i}
              style={{
                cursor: "pointer",
                border: `${day === i + 1 ? "1px solid white" : "none"}`,
                borderRadius: `${day === i + 1 ? "10px" : "none"}`,
              }}
            >
              {i + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
