import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { IntputStyle } from "./styles";

interface Props<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  valueAsNumber?: boolean;
  error?: FieldError;
}

export const Input = <T extends FieldValues>({
  name,
  register,
  required = false,
  valueAsNumber = false,
  error,
}: Props<T>) => {
  return (
    <>
      <IntputStyle placeholder={name} {...register(name, { required, valueAsNumber })} />
      {error && <p>{`${name} is required`}</p>}
    </>
  );
};
