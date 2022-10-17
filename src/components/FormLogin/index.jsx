import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";

import { StyledText } from "../../styles/typography";
import { Label } from "../../styles/label";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/button";

export const FormLogin = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <div>
      <StyledText typo="title-3" color="gray-0" tag="h2">
        Login
      </StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <StyledText typo="headline" color="gray-0" tag="h3">
            E-mail
          </StyledText>
          <Input
            type="email"
            id="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
        </Label>
        <Label>
          <StyledText typo="headline" color="gray-0" tag="h3">
            Senha
          </StyledText>
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
        </Label>
        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </form>
    </div>
  );
};
