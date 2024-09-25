import { FieldError, UseFormRegister } from "react-hook-form";
import { IForm } from "../../../models/form.model";

type Props = {
  name: "title" | "description" | "status" | "date" | "id";
  register: UseFormRegister<IForm>;
  required?: boolean;
  error?: FieldError;
};

const Input = ({
  name,
  register,
  required = false,
  error,
  ...props
}: Props) => {
  return (
    <>
      <input placeholder={name} {...register(name, { required })} {...props} />
      {error && <p>{`${name} is required`}</p>}
    </>
  );
};

export default Input;
