import moment from "moment";
import { useEffect, useRef } from "react";
import {
  TableBodyStyle,
  ThStyle,
} from "./styles";
import { TableBodyModel } from "../../../../../utils/getCalendarAppointments";
import TableDataCell from "../TableDataCell";

type Props = {
  tableBody: TableBodyModel[];
};

export const TableBody = ({ tableBody }: Props) => {
  const tableBodyRef = useRef<HTMLTableSectionElement>(null);


  useEffect(() => {
    const currentHour = moment().hour();
    const currentRow = tableBodyRef.current?.querySelector(
      `tr:nth-child(${currentHour + 1})`
    ) as HTMLElement;

    if (currentRow && tableBodyRef.current) {
      const tbody = tableBodyRef.current;
      const rowPosition = currentRow.offsetTop;
      tbody.scrollTo({
        top: rowPosition - tbody.clientHeight / 2,
        behavior: "smooth",
      });
      currentRow.style.borderBottom = "3px solid red";
    }
  }, [tableBody]);

  return (
    <>
      <TableBodyStyle ref={tableBodyRef}>
        {tableBody.map((item, i) => (
          <tr key={i}>
            <ThStyle>{i}:00</ThStyle>
            {item.map((day, i) => (
              <TableDataCell day={day} key={i}/>
            ))}
          </tr>
        ))}
      </TableBodyStyle>
    </>
  );
};
