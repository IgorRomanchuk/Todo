import { SchedulePageStyle, TitleStyle } from "./styles";
import AppointmentCard from "../../components/Appointments";

export const Schedule = () => {
  return (
    <SchedulePageStyle>
      <TitleStyle>Your appointments</TitleStyle>
      <AppointmentCard />
    </SchedulePageStyle>
  );
};
