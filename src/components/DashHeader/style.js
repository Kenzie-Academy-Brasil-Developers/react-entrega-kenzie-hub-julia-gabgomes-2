import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 131px;
  border-bottom: solid 0.5px var(--gray-0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashHeaderContainer = styled.div`
  margin: 0px 12px;
  height: 100%;
  width: 100%;
  max-width: 650px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
