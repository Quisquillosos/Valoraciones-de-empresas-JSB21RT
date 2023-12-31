import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);

        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  const updateUserData = async () => {
    const data = await getMyDataService(token);
    setUser(data);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    navigate("/users/login");
  };

  const login = (token) => {
    setToken(token.token);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, updateUserData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
