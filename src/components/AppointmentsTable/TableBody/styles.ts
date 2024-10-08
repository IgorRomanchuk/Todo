import { styled } from "styled-components";

export const TableBodyStyle = styled.tbody`
  display: block;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;

export const ThStyle = styled.th`
  background-color: #f0f0f0;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #000;
  text-align: center;
`;
