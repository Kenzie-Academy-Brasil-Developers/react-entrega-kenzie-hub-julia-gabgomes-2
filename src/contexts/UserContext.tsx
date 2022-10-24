import { createContext, useState, useEffect, ReactNode } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { notifySuccess, notifyError } from "../notifications/index";
import axios from "axios";

//-----------------------------INTERFACES------------------------------//

interface IUserProviderProps {
  children: ReactNode;
}

interface ILoginUserData {
  email: string;
  password: string;
}

interface IRegisterUserData {
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserTechs {
  id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  user: {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: IUserTechs[];
  };
  token: string;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loginUser(data: ILoginUserData): Promise<void>;
  registerUser(data: IRegisterUserData): Promise<void>;
  loading: boolean;
  techs: IUserTechs[] | null;
  setTechs: React.Dispatch<React.SetStateAction<IUserTechs[] | null>>;
}

//--------------------------------------------------------------------//

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<IUserTechs[] | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@KENZIE_HUB:TOKEN");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const request = await api.get<IUser>("/profile");
          setUser(request.data);
          setTechs(request.data.user.techs);
          navigate("/dashboard", { replace: true });
        } catch (error) {
          localStorage.removeItem("@KENZIE_HUB:TOKEN");
          localStorage.removeItem("@KENZIE_HUB:USER_ID");
        }
      }

      setLoading(false);
    };

    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginUser = async (data: ILoginUserData): Promise<void> => {
    try {
      const request = await api.post<IUser>("/sessions", data); //fazer desconstrução
      api.defaults.headers.common.authorization = `Bearer ${request.data.token}`;
      localStorage.setItem("@KENZIE_HUB:TOKEN", request.data.token);
      localStorage.setItem("@KENZIE_HUB:USER_ID", request.data.user.id);
      setUser(request.data);
      setTechs(request.data.user.techs);
      notifySuccess("Login realizado com sucesso!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(`${error.response?.data.message}`);
      }
    }
  };

  const registerUser = async (data: IRegisterUserData): Promise<void> => {
    try {
      await api.post<IUser>("/users", data);
      navigate("/");
      notifySuccess("Cadastro realizado com sucesso! Faça seu login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(`${error.response?.data.message}`);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        loading,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
