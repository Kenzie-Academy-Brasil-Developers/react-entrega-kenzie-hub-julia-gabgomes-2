import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const handleClick = () => {
    registerUser();
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Registar usuário
      </button>
    </>
  );
};
