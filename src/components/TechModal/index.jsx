import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

import { useForm } from "react-hook-form";

export const TechModal = ({ setIsModalOpen }) => {
  const { registerTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerTech(data);
  };

  return (
    <div>
      <div>
        <h2>Cadastrar tecnologia</h2>
        <span onClick={() => setIsModalOpen(false)}>X</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome
          <input
            type="text"
            id="title"
            placeholder="Escreva aqui a tecnologia"
            {...register("title", { required: true })}
          />
        </label>
        {errors.title && <span>O campo tecnologia é obrigatório</span>}
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Cadastrar tecnologia</button>
      </form>
    </div>
  );
};
