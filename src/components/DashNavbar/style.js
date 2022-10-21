import styled from "styled-components";

export const Navbar = styled.nav`
  height: 72px;
  border-bottom: solid 0.5px var(--gray-0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 650px;
  margin: 0px 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
