import { useState } from "react";
import { TodoModel } from "../../../models/todoItem.model";
import { ButtonStyle, ContainerStyle, InputStyle } from "./styles";
import { DateModel } from "../../../models/date.model";
import moment from "moment";

type Props = {
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  date: DateModel;
};

const Input = ({ setTodoList, date }: Props) => {
  const { year, month, period } = date;
  const [value, setValue] = useState("");

  const handleSetTodoList = () => {
    if (!value || period.length > 1 || !period.length) return null;
    setTodoList((prev) => [
      ...prev,
      {
        value,
        date: moment(`${year}-${month}-${period[0] + 1}`, "YYYY-MM-DD"),
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
