import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("acionou o useEffect");
    const loadUser = async () => {
      const token = localStorage.getItem("@KENZIE_HUB:TOKEN");
      // console.log(token);

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const request = await api.get("/profile");
          setUser(request.data);
          setTechs(request.data.techs);
          // console.error("deu certo o token", request.data);
        } catch (error) {
          localStorage.removeItem("@KENZIE_HUB:TOKEN");
          localStorage.removeItem("@KENZIE_HUB:USER_ID");
          // console.error("deu erro no token", error);
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
      //toast
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
      //toast com error.response.data.message
    }
  };

  const registerUser = async (data) => {
    console.log("Registrou o usuário", data);
    try {
      const response = await api.post("/users", data);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      //toast com error.response.data.message
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
