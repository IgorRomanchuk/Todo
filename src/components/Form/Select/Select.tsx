import { UseFormRegister } from "react-hook-form";
import { CreateTodoModel } from "../../../models/form.model";
import { SelectStyle } from "./styles";

type Props = {
  name: "title" | "description" | "status" | "date" | "id";
  register: UseFormRegister<CreateTodoModel>;
};

const Select = ({ name, register, ...props }: Props) => {
  return (
    <SelectStyle {...register(name)} {...props}>
      <option value="todo">Todo</option>
      <option value="in progress">In progress</option>
      <option value="done">Done</option>
    </SelectStyle>
  );
};

export default Select;
