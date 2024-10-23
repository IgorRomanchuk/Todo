import deleteIcon from "src/assets/img/delete.svg";
import { ContainerStyle } from "src/features/Schedule/components/AppointmentsTable/AppointmentBox/styles";

type Props = {
  deleteAppointment: (id: number) => void;
  username: string;
  id: number;
};

export const AppointmentBox = ({ deleteAppointment, username, id }: Props) => {
  return (
    <ContainerStyle>
      <p>{username}</p>
      <img
        onClick={() => deleteAppointment(id)}
        src={deleteIcon}
        alt="delete"
        width={13}
        height={13}
      />
    </ContainerStyle>
  );
};
