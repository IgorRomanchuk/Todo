import { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import AvailableHours from "../../components/AvailableHours";
import { useAuth } from "../../utils/hooks/useAuth";
import { ButtonStyle } from "./styles";
import AppointmentsService from "../../service/appointments.service";
import ScheduleService from "../../service/schedule.service";
import { AppointmentModel } from "../../models/appointment.model";
import { useForm } from "react-hook-form";
import CalendarControllerDate from "../../components/Form/CalendarControllerDate/CalendarControllerDate";
import ControllerHour from "../../components/Form/ControllerHour";

export const CreateAppointment = () => {
  const { user } = useAuth();

  // const [date, setDate] = useState<Moment | string>(moment());
  const [disableDates, setDisableDatse] = useState<string[]>();
  const [availableHours, setAvailableHours] = useState<string | any>("");
  // const [appointment, setAppointment] = useState<AppointmentModel[]>([]);

  const getAvailableHours = async (date: string) => {
    const data = await ScheduleService.getAvailableHours({ date });
    setAvailableHours(data.hours);
  };

  const createAppointments = async (data: any) => {
    const appointment = await AppointmentsService.createAppointments({
      date: `${moment(data.date).format("YYYY-MM-DD")} ${data.hour}:00`,
      user_id: user.id,
    });
    console.log(appointment);
  };

  const getAvailableDays = async () => {
    const data = await ScheduleService.getAvailableDays();
    setDisableDatse(
      data.map((item: string) => moment(item).format("YYYY-MM-DD"))
    );
  };

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      date: moment(),
      hour: "",
      user_id: user.id,
    },
  });

  useEffect(() => {
    getAvailableDays();
    // getAppointments();
  }, []);

  // useEffect(() => {
  //   setSelectedHour("");
  // }, [availableHours]);
  return (
    <div style={{width: '220px', margin: '0 auto', paddingTop: '100px'}}>
      <form onSubmit={handleSubmit((data: any) => createAppointments(data))}>
        <CalendarControllerDate
          control={control}
          name="date"
          disableDates={disableDates}
          getAvailableHours={getAvailableHours}
        />
        <ControllerHour control={control} name="hour" getValues={getValues} />
        {/* <Calendar
          date={date}
          setDate={setDate}
          disableDates={disableDates}
          getAvailableHours={getAvailableHours}
        /> */}
        {/* <AvailableHours
        // setSelectedHour={setSelectedHour}
        // selectedHour={selectedHour}
        hours={
          availableHours?.length > 3
            ? availableHours?.split(", ")
            : availableHours?.trim().split(" ")
        }
      /> */}
        {/* <ButtonStyle onClick={createAppointments}>create appointments</ButtonStyle> */}
        <ButtonStyle type="submit">create appointments</ButtonStyle>
      </form>
    </div>
  );
};
