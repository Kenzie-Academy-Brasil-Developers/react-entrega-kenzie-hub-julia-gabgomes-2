import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();
