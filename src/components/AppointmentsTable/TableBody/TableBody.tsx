import moment from "moment";
import { useEffect, useRef } from "react";
import { TableBodyStyle, TdStyle, ThStyle } from "./styles";
import { AppointmentModel } from "../../../models/appointment.model";
import { TableBodyModel } from "../../../utils/getCalendarAppointments";

type Props = {
  appointments: [string, AppointmentModel[] | undefined][];
  tableBody: TableBodyModel[];
};

export const TableBody = ({ appointments, tableBody }: Props) => {
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
  }, [appointments]);

  return (
    <TableBodyStyle ref={tableBodyRef}>
      {tableBody.map((item, i) => (
        <tr key={i}>
          <ThStyle>{i}:00</ThStyle>
          {item.map((day, i) => (
            <TdStyle key={i}>
              {!!day?.length ? (
                day.map((appointment, i) => (
                  <p key={i}>{appointment.user.username}</p>
                ))
              ) : (
                <p></p>
              )}
            </TdStyle>
          ))}
        </tr>
      ))}
    </TableBodyStyle>
  );
};
