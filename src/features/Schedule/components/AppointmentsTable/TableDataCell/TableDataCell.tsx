import openModal from "src/assets/img/open-modal.svg";
import { AppointmentModel } from "src/models/appointment.model";
import { ImageStyle, TdContentStyle, TdStyle } from "./styles";
import AppointmentsService from "src/services/appointments.service";
import Tooltip from "../Tooltip";
import { useState } from "react";
import AppointmentBox from "src/features/Schedule/components/AppointmentsTable/AppointmentBox";

type Props = {
  day: null | AppointmentModel[];
  getAppointments: () => void;
};

export const TableDataCell = ({ day, getAppointments }: Props) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const deleteAppointment = async (id: number) => {
    await AppointmentsService.deleteAppointment(id);
    await getAppointments();
  };

  const onMoseEvent = (isShow: boolean) => {
    if (!!day && day.length > 2) {
      setShowTooltip(isShow);
    }
  };

  return (
    <TdStyle
      $pointer={!!day && day.length > 2}
      onMouseEnter={() => onMoseEvent(true)}
      onMouseLeave={() => onMoseEvent(false)}
    >
      <TdContentStyle $tooltip={!!day && day.length > 2}>
        <ImageStyle src={openModal} alt="open" />
        <div>
          {!!day?.length &&
            day.map((appointment, i) => (
              <AppointmentBox
                key={i}
                deleteAppointment={deleteAppointment}
                id={appointment.id}
                username={appointment.user.username}
              />
            ))}
        </div>
        {showTooltip && <Tooltip deleteAppointment={deleteAppointment} day={day} />}
      </TdContentStyle>
    </TdStyle>
  );
};
