import { useState } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  font-size: 12px;
  width: 200px;
  &:focus {
    border: 3px solid red;
    box-shadow: 0px 0px 2px red;
  }
`;

type Props = {
  setTodoList: (e: any) => void;
  day: number[];
  month: number;
  year: number;
};

const Input = ({ setTodoList, day, month, year }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <InputStyle
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        autoFocus={true}
      />
      <button
        onClick={() => {
          if (!value || day.length > 1) return null;
          setTodoList((prev: any) => [
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
    </div>
  );
};

export default Input;
