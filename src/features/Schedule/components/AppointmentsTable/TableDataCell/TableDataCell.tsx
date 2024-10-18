import openModal from "src/assets/img/open-modal.svg";
import { AppointmentModel } from "src/models/appointment.model";
import { ImageStyle, TdContentStyle, TdStyle } from "./styles";
import Tooltip from "./Tooltip";

type Props = {
  day: null | AppointmentModel[];
};

export const TableDataCell = ({ day }: Props) => {
  return (
    <TdStyle $pointer={!!day && day.length > 2}>
      <TdContentStyle $tooltip={!!day && day.length > 2}>
        <ImageStyle src={openModal} alt="open" />
        <div>
          {!!day?.length && day.map((appointment, i) => <p key={i}>{appointment.user.username}</p>)}
        </div>
        <Tooltip day={day} />
      </TdContentStyle>
    </TdStyle>
  );
};
