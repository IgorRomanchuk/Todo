import { styled } from "styled-components";

export const ContainerStyle = styled.div`
  background-color: white;
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  width: 205px;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-grow: 1;
  cursor: grab;
  &:active {
    opacity: 0.7;
    border-radius: 10px;
  }
`;

export const CardStyle = styled.div`
  padding: 8px 12px;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const ImageContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SaveIconStyle = styled.img`
  align-self: end;
  &:hover {
  transform: scale(1.1)
  }
`

export const IconStyle = styled.img`
  &:hover {
    transform: scale(1.1)
  }
`