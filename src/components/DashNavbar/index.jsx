import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { Navbar, NavContainer } from "./style";
import { ButtonSmall } from "../../styles/button";

export const DashNavbar = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("@KENZIE_HUB:TOKEN");
    localStorage.removeItem("@KENZIE_HUB:USER_ID");
    setUser(null);
    navigate("/");
  };

  return (
    <Navbar>
      <NavContainer>
        <img src={logo} alt="Logo da empresa Kenzie Hub" />
        <ButtonSmall type="button" onClick={() => handleClick()}>
          Sair
        </ButtonSmall>
      </NavContainer>
    </Navbar>
  );
};
