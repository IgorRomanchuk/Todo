import { Control, Controller, FieldValues, Path } from "react-hook-form";
import AvailableHours from "../../AvailableHours";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  getValues: any
}

export const ControllerHour = <T extends FieldValues>({
  name,
  control,
  getValues
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <AvailableHours
            getValues={getValues}
            setHour={field.onChange}
            value={field.value}
          />
        );
      }}
    />
  );
};

export default ControllerHour;
