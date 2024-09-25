import { Control, Controller } from "react-hook-form";
import Calendar from "../../Calendar/Calendar";
import { IForm } from "../../../models/form.model";

type Props = {
  name: "title" | "description" | "status" | "date" | "id";
  control: Control<IForm>;
};

const CalendarControllerDate = ({
  name,
  control,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return <Calendar date={field.value} setDate={field.onChange} />;
      }}
    />
  );
};

export default CalendarControllerDate;
