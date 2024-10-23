import { styled } from "styled-components";

export const TooltipContainerStyle = styled.div`
  padding: 15px;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 100%;
`;

export const TooltipStyle = styled.div`
  width: 120px;
  background-color: #f0f0f0;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid black;

  &::after {
    content: "";
    position: absolute;
    top: 99%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #f0f0f0 transparent transparent transparent;
  }

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent;
  }
`;
