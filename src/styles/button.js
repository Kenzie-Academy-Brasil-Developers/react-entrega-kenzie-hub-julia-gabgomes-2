import styled from "styled-components";

export const ButtonPrimary = styled.button`
  height: 48px;
  width: 100%;
  padding: 0px 22px;
  background-color: var(--color-primary);

  border-radius: 4px;

  font-weight: 600;
  font-size: 16px;
  color: var(--gray-0);

  transition: 0.4s;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

export const ButtonGray = styled.button`
  height: 48px;
  width: 100%;
  padding: 0px 22px;
  background-color: var(--gray-1);

  border-radius: 4px;

  font-weight: 600;
  font-size: 16px;
  color: var(--gray-0);

  transition: 0.4s;

  :hover {
    background-color: var(--gray-2);
  }
`;

export const ButtonSmall = styled.button`
  height: 32px;
  padding: 8px 16px;
  background-color: var(--gray-3);

  border-radius: 4px;

  font-weight: 600;
  font-size: 16px;
  color: var(--gray-0);

  transition: 0.4s;

  :hover {
    background-color: var(--gray-2);
  }
`;
