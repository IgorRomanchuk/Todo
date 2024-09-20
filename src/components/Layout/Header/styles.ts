import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #de7f0e;
  display: flex;
  padding: 0 10px; 
`;

export const HeaderContainerStyle = styled.div`
  max-width: 1400px;
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  height: 45px;
`;

export const HeaderListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  flex-grow: 1;
  fontSize: 20px;
  color: white;
  font-weight: 600;
  padding: 10px 0;
  li {
    cursor: pointer;
  }
`;
