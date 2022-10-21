import { FormLogin } from "../../components/FormLogin";

import logo from "../../assets/logo.svg";
import { LoginContainer, LoginBox } from "./style";

export const Login = () => (
  <LoginContainer>
    <img src={logo} alt="Logo da empresa Kenzie Hub" />
    <LoginBox>
      <FormLogin />
    </LoginBox>
  </LoginContainer>
);
