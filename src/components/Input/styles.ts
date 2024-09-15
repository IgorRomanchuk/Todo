import { styled } from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const InputStyle = styled.input`
  font-size: 12px;
  width: 200px;
  &:focus {
    border: 3px solid red;
    box-shadow: 0px 0px 2px red;
  }
`;