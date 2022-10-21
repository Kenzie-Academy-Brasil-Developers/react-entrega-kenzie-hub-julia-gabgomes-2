import styled from "styled-components";

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  select {
    padding: 0px 16.2426px;
    height: 48px;
    width: 100%;
    background: var(--gray-2);
    margin-bottom: 16px;

    border: 1.2182px solid var(--gray-2);
    border-radius: 4px;

    color: var(--gray-0);

    &focus {
      border: 1.2182px solid var(--gray-0);
    }
  }
`;
