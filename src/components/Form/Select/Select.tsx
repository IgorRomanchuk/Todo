import { UseFormRegister } from "react-hook-form";
import { IForm } from "../../../models/form.model";

type Props = {
  name: "title" | "description" | "status" | "date" | "id";
  register: UseFormRegister<IForm>;
};

const Select = ({ name, register, ...props }: Props) => {
  return (
    <select {...register(name)} {...props}>
      <option value="todo">Todo</option>
      <option value="in progress">In progress</option>
      <option value="done">Done</option>
    </select>
  );
};

export default Select;
