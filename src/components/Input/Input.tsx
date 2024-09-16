import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";
import { ButtonStyle, ContainerStyle, InputStyle } from "./styles";

type Props = {
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  day: number[];
  month: number;
  year: number;
};

const Input = ({ setTodoList, day, month, year }: Props) => {
  const [value, setValue] = useState("");

  const handleSetTodoList = () => {
    if (!value || day.length > 1 || !day.length) return null;
    setTodoList((prev) => [
      ...prev,
      {
        value,
        date: new Date(year, month - 1, day[0] + 1),
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
