import { useEffect, useState } from "react";
import { ContainerStyle, HourStyle } from "./styles";
import ScheduleService from "../../service/schedule.service";

type Props = {
  setHour: any;
  getValues: any;
  value: any;
};

export const AvailableHours = ({ setHour, getValues, value }: Props) => {
  const [hours, setAvailableHours] = useState([]);

  const getAvailableHours = async (date: string) => {
    const data = await ScheduleService.getAvailableHours({ date });
    console.log(data);
    const a =
      data?.hours.length > 3
        ? data?.hours.split(", ")
        : data?.hours.trim().split(" ");
    setAvailableHours(a);
  };

  useEffect(() => {
    setHour("");
    getAvailableHours(getValues("date"));
  }, [getValues("date")]);

  return (
    <ContainerStyle>
      {!!hours?.length &&
        hours[0] !== "" &&
        hours.map((item) => (
          <HourStyle
            $active={item === value ? true : false}
            onClick={() => setHour(item)}
            key={item}
          >
            {`${item}:00`}
          </HourStyle>
        ))}
    </ContainerStyle>
  );
};
