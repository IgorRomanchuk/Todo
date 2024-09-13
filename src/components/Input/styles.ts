import { styled } from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
`;

export const InputStyle = styled.input`
  font-size: 12px;
  width: 200px;
  &:focus {
    border: 3px solid red;
    box-shadow: 0px 0px 2px red;
  }
`;