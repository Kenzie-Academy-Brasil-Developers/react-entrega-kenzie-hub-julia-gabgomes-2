import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";

import { StyledText } from "../../styles/typography";
import { Label } from "../../styles/label";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/button.js";

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => registerUser(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
      </Label>
    </form>
  );
};
