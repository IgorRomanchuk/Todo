import styled from "styled-components";

const WeatherContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  max-width: 250px
`;

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
        <span>{weather.forecast.forecastday[0].day.maxtemp_c}&deg;</span>
      )}
      {weather && (
        <span>{weather.forecast.forecastday[0].day.mintemp_c}&deg;</span>
      )}
    </WeatherContainer>
  );
};

export default Weather;
