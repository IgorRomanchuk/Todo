import openModal from "../../../assets/img/open-modal.svg";
import { AppointmentModel } from "../../../models/appointment.model";
import { ImageStyle, TdContentStyle, TdStyle } from "./styles";

type Props = {
  day: null | AppointmentModel[];
  handleOpenModal: (e: AppointmentModel[]) => void;
};

export const TableDataCell = ({ day, handleOpenModal }: Props) => {
  return (
    <TdStyle
      $pointer={!!day && day.length > 2}
      onClick={() => day && day.length > 2 && handleOpenModal(day)}
    >
      <TdContentStyle $tooltip={!!day && day.length > 2}>
        <ImageStyle src={openModal} alt="open" />
        <div>
          {!!day?.length &&
            day.map((appointment, i) => (
              <p key={i}>{appointment.user.username}</p>
            ))}
        </div>
      </TdContentStyle>
    </TdStyle>
  );
};
