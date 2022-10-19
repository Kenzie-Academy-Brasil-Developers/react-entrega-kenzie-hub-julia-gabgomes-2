import styled from "styled-components";

export const Header = styled.header`
  height: 131px;
  border-bottom: solid 0.5px var(--gray-0);
`;

export const Container = styled.div`
  margin: 0px 12px;
  height: 100%;

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
