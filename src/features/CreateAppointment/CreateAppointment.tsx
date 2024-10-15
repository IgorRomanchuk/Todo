import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useAuth } from "../../utils/hooks/useAuth";
import { ButtonStyle, CreateAppointmentPageStyle } from "./styles";
import AppointmentsService from "../../service/appointments.service";
import ScheduleService from "../../service/schedule.service";
import { useForm } from "react-hook-form";
import CalendarControllerDate from "../../components/Form/CalendarControllerDate/CalendarControllerDate";
import ControllerHour from "../../components/Form/ControllerHour";
import { CreateAppointmentModel } from "../../models/form.model";
import Loading from "../../components/Loading/Loading";
import { URL_SCHEDULE } from "../../constants/clientUrl";
import { dateTypes } from "../../constants/dateTypes";
import ControllerUser from "../../components/Form/ControllerUser";

export const CreateAppointment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const createAppointments = async (data: CreateAppointmentModel) => {
    try {
      setLoading(true);
      await AppointmentsService.createAppointments({
        date: `${moment(data.date).format(dateTypes.date)} ${data.hour}`,
        user_id: +data.user_id,
      });
      navigate(URL_SCHEDULE);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getAvailableDays = async () => {
    const data = await ScheduleService.getAvailableDays();
    setAvailableDates(
      data.map((item: string) => moment(item).format(dateTypes.date))
    );
  };

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<CreateAppointmentModel>({
    defaultValues: {
      date: moment(),
      hour: "",
      user_id: undefined,
    },
  });

  useEffect(() => {
    getAvailableDays();
  }, []);

  return (
    <CreateAppointmentPageStyle>
      <form onSubmit={handleSubmit(createAppointments)}>
        <CalendarControllerDate
          control={control}
          name="date"
          availableDates={availableDates}
        />
        <ControllerHour
          required={true}
          error={errors.hour}
          control={control}
          setValue={setValue}
          name="hour"
        />
        {user.id === 1 && (
          <ControllerUser
            required={true}
            error={errors.user_id}
            control={control}
            name="user_id"
          />
        )}
        {loading ? (
          <Loading />
        ) : (
          <ButtonStyle type="submit">create appointments</ButtonStyle>
        )}
        {error && <p>{error}</p>}
      </form>
    </CreateAppointmentPageStyle>
  );
};
