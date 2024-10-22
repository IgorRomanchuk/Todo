import styled, { css } from "styled-components";

export const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerStepsStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentContainerStyle = styled.div`
  width: 220px;
  height: 220px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StepItemStyle = styled.div<{
  $complited: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &:not(:first-child)::before {
    content: "";
    width: 100%;
    top: 50%;
    transform: translateX(-50%);
    height: 3px;
    background-color: white;
    position: absolute;
    ${(props) =>
      props.$complited &&
      css`
        background-color: green;
      `};
  }
`;

export const StepStyle = styled.div<{
  $active: boolean;
  $complite: boolean;
}>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  background-color: grey;
  color: white;
  border-radius: 50%;
  pointer-events: none;
  ${(props) =>
    props.$active &&
    css`
      background-color: #de7f0e;
      cursor: pointer;
      pointer-events: auto;
    `};
  ${(props) =>
    props.$complite &&
    css`
      background-color: green;
      cursor: pointer;
      pointer-events: auto;
    `};
`;

export const ContainerButtonsStyle = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const ButtonStyle = styled.button<{
  $disabled?: boolean;
}>`
  height: 36px;
  min-width: 100px;
  padding: 10px;
  background-color: #de7f0e;
  border-radius: 5px;
  color: white;
  margin: 0 10px;
  cursor: pointer;
  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      background-color: #bd6c0d;
    `}
`;

export const ErrorTextStyle = styled.p`
  margin: 10px 0;
  text-align: center;
`;
