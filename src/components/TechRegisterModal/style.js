import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 135vh;

  background-color: rgba(33, 37, 41, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  border-radius: 4px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
`;

export const ModalHeader = styled.div`
  padding: 18px 24px;
  background-color: var(--gray-2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px 4px 0px 0px;

  span {
    color: var(--gray-0);

    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const ModalForm = styled.form`
  background-color: var(--gray-4);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 24px;
  gap: 18px;

  border-radius: 0px 0px 4px 4px;

  select {
    padding: 0px 16.2426px;
    height: 48px;
    width: 100%;
    background: var(--gray-2);

    border: 1.2182px solid var(--gray-2);
    border-radius: 4px;

    &focus {
      border: 1.2182px solid var(--gray-0);
    }
  }
`;
