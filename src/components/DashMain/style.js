import styled from "styled-components";

export const Main = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DashMainContainer = styled.div`
  padding: 36px 12px;
  width: 100%;
  max-width: 674px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TechHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  width: 100%;
  background-color: var(--gray-3);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 19px;
  gap: 16px;

  border-radius: 4px;
`;
