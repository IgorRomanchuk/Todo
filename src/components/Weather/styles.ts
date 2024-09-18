import { styled } from "styled-components";

export const WeatherContainer = styled.div`
  position: absolute;
  top: 1%;
  left: 290px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  max-width: 250px;
  color: white;
  @media (max-width: 900px) {
    transform: scale(2);
    top: 10%;
    left: 350px;
  };
  @media (max-width: 610px) {
    top: 30%;
    left: 50%;
    transform: translateX(-50%) scale(2);
  }
  @media (max-width: 328px) {
    transform: translateX(-50%) scale(1.5);
  }
`;

export const TextStyle = styled.span`
  color: white;
`;
