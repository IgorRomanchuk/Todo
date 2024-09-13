import { useState } from "react";
import { TodoModel } from "../../models/todoItem.model";
import { ContainerStyle, InputStyle } from "./styles";

type Props = {
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void
  day: number[];
  month: number;
  year: number;
};

const Input = ({ setTodoList, day, month, year }: Props) => {
  const [value, setValue] = useState("");
  return (
    <ContainerStyle>
      <InputStyle
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        autoFocus={true}
      />
      <button
        onClick={() => {
          if (!value || day.length > 1) return null;
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
        }}
      >
        Add todo
      </button>
    </ContainerStyle>
  );
};

export default Input;
