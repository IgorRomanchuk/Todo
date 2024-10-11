import { AppointmentModel } from "../../../models/appointment.model";
import closModal from "../../../assets/img/close-modal.svg";
import { ContainerStyle, ContantStlye, ImageStyle } from "./styles";

type Props = {
  modalContent: AppointmentModel[];
  setIsOpen: (e: boolean) => void;
};

export const AppointmentsModal = ({ modalContent, setIsOpen }: Props) => {
  const handleClose = () => setIsOpen(false);

  return (
    <ContainerStyle
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <ContantStlye>
        <ImageStyle src={closModal} alt="close" onClick={handleClose} />
        {modalContent.map((item) => (
          <p key={item.id}>{item.user.username}</p>
        ))}
      </ContantStlye>
    </ContainerStyle>
  );
};
