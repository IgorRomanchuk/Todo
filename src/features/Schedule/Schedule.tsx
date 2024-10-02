import { useEffect, useState } from "react";
import ScheduleService from "../../service/schedule.service";
import Calendar from "../../components/Calendar/Calendar";
import AvailableHours from "../../components/AvailableHours";
import AppointmentsService from "../../service/appointments.service";
import moment, { Moment } from "moment";

export const Schedule = () => {
  const [date, setDate] = useState<Moment | string>(moment());
  const [disableDates, setDisableDatse] = useState<string[]>();
  const [availableHours, setAvailableHours] = useState<string | any>("");
  const [selectedHour, setSelectedHour] = useState("");

  const getAvailableDays = async () => {
    const data = await ScheduleService.getAvailableDays();
    setDisableDatse(
      data.map((item: string) => moment(item).format("YYYY-MM-DD"))
    );
  };

  const getAvailableHours = async (date: any) => {
    const data = await ScheduleService.getAvailableHours({ date });
    setAvailableHours(data.hours);
  };

  const createAppointments = async () => {
    const data = await AppointmentsService.getAppointments({
      date: `${moment(date).format("YYYY-MM-DD")} ${selectedHour}:00`,
    });
    console.log(data);
  };

  useEffect(() => {
    getAvailableDays();
  }, []);

  return (
    <div style={{ width: "200px" }}>
      <Calendar
        date={date}
        setDate={setDate}
        disableDates={disableDates}
        getAvailableHours={getAvailableHours}
      />
      <AvailableHours
        setSelectedHour={setSelectedHour}
        selectedHour={selectedHour}
        hours={
          availableHours?.length > 3
            ? availableHours?.split(", ")
            : availableHours?.trim().split(" ")
        }
      />
      {/* <button onClick={createAppointments}>get appointments</button> */}
    </div>
  );
};
