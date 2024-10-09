import { css, styled } from "styled-components";

export const TableHeadStyle = styled.thead`
  width: calc(100% - 8px);
  display: table;
  table-layout: fixed;

  th {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #f0f0f0;
  }
`;

export const ActiveDayStyle = styled.p<{
  $active?: boolean;
}>`
  color: black;
  ${(props) =>
    props.$active &&
    css`
      background-color: black;
      border-radius: 50%;
      color: white;
      height: 20px;
      width: 20px;
      margin: 0 auto;
    `};
`;

export const ThStyle = styled.th`
  background-color: #f0f0f0;
  font-size: 14px;
  height: 40px;
  padding: 10px;
  border: 1px solid #000;
  text-align: center;
`;