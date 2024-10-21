import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import AvailableHours from "./components/AvailableHours";
import { useWatch } from "react-hook-form";
import { ErrorTextStyle } from "./styles";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  required: boolean;
  error?: FieldError;
  setValue: (name: Path<T>, value: null) => void;
}

export const ControllerHour = <T extends FieldValues>({
  name,
  control,
  required,
  error,
}: Props<T>) => {
  const selectedDate = useWatch({ control, name: "date" as Path<T> });
  const selectedHour = useWatch({ control, name: "hour" as Path<T> });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        return (
          <>
            <AvailableHours
              onChange={field.onChange}
              value={field.value}
              selectedDate={selectedDate}
              selectedHour={selectedHour}
            />
            {error && <ErrorTextStyle>{`You have to choose the time`}</ErrorTextStyle>}
          </>
        );
      }}
    />
  );
};

export default ControllerHour;
