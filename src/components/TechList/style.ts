import styled from "styled-components";

export const StyledLi = styled.li`
  width: 100%;
  background-color: var(--gray-4);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  border-radius: 4.06066px;

  &hover {
    background-color: var(--gray-2);
  }

  svg {
    color: var(--gray-0);
    height: 14px;
    width: 14px;
  }
`;
