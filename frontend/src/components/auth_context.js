import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  useEffect(() => {
    const data = localStorage.getItem("token");
    async function ftch() {
      const response = await axios.post("http://localhost:8000/login/getData", {
        data,
      });
      if (response.data.status === true) {
        // const dt = {email : response.data.email, }
        login(response.data.email);
      }
    }
    if (data) {
      ftch();
    }
  });
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
