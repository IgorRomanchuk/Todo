import { styled } from "styled-components";

export const ImageContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IconStyle = styled.img`
  width: 25px;
  height: 25px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const TextTitleStyle = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-left: 5px;
`;

export const TextDescriptionStyle = styled.p`
  padding-left: 5px;
  font-weight: 500;
`;
