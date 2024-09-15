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
`;

export const ColumnsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const LoadingStyle = styled.div`
 position: "absolute;
 top: 50%;
`;