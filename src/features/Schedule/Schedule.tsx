import { SchedulePageStyle, TitleStyle } from "./styles";
import Appointments from "../../components/Appointments";

export const Schedule = () => {
  return (
    <SchedulePageStyle>
      <TitleStyle>Your appointments</TitleStyle>
      <Appointments />
    </SchedulePageStyle>
  );
};
