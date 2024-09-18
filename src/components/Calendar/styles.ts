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
  @media (max-width: 610px) {
    left: 50%;
    transform: translateX(-50%);
  }
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