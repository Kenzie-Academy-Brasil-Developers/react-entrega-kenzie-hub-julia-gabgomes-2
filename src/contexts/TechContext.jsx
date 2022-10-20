import { createContext } from "react";

import { api } from "../services/api";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);

  console.log(techs);

  const registerTech = async (data) => {
    try {
      const request = await api.post("/users/techs", data);
      setTechs((previousTechs) => [...previousTechs, request.data]);
    } catch (error) {
      // console.log(error);
      //toast => não foi possível excluir a tecnologia, tente novamente
    }
  };

  const deleteTech = async (id) => {
    try {
      const request = await api.delete(`/users/techs/${id}`);
      setTechs(techs.filter((element) => element.id !== id));
    } catch (error) {
      // console.log(error);
      //toast => não foi possível excluir a tecnologia, tente novamente
    }
  };

  return (
    <TechContext.Provider value={{ deleteTech, registerTech }}>
      {children}
    </TechContext.Provider>
  );
};
