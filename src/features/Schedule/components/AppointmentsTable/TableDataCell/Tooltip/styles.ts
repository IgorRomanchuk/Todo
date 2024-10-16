import { styled } from "styled-components";

export const TooltipStyle = styled.div`
  width: 120px;
  background-color: #f0f0f0;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  bottom: 115%; 
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  border: 1px solid black;

  &::after {
    content: "";
    position: absolute;
    top: 100%; 
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
    border-width: 6px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
