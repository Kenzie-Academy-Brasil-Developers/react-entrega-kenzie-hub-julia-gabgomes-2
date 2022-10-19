import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const request = await api.post("/sessions", data);
      localStorage.setItem("@KENZIE_HUB:TOKEN", request.data.token);
      localStorage.setItem("@KENZIE_HUB:USER_ID", request.data.user.id);
      setUser(request.data.user);
      //toast
      navigate("/dashboard");
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
    <UserContext.Provider value={{ user, setUser, loginUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
