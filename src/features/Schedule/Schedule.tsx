import { CalendarContainerStyle, ContainerStyle, SchedulePageStyle, TitleStyle } from "./styles";
import AppointmentsTable from "./components/AppointmentsTable";
import Calendar from "src/components/Calendar";
import { useState } from "react";
import moment, { Moment } from "moment";

export const Schedule = () => {
  const [date, setDate] = useState<Moment | string>(moment());

  return (
    <SchedulePageStyle>
      <TitleStyle>Your appointments</TitleStyle>
      <ContainerStyle>
        <CalendarContainerStyle>
          <Calendar date={date} setDate={setDate} />
        </CalendarContainerStyle>
        <AppointmentsTable date={date} setDate={setDate} />
      </ContainerStyle>
    </SchedulePageStyle>
  );
};
