import { createContext, ReactNode } from "react";

import { api } from "../services/api";

import { useContext } from "react";
import { UserContext } from "./UserContext";

import { IUserTechs, IUserContext } from "./UserContext";

import axios from "axios";
import { notifySuccess, notifyError } from "../notifications/index";

//-----------------------------INTERFACES------------------------------//

interface ITechProviderProps {
  children: ReactNode;
}

interface IRegisterTechData {
  title: string;
  status: string;
}

interface IDeleteTechData {
  id: string;
}

interface ITechContext {
  deleteTech(id: IDeleteTechData): Promise<void>;
  registerTech(data: IRegisterTechData): Promise<void>;
}

//--------------------------------------------------------------------//

export const TechContext = createContext<ITechContext>({} as ITechContext);

export const TechProvider = ({ children }: ITechProviderProps) => {
  const { techs, setTechs } = useContext<IUserContext>(UserContext);

  const registerTech = async (data: IRegisterTechData): Promise<void> => {
    try {
      const request = await api.post<IUserTechs>("/users/techs", data);
      setTechs((previousTechs) => [...(previousTechs as any), request.data]);
      notifySuccess("Tecnologia registrada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(`${error.response?.data.message}`);
      }
    }
  };

  const deleteTech = async (id: IDeleteTechData): Promise<void> => {
    try {
      await api.delete<void>(`/users/techs/${id}`);
      notifySuccess("Tecnologia excluída com sucesso!");
      // setTechs(techs?.filter((element) => element.id !== id));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(`${error.response?.data.message}`);
      }
    }
  };

  return (
    <TechContext.Provider value={{ deleteTech, registerTech }}>
      {children}
    </TechContext.Provider>
  );
};
