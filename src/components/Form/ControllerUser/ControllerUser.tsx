import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { ErrorTextStyle } from "./styles";
import { SelectUser } from "./components/SelectUser/SelectUser";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  required: boolean;
  error?: FieldError;
}

export const ControllerUser = <T extends FieldValues>({
  name,
  control,
  required,
  error,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        return (
          <>
            <SelectUser onChange={field.onChange} />
            {error && <ErrorTextStyle>{`You have to select a user`}</ErrorTextStyle>}
          </>
        );
      }}
    />
  );
};
