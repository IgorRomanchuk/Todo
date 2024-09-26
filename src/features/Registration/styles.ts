import { styled } from "styled-components";

export const ContainerStyle = styled.div`
  min-height: 100vh;
  background-color: #7a5fd3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormBoxStyle = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonStyle = styled.button`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 0;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;
