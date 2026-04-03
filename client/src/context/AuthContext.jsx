// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(null);

//   const login = (data) => {
//     localStorage.setItem("token", data.token);
//     setUser(data.user);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/api/user/data");
      setUser(res.data.user);
    } catch {}
  };

  fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};