type Props = {
  name: string;
  register: any;
};

const SelectForm = ({ name, register, ...props }: Props) => {
  return (
    <select {...register(name)} {...props}>
      <option value="todo">Todo</option>
      <option value="in progress">In progress</option>
      <option value="done">Done</option>
    </select>
  );
};

export default SelectForm;
