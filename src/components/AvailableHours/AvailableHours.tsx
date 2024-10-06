import { useEffect, useState } from "react";
import { ContainerStyle, HourStyle } from "./styles";
import ScheduleService from "../../service/schedule.service";

type Props = {
  setHour: (e: string) => void;
  value: string;
  selectedDate: string;
};

export const AvailableHours = ({ setHour, value, selectedDate }: Props) => {
  const [availableHours, setAvailableHours] = useState([]);

  const getAvailableHours = async (date: string) => {
    try {
      const data = await ScheduleService.getAvailableHours({ date });
      setAvailableHours(
        data?.hours.length > 3
          ? data?.hours.split(", ")
          : data?.hours.trim().split(" ")
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setHour("");
    getAvailableHours(selectedDate);
  }, [selectedDate]);

  return (
    <ContainerStyle>
      {!!availableHours?.length &&
        availableHours[0] !== "" &&
        availableHours.map((item) => (
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
