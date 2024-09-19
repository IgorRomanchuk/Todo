import { styled } from "styled-components";

export const ImageContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const IconStyle = styled.img`
  width: 25px;
  height: 25px;
  &:hover {
    transform: scale(1.1);
  }
`;