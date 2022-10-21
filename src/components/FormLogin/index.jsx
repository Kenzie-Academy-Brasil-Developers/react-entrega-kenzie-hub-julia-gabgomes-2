import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/userValidations";

import { StyledText } from "../../styles/typography";
import { Label } from "../../styles/label";
import { Input } from "../../styles/input";
import { ButtonPrimary, ButtonGray } from "../../styles/button";
import { FormLoginContainer, Form, FormFooter } from "./style";

export const FormLogin = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <FormLoginContainer>
      <StyledText typo="title-3" color="gray-0" tag="h2">
        Login
      </StyledText>

      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <StyledText typo="helper-text" color="gray-1" tag="p">
          {errors.email?.message}
        </StyledText>

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
        <StyledText typo="helper-text" color="gray-1" tag="p">
          {errors.password?.message}
        </StyledText>

        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </Form>

      <FormFooter>
        <StyledText typo="headline-bold" color="gray-1" tag="span">
          Ainda não possui uma conta?
        </StyledText>
        <Link to="/register">
          <ButtonGray type="button">Cadastre-se</ButtonGray>
        </Link>
      </FormFooter>
    </FormLoginContainer>
  );
};
