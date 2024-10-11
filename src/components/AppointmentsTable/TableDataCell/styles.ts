import { css, styled } from "styled-components";

export const ImageStyle = styled.img`
  position: absolute;
  top: 2%;
  right: 2%;
  height: 10px;
  width: 10px;
`;

export const TdContentStyle = styled.div`
  height: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const TdStyle = styled.td<{
  $pointer?: boolean;
}>`
  padding: 10px;
  border: 1px solid #000;
  text-align: center;
  background-color: white;
  font-size: 10px;
  ${(props) =>
    props.$pointer &&
    css`
      cursor: pointer;
      position: relative;
    `};

  @media (max-width: 950px) {
    font-size: 8px;
    word-break: break-all;
  }
`;
