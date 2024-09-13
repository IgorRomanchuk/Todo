import { styled } from "styled-components";

export const CalendarStyle = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
`;

export const CalendarHeaderStyle = styled.div`
  display: flex;
  justify-content: "space-between";
`;

export const CalendarBodyStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 350px;
  min-height: 196px;
`;

export const ArrowLeftStyle = styled.span`
  cursor: pointer;
  margin-right: 15px;
`;

export const ArrowRightStyle = styled.span`
  cursor: pointer;
  margin-left: 15px;
`;