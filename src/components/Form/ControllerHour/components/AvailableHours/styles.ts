import styled, { css } from "styled-components";

export const ContainerStyle = styled.div`
  width: calc(100% - 20px);
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
`;

export const HourStyle = styled.p<{
  $active?: boolean;
}>`
  cursor: pointer;
  padding: 2px;
  border-radius: 5px;
  ${(props) =>
    props.$active &&
    css`
      background-color: black;
      color: white;
    `};
`;
