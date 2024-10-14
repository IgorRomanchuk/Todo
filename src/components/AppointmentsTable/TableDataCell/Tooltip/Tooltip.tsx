import { AppointmentModel } from "../../../../models/appointment.model";
import { TooltipStyle } from "./styles";

type Props = {
  day: null | AppointmentModel[];
};

export const Tooltip = ({ day }: Props) => {
  return (
    <>
      {!!day && day.length > 2 && (
        <TooltipStyle>
          {!!day?.length &&
            day.map((appointment, i) => (
              <p key={i}>{appointment.user.username}</p>
            ))}
        </TooltipStyle>
      )}
    </>
  );
};
