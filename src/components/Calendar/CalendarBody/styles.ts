import { css, styled } from "styled-components";

export const CalendarBodyStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  max-width: 350px;
`;

export const DayTextStyle = styled.span<{ $active?: boolean }>`
  margin: 1px;
  font-size: 15px;
  cursor: pointer;
  color: black;
  font-weight: 600;
  text-align: center;
  ${(props) =>
    props.$active &&
    css`
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
