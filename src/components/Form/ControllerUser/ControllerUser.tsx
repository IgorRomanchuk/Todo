import { Control, Controller, FieldError, FieldValues, Path, useWatch } from "react-hook-form";
import { ErrorTextStyle } from "./styles";
import { SelectUser } from "./components/SelectUser/SelectUser";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  required: boolean;
  error?: FieldError;
  setValue: (name: Path<T>, value: null) => void;
}

export const ControllerUser = <T extends FieldValues>({
  name,
  control,
  required,
  error,
}: Props<T>) => {
  const selectedUser = useWatch({ control, name: "user_id" as Path<T> });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        return (
          <>
            <SelectUser selectedUser={selectedUser} onChange={field.onChange} />
            {error && <ErrorTextStyle>{`You have to select a user`}</ErrorTextStyle>}
          </>
        );
      }}
    />
  );
};
