import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/userValidations";

import { StyledText } from "../../styles/typography";
import { Label } from "../../styles/label";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/button";
import { RegisterForm } from "./style";

interface IOnSubmit {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

type IUserRegisterData = Omit<IOnSubmit, "confirmPassword">;

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmit>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: IUserRegisterData) => registerUser(data);

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Nome
        </StyledText>
        <Input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
      </Label>
      <p>{errors.name?.message}</p>
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
      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Confirmar senha
        </StyledText>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirme a senha"
          {...register("confirmPassword")}
        />
      </Label>
      <p>{errors.confirmPassword?.message}</p>
      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Bio
        </StyledText>
        <Input
          type="text"
          id="bio"
          placeholder="Digite aqui sua bio"
          {...register("bio")}
        />
      </Label>
      <p>{errors.bio?.message}</p>

      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Contato
        </StyledText>
        <Input
          type="text"
          id="contact"
          placeholder="Digite aqui seu contato"
          {...register("contact")}
        />
      </Label>
      <p>{errors.contact?.message}</p>

      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Selecionar módulo
        </StyledText>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </Label>
      <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
    </RegisterForm>
  );
};
