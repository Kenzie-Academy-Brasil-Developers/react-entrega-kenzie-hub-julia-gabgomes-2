import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { ContainerRow, Navbar } from "./style";
import { ButtonSmall } from "../../styles/button";

export const DashNavbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("@KENZIE_HUB:TOKEN");
    localStorage.removeItem("@KENZIE_HUB:USER_ID");
    navigate("/");
  };

  return (
    <Navbar>
      <ContainerRow>
        <img src={logo} alt="Logo da empresa Kenzie Hub" />
        <ButtonSmall type="button" onClick={() => handleClick()}>
          Sair
        </ButtonSmall>
      </ContainerRow>
    </Navbar>
  );
};
