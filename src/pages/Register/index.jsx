import { Link } from "react-router-dom";

import { FormRegister } from "../../components/FormRegister";

import logo from "../../assets/logo.svg";
import { StyledText } from "../../styles/typography";
import {
  RegisterContainer,
  RegisterHeader,
  RegisterBox,
  RegisterBoxHeader,
} from "./style";
import { ButtonSmall } from "../../styles/button.js";

export const Register = () => {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <img src={logo} alt="Logo da empresa Kenzie Hub" />
        <Link to="/">
          <ButtonSmall type="button">Voltar</ButtonSmall>
        </Link>
      </RegisterHeader>
      <RegisterBox>
        <RegisterBoxHeader>
          <StyledText typo="title-3" color="gray-0" tag="h2">
            Crie sua conta
          </StyledText>
          <StyledText typo="headline" color="gray-0" tag="span">
            Rapido e grátis, vamos nessa
          </StyledText>
        </RegisterBoxHeader>
        <FormRegister />
      </RegisterBox>
    </RegisterContainer>
  );
};
