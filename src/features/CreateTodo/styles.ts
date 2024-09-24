import { styled } from "styled-components";

export const FormBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  width: 220px;
  gap: 30px;
  margin: 0 auto;

  input,
  select {
    width: 100%;
    height: 30px;
    padding: 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid black;
  }

  input {
    padding-left: 5px;
  }
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
