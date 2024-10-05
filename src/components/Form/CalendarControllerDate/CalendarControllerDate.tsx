import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Calendar from "../../Calendar/Calendar";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  availableDates?: string[];
}

const CalendarControllerDate = <T extends FieldValues>({
  name,
  control,
  availableDates,
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
            availableDates={availableDates}
          />
        );
      }}
    />
  );
};

export default CalendarControllerDate;
