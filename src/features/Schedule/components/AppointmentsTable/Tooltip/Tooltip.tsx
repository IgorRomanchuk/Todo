import { AppointmentModel } from "src/models/appointment.model";
import {
  TooltipContainerStyle,
  TooltipStyle,
} from "src/features/Schedule/components/AppointmentsTable/Tooltip/styles";
import AppointmentBox from "src/features/Schedule/components/AppointmentsTable/AppointmentBox";

type Props = {
  day: null | AppointmentModel[];
  deleteAppointment: (id: number) => void;
};

export const Tooltip = ({ day, deleteAppointment }: Props) => {
  return (
    <TooltipContainerStyle>
      {!!day && day.length > 2 && (
        <TooltipStyle>
          {!!day?.length &&
            day.map((appointment, i) => (
              <AppointmentBox
                key={i}
                deleteAppointment={deleteAppointment}
                id={appointment.id}
                username={appointment.user.username}
              />
            ))}
        </TooltipStyle>
      )}
    </TooltipContainerStyle>
  );
};
