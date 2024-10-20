import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useAuth } from "src/utils/hooks/useAuth";
import { ButtonStyle, CreateAppointmentPageStyle, ErrorTextStyle } from "./styles";
import AppointmentsService from "src/services/appointments.service";
import ScheduleService from "src/services/schedule.service";
import { useForm } from "react-hook-form";
import CalendarControllerDate from "src/components/Form/CalendarControllerDate";
import ControllerHour from "src/components/Form/ControllerHour";
import { CreateAppointmentModel } from "./models/create-appointment.model";
import Loading from "src/components/Loading";
import { URL_SCHEDULE } from "src/constants/clientUrl";
import { dateTypes } from "src/constants/dateTypes";
import ControllerUser from "src/components/Form/ControllerUser";
import StepProgressBar from "../../components/StepProgressBar";

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
        user_id: +data.user_id || user.id,
      });
      navigate(URL_SCHEDULE);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getAvailableDays = async () => {
    try {
      const data = await ScheduleService.getAvailableDays();
      const date = data.map((item: string) => moment(item).format(dateTypes.date))
      setAvailableDates(date);
      setValue('date', date.includes(moment().format(dateTypes.date)) ? moment() : '')
    } catch (err) {
      console.log(err);
    }
  };

  const {
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<CreateAppointmentModel>({
    defaultValues: {
      date: "",
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
        <StepProgressBar
          steps={["first step", "second step", ...(user.role === 1 ? ["third step"] : [])]}
          data={[
            {
              reactNode: (
                <CalendarControllerDate
                  control={control}
                  name="date"
                  availableDates={availableDates}
                />
              ),
              disabled: watch("date") ? false : true,
            },
            {
              reactNode: (
                <ControllerHour
                  required={true}
                  error={errors.hour}
                  control={control}
                  setValue={setValue}
                  name="hour"
                />
              ),
              disabled: watch("hour") ? false : true,
            },
            ...(user.role === 1
              ? [
                  {
                    reactNode: (
                      <ControllerUser
                        required={true}
                        error={errors.user_id}
                        control={control}
                        setValue={setValue}
                        name="user_id"
                      />
                    ),
                    disabled: watch("user_id") ? false : true,
                  },
                ]
              : []),
            {
              reactNode: loading ? (
                <Loading />
              ) : (
                <>
                  <ButtonStyle>create appointments</ButtonStyle>
                  {error && <ErrorTextStyle>{error}</ErrorTextStyle>}
                </>
              ),
            },
          ]}
        />
      </form>
    </CreateAppointmentPageStyle>
  );
};
