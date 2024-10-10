import styled from "styled-components";

export const ContainerStyle = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
`;

export const ContantStlye = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ImageStyle = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 20px;
  height: 20px;
`;
