import { useEffect, useState } from "react";
import { ContainerStyle, HourStyle } from "./styles";
import ScheduleService from "src/services/schedule.service";

type Props = {
  onChange: (e: string) => void;
  value: string;
  selectedDate: string;
  selectedHour: string;
};

export const AvailableHours = ({ onChange, value, selectedDate, selectedHour }: Props) => {
  const [availableHours, setAvailableHours] = useState<string[] | string>([]);

  const getAvailableHours = async (date: string) => {
    try {
      const { hours } = await ScheduleService.getAvailableHours({ date });

      if (hours) {
        const a = hours.replace(/\s+/g, "");
        setAvailableHours(a.split(",").map((item: string) => `${item}:00`));
      } else {
        setAvailableHours("no hours available, please choose another day");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (selectedHour) onChange(selectedHour);
  }, []);

  useEffect(() => {
    onChange('')
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
            {item}
          </HourStyle>
        ))
      ) : (
        <p>{availableHours}</p>
      )}
    </ContainerStyle>
  );
};
