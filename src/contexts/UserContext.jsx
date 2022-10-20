import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { notifySuccess, notifyError } from "../notifications/index.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@KENZIE_HUB:TOKEN");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const request = await api.get("/profile");
          setUser(request.data);
          setTechs(request.data.techs);
          navigate("/dashboard", { replace: true });
        } catch (error) {
          localStorage.removeItem("@KENZIE_HUB:TOKEN");
          localStorage.removeItem("@KENZIE_HUB:USER_ID");
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const loginUser = async (data) => {
    try {
      const request = await api.post("/sessions", data); //fazer desconstrução
      api.defaults.headers.authorization = `Bearer ${request.data.token}`;
      localStorage.setItem("@KENZIE_HUB:TOKEN", request.data.token);
      localStorage.setItem("@KENZIE_HUB:USER_ID", request.data.user.id);
      setUser(request.data.user);
      setTechs(request.data.user.techs);
      notifySuccess("Login realizado com sucesso!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      notifyError(`${error.response.data.message}`);
    }
  };

  const registerUser = async (data) => {
    console.log("Registrou o usuário", data);
    try {
      const response = await api.post("/users", data);
      navigate("/");
      notifySuccess("Cadastro realizado com sucesso! Faça seu login");
    } catch (error) {
      notifyError(`${error.response.data.message}`);
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
