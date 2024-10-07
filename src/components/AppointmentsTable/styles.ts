import styled from "styled-components";

export const ContainerStyle = styled.div`
  position: relative;
`;

export const CardStyle = styled.div`
  padding: 8px 12px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  p {
    font-size: 10px;
  }
`;

export const SwitchWeekContainerStyle = styled.div`
  position: absolute;
  top: -5%;
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeadStyle = styled.thead`
  width: calc(100% - 17px);
  display: table;
  table-layout: fixed;
`;

export const TableBodyStyle = styled.tbody`
  display: block;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;

export const ThStyle = styled.th`
  background-color: #f0f0f0;
  font-size: 14px;
  height: 40px;
  padding: 10px;
  border: 1px solid #000;
  text-align: center;
`;

export const TdStyle = styled.td`
  height: 40px;
  padding: 10px;
  border: 1px solid #000;
  text-align: center;
  background-color: white;
  font-size: 10px;
`;
