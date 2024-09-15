import { TextStyle, WeatherContainer } from "./styles";

type Props = {
  weather: any;
  error: boolean;
};

const Weather = ({ weather, error }: Props) => {
  if (error) {
    return <WeatherContainer>you have reached the limit, buy premiun plan</WeatherContainer>;
  }

  return (
    <WeatherContainer>
      {weather && (
        <img height={64} width={64} src={weather.forecast.forecastday[0].day.condition.icon} alt="" />
      )}
      {weather && (
        <TextStyle>{weather.forecast.forecastday[0].day.maxtemp_c}&deg;</TextStyle>
      )}
      {weather && (
        <TextStyle>{weather.forecast.forecastday[0].day.mintemp_c}&deg;</TextStyle>
      )}
    </WeatherContainer>
  );
};

export default Weather;
