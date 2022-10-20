import { createContext } from "react";

import { api } from "../services/api";

import { useContext } from "react";
import { UserContext } from "./UserContext";

import { notifySuccess, notifyError } from "../notifications/index.js";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);

  const registerTech = async (data) => {
    try {
      const request = await api.post("/users/techs", data);
      setTechs((previousTechs) => [...previousTechs, request.data]);
      notifySuccess("A tecnologia foi registrada com sucesso!");
    } catch (error) {
      notifyError(`${error.response.data.message}`);
    }
  };

  const deleteTech = async (id) => {
    try {
      const request = await api.delete(`/users/techs/${id}`);
      setTechs(techs.filter((element) => element.id !== id));
      notifySuccess("A tecnologia excluída com sucesso!");
    } catch (error) {
      notifyError(`${error.response.data.message}`);
    }
  };

  return (
    <TechContext.Provider value={{ deleteTech, registerTech }}>
      {children}
    </TechContext.Provider>
  );
};
