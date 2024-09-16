import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";
import { ButtonStyle, ContainerStyle, InputStyle } from "./styles";

type Props = {
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  period: number[];
  month: number;
  year: number;
};

const Input = ({ setTodoList, period, month, year }: Props) => {
  const [value, setValue] = useState("");

  const handleSetTodoList = () => {
    if (!value || period.length > 1 || !period.length) return null;
    setTodoList((prev) => [
      ...prev,
      {
        value,
        date: new Date(year, month - 1, period[0] + 1),
        status: "todo",
        id: new Date().toISOString(),
      },
    ]);
    setValue("");
  };

  return (
    <ContainerStyle>
      <InputStyle
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        autoFocus={true}
      />
      <ButtonStyle onClick={handleSetTodoList}>Add todo</ButtonStyle>
    </ContainerStyle>
  );
};

export default Input;
