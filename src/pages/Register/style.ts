import styled from "styled-components";

export const RegisterContainer = styled.div`
  margin: 48px 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterHeader = styled.div`
  width: 100%;
  max-width: 369px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 98px;
    height: 16px;
  }
`;

export const RegisterBox = styled.div`
  width: 100%;
  max-width: 369px;
  background-color: #212529;
  padding: 34px 18px;

  box-shadow: 0px 4px 34px -8px rgb(0 0 0 / 25%);
  border-radius: 4px;
`;

export const RegisterBoxHeader = styled.div`
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
