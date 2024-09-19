import { useState } from "react";
import { TodoModel } from "../../../models/todoItem.model";
import { ButtonStyle, ContainerStyle, InputStyle } from "./styles";
import moment, { Moment } from "moment";

type Props = {
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  period: number[];
  date: Moment;
};

const Input = ({ setTodoList, period, date }: Props) => {
  const [value, setValue] = useState("");
  const handleSetTodoList = () => {
    if (!value || period.length > 1 || !period.length) return null;
    setTodoList((prev) => [
      ...prev,
      {
        value,
        date: moment(date).add({ days: period[0] }),
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
