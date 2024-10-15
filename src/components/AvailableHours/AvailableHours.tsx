import { useEffect, useState } from "react";
import { ContainerStyle, HourStyle } from "./styles";
import ScheduleService from "../../service/schedule.service";

type Props = {
  onChange: (e: string) => void;
  value: string;
  selectedDate: string;
};

export const AvailableHours = ({ onChange, value, selectedDate }: Props) => {
  const [availableHours, setAvailableHours] = useState<string[] | string>([]);

  const getAvailableHours = async (date: string) => {
    try {
      const data = await ScheduleService.getAvailableHours({ date });
      if (data?.hours) {
        const hours = data?.hours.replace(/\s+/g, "");
        setAvailableHours(hours.split(","));
      } else {
        setAvailableHours("no hours available, please choose another day");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    onChange("");
    getAvailableHours(selectedDate);
  }, [selectedDate]);

  return (
    <ContainerStyle>
      {Array.isArray(availableHours) ? (
        availableHours.map((item) => (
          <HourStyle
            $active={item === value ? true : false}
            onClick={() => onChange(item)}
            key={item}
          >
            {`${item}:00`}
          </HourStyle>
        ))
      ) : (
        <p>{availableHours}</p>
      )}
    </ContainerStyle>
  );
};
