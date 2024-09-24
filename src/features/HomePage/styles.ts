import { styled } from "styled-components";

export const HomePageStyle = styled.div`
  text-align: center;
  position: relative;
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const TitleStyle = styled.h1`
  margin-top: 100px;
  margin-bottom: 0;
  @media (max-width: 900px) {
    margin-top: 150px;
  }
`;



