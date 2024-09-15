import { styled } from "styled-components";

export const CalendarStyle = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 10px;
  left: 10px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
`;

export const CalendarHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CalendarHeaderTextStyle = styled.p`
  font-size: 15px;
  width: 115px;
`;

export const CalendarBodyStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  max-width: 350px;
`;

export const ArrowLeftStyle = styled.span`
  cursor: pointer;
  margin-right: 15px;
  font-size: 15px;
  color: black;
  font-weight: 600;
`;

export const ArrowRightStyle = styled.span`
  cursor: pointer;
  margin-left: 15px;
  font-size: 15px;
  color: black;
  font-weight: 600;
`;

export const DayTextStyle = styled.span`
  margin: 1px;
  font-size: 15px;
  cursor: pointer;
  color: black;
  font-weight: 600;
`;

export const DayNameTextStyle = styled.span`
  padding: 5px 0; 
  margin: 1px;
  font-size: 15px;
  color: black;
  font-weight: 600;
`;
