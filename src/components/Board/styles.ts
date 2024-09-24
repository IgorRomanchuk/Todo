import { styled } from "styled-components";

export const ColumnsContainerStyle = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ColumnStyle = styled.div`
  margin: 0 5px;
  margin-bottom: 20px;
`;