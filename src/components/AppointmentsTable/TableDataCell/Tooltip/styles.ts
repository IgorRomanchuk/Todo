import { styled } from "styled-components";

export const TooltipStyle = styled.div`
  width: 120px;
  background-color: #f0f0f0;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  z-index: 50;
  bottom: 105%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
`;