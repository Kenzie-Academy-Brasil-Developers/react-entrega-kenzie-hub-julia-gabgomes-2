import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

export const registerSchema = yup
  .object({
    name: yup.string().required("O campo nome é obrigatório"),
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "Deve conter um caracter especial")
      .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("O campo bio é obrigatório"),
    contact: yup.string().required("O campo contato é obrigatório"),
  })
  .required();
