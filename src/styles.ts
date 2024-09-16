import { styled } from "styled-components";

export const AppStyle = styled.div`
  text-align: center;
`

export const HeaderStyle = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
export const TitleStyle = styled.h1`
  margin-top: 100px;
  @media (max-width: 900px) {
    margin-top: 250px;
  }
  @media (max-width: 610px) {
    margin-top: 350px;
  }
`;

export const ColumnsContainerStyle = styled.div`
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
`

export const LoadingStyle = styled.div`
 position: "absolute;
 top: 50%;
`;