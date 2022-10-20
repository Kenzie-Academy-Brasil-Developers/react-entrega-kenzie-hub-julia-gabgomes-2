import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/userValidations";

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
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

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
        <p>{errors.email?.message}</p>
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
        <p>{errors.password?.message}</p>
        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </form>
    </div>
  );
};
