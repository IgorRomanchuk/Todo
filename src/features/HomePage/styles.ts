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
  @media (max-width: 900px) {
    margin-top: 250px;
  }
  @media (max-width: 610px) {
    margin-top: 350px;
  }
`;


