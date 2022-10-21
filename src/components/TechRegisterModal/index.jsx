import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

import { useForm } from "react-hook-form";

import { StyledText } from "../../styles/typography";
import { Label } from "../../styles/label";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/button";
import { ModalContainer, ModalBox, ModalHeader, ModalForm } from "./style";

export const TechModal = ({ setIsModalOpen }) => {
  const { registerTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerTech(data);
    setIsModalOpen(false);
  };

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader>
          <StyledText typo="title-3" color="gray-0" tag="h2">
            Cadastrar tecnologia
          </StyledText>
          <span
            typo="title-3"
            color="gray-0"
            tag="span"
            onClick={() => setIsModalOpen(false)}
          >
            X
          </span>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <StyledText typo="headline" color="gray-0" tag="h3">
              Nome
            </StyledText>
            <Input
              type="text"
              id="title"
              placeholder="Escreva aqui a tecnologia"
              {...register("title", { required: true })}
            />
          </Label>
          {errors.title && <span>O campo tecnologia é obrigatório</span>}
          <StyledText typo="headline" color="gray-0" tag="h3">
            Selecionar status
          </StyledText>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <ButtonPrimary type="submit">Cadastrar tecnologia</ButtonPrimary>
        </ModalForm>
      </ModalBox>
    </ModalContainer>
  );
};
