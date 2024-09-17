import { css, styled } from "styled-components";

export const DropAreaStyle = styled.div<{ $showDrop?: boolean }>`
  opacity: 0;
  height: 10px;

  ${(props) =>
    props.$showDrop &&
    css`
      width: 205px;
      margin: 0 auto;
      height: 80px;
      color: #dcdcdc;
      border: 1px dashed #dcdcdc;
      border-radius: 10px;
      padding: 15px;
      opacity: 1;
      transition: all 0.2s ease-in-out;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    `}
`;
