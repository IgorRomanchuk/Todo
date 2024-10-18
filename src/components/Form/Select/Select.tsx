import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { SelectStyle } from "./styles";

interface Props<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
}

export const Select = <T extends FieldValues>({ name, register, ...props }: Props<T>) => {
  return (
    <SelectStyle {...register(name)} {...props}>
      <option value="todo">Todo</option>
      <option value="in progress">In progress</option>
      <option value="done">Done</option>
    </SelectStyle>
  );
};
