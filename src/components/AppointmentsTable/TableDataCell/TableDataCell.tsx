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
      onClick={() => day && day.length > 1 && handleOpenModal(day)}
    >
      <TdContentStyle>
        <ImageStyle src={openModal} alt="open" />
        <div>
          {!!day?.length &&
            day.map((appointment: any, i: any) => (
              <p key={i}>{appointment.user.username}</p>
            ))}
        </div>
      </TdContentStyle>
    </TdStyle>
  );
};
