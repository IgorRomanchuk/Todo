import { FieldError, UseFormRegister } from "react-hook-form";
import { CreateTodoModel } from "../../../models/form.model";
import { IntputStyle } from "./styles";

type Props = {
  // name: "title" | "description" | "status" | "date" | "id";
  name: any;
  register: UseFormRegister<CreateTodoModel | any>;
  required?: boolean;
  valueAsNumber?: boolean
  error?: FieldError;
};

const Input = ({
  name,
  register,
  required = false,
  valueAsNumber = false,
  error,
  ...props
}: Props) => {
  return (
    <>
      <IntputStyle placeholder={name} {...register(name, { required, valueAsNumber })} {...props} />
      {error && <p>{`${name} is required`}</p>}
    </>
  );
};

export default Input;
