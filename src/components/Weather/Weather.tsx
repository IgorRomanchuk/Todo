import { useEffect, useState } from "react";
import { TextStyle, WeatherContainer } from "./styles";
import WeatherService from "../../service/weather.service";
import { Moment } from "moment";

type Props = {
  period: number[];
  date: Moment;
};

const Weather = ({ period, date }: Props) => {
  const [weather, setWeather] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    WeatherService.getWeather(date.format("YYYY-MM"), period)
      .then((res) => {
        setWeather(res.data);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [period, date]);

  if (loading) {
    return <WeatherContainer>...Loading</WeatherContainer>;
  }

  return (
    <WeatherContainer>
      {error ? (
        <div>you have reached the limit, buy premiun plan</div>
      ) : (
        <>
          {weather && (
            <>
              <img
                height={64}
                width={64}
                src={weather.forecast.forecastday[0].day.condition.icon}
                alt="weather"
              />
              <TextStyle>
                {weather.forecast.forecastday[0].day.maxtemp_c}&deg;
              </TextStyle>
              <TextStyle>
                {weather.forecast.forecastday[0].day.mintemp_c}&deg;
              </TextStyle>
            </>
          )}
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
