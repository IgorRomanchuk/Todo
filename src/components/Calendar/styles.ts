import { css, styled } from "styled-components";

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
  @media (max-width: 610px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CalendarHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
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

export const DayTextStyle = styled.span<{ $active?: boolean; }>`
  margin: 1px;
  font-size: 15px;
  cursor: pointer;
  color: black;
  font-weight: 600;
  ${props => props.$active && css`
    border-radius: 50%;
    background-color: #282c34;
    color: white;
  `}
`;

export const DayNameTextStyle = styled.span`
  padding: 5px 0; 
  margin: 1px;
  font-size: 15px;
  color: black;
  font-weight: 600;
`;

export const ButtonStyle = styled.button`
  color: black;
  font-size: 15px;
  font-weight: 600;
  background-color: white;
  padding: 2px 8px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
`
