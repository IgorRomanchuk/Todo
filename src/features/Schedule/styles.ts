import styled from "styled-components";

export const SchedulePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const CalendarContainerStyle = styled.div`
  display: inline-block;
  @media (max-width: 950px) {
    margin: 0 auto;
    margin-bottom: 20px
  }
`;

export const TitleStyle = styled.h1`
  font-size: 2em;
  color: white;
`;

export const ButtonStyle = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 10px 0;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;
