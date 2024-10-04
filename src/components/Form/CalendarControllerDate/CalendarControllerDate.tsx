import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Calendar from "../../Calendar/Calendar";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  disableDates?: any;
  getAvailableHours?: any;
}

const CalendarControllerDate = <T extends FieldValues>({
  name,
  control,
  disableDates,
  getAvailableHours,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Calendar
            date={field.value}
            setDate={field.onChange}
            disableDates={disableDates}
            getAvailableHours={getAvailableHours}
          />
        );
      }}
    />
  );
};

export default CalendarControllerDate;
