import { css, styled } from "styled-components";

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
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenuStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  flex-grow: 1;
  fontsize: 20px;
  color: white;
  font-weight: 600;
  padding: 10px 0;
  li {
    cursor: pointer;
  }
`;

export const HeaderMenuItemStyle = styled.li<{ $active?: boolean }>`
  cursor: pointer;
  color: white;
  ${(props) =>
    props.$active &&
    css`
      color: black;
    `}
`;

export const HeaderSignOutStyle = styled.p`
  cursor: pointer;
  color: white;
`;
