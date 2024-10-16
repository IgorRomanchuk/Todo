import moment from "moment";
import { dateTypes } from "../../../../../constants/dateTypes";
import { ActiveDayStyle, TableHeadStyle, ThStyle } from "./styles";

type Props = {
  tableHead: { date: string }[];
};

export const TableHead = ({ tableHead }: Props) => {
  return (
    <TableHeadStyle>
      <tr>
        <ThStyle></ThStyle>
        {tableHead.map((day, i) => (
          <ThStyle key={i}>
            <p>{moment(day.date, dateTypes.date).format("dd")}</p>
            <ActiveDayStyle
              $active={
                moment(day.date).format(dateTypes.date) ===
                moment().format(dateTypes.date)
              }
            >
              {moment(day.date, dateTypes.date).format("D")}
            </ActiveDayStyle>
          </ThStyle>
        ))}
      </tr>
    </TableHeadStyle>
  );
};
